#!/usr/bin/env python3
"""Basic Flask application"""

from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world() -> str:
    """Return welcome message in JSON"""
    return jsonify({"message": "Bienvenue"})


if __name__ == "__main__":
    """Run the Flask app"""
    app.run(host="0.0.0.0", port="5000")
