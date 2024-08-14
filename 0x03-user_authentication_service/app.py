#!/usr/bin/env python3
"""Basic Flask application"""
from auth import Auth
from flask import Flask, request, jsonify, abort, make_response, redirect

app = Flask(__name__)
AUTH = Auth()


@app.route('/', methods=['GET'])
def welcome() -> str:
    """Return welcome message in JSON"""
    return jsonify({"message": "Bienvenue"})


@app.route("/users", methods=["POST"])
def register_user():
    """Register a new user"""
    email = request.form.get('email')
    password = request.form.get('password')

    try:
        new_user = AUTH.register_user(email, password)
        return jsonify({"email": new_user.email, "message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"}), 400


@app.route('/sessions', methods=['POST'])
def login():
    """POST /sessions route to log in a user"""
    email = request.form.get('email')
    password = request.form.get('password')

    if not AUTH.valid_login(email, password):
        abort(401)

    session_id = AUTH.create_session(email)
    response = make_response(jsonify({"email": email, "message": "logged in"}))
    response.set_cookie("session_id", session_id)

    return response


@app.route('/sessions', methods=['DELETE'], strict_slashes=False)
def logout():
    """Handle user logout and session destruction"""
    user_cookie = request.cookies.get("session_id", None)
    user = AUTH.get_user_from_session_id(user_cookie)
    if user_cookie is None or user is None:
        abort(403)
    AUTH.destroy_session(user.id)
    return redirect('/')


@app.route('/profile', methods=['GET'])
def profile():
    """Handle user profile retrieval"""
    session_id = request.cookies.get('session_id')
    if not session_id:
        abort(403)

    user = AUTH.get_user_from_session_id(session_id)
    if not user:
        abort(403)

    return jsonify({"email": user.email}), 200


if __name__ == "__main__":
    """Run the Flask app"""
    app.run(host="0.0.0.0", port="5000")
