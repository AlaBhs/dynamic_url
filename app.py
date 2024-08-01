from flask import Flask, request, jsonify, send_file
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
    # Serve the index.html file located in the templates folder
    file_path = os.path.join('templates', 'index.html')
    if os.path.exists(file_path):
        return send_file(file_path)
    else:
        return "File not found", 404

if __name__ == '__main__':
    app.run(debug=True)
