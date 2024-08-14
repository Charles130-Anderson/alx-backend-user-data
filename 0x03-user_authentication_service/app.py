#!/usr/bin/env python3
"""Basic Flask application"""
from auth import Auth
from flask import Flask, request, jsonify, abort, make_response, redirect
from sqlalchemy.orm.exc import NoResultFound
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


@app.route('/reset_password', methods=['POST'], strict_slashes=False)
def get_reset_password_token() -> str:
    """Generate a reset password token"""
    user_request = request.form
    user_email = user_request.get('email')
    is_registered = AUTH.create_session(user_email)

    if not is_registered:
        abort(403)

    token = AUTH.get_reset_password_token(user_email)
    message = {"email": user_email, "reset_token": token}
    return jsonify(message)


@app.route('/reset_password', methods=['PUT'])
def update_password() -> str:
    """Handle password reset"""
    try:
        email = request.form['email']
        reset_token = request.form['reset_token']
        new_password = request.form['new_password']
    except KeyError:
        abort(400)

    try:
        AUTH.update_password(reset_token, new_password)
    except ValueError:
        abort(403)

    msg = {"email": email, "message": "Password updated"}
    return jsonify(msg), 200


if __name__ == "__main__":
    """Run the Flask app"""
    app.run(host="0.0.0.0", port="5000")
