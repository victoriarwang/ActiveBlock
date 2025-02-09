# backend/routes/main.py
from flask import Blueprint, jsonify

main_bp = Blueprint('main', __name__)

@main_bp.route('/api/hello')
def hello():
    return jsonify(message="Hello from the Flask API!")
