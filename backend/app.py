# backend/app.py
from flask import Flask, jsonify
from routes.main import main_bp

app = Flask(__name__)

app.register_blueprint(main_bp)

@app.route('/')
def index():
    return jsonify(message="Hello from Flask!")

if __name__ == '__main__':
    app.run(debug=True)
