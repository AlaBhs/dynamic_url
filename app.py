from flask import Flask, request, jsonify, send_file, render_template
from flask_cors import CORS
import uuid
import os

app = Flask(__name__)
CORS(app)

@app.route('/redirect', methods=['POST'])
def handle_post():
    unique_id = str(uuid.uuid4())
    unique_url = f"/unique/{unique_id}"
    return jsonify({'redirect_url': unique_url})

@app.route('/unique/<unique_id>')
def serve_unique(unique_id):
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
