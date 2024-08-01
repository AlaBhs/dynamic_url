from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import uuid
import os

app = Flask(__name__)
CORS(app)
# In-memory dictionary to store UUIDs and their status
uuid_store = {}

@app.route('/')
def home():
    return render_template('redirection.html')

@app.route('/redirect', methods=['POST'])
def handle_post():
    unique_id = str(uuid.uuid4())

    # Add the UUID to the store with initial status as not used
    uuid_store[unique_id] = False

    unique_url = f"/unique/{unique_id}"

    return jsonify({'redirect_url': unique_url})

@app.route('/unique/<unique_id>')
def serve_unique(unique_id):
    if unique_id in uuid_store:
        if uuid_store[unique_id]:
            return "This URL has already been used.", 410  # 410 Gone
        else:
            uuid_store[unique_id] = True  # Mark UUID as used
            # Serve the index.html file located in the templates folder
            return render_template('index.html', unique_id=unique_id)
    else:
        return "Invalid UUID", 404
    

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)
