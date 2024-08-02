from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import uuid
import os
import threading
import time

app = Flask(__name__)
CORS(app)

# In-memory dictionary to store UUIDs and their status
uuid_store = {}
UUID_LIVE_TIME = 900
CLEANUP_TIME = 600  

@app.route('/')
def home():
    return render_template('redirection.html')

@app.route('/redirect', methods=['POST'])
def handle_post():
    unique_id = str(uuid.uuid4())

    # Add the UUID to the store with initial status as available
    uuid_store[unique_id] = {
        'creation_time': time.time(),
        'available': True
    }

    unique_url = f"/unique/{unique_id}"

    return jsonify({'redirect_url': unique_url})

@app.route('/unique/<unique_id>')
def serve_unique(unique_id):
    if unique_id in uuid_store:
        current_time = time.time()
        creation_time = uuid_store[unique_id]['creation_time']
        
        # Check if the URL is within the live time
        if current_time - creation_time <= UUID_LIVE_TIME:
            # Serve the index.html file located in the templates folder
            return render_template('index.html', unique_id=unique_id)
        else:
            # Mark the UUID as no longer available
            uuid_store[unique_id]['available'] = False
            return render_template('404.html'), 410  # 410 Gone
    else:
        return render_template('404.html'), 404

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

@app.route('/uuid_store', methods=['GET'])
def get_uuid_store():
    # Return the current state of the uuid_store for debugging
    return jsonify(uuid_store)

def cleanup_task():
    while True:
        to_delete = [unique_id for unique_id, data in uuid_store.items() if not data['available']]
        for unique_id in to_delete:
            del uuid_store[unique_id]
        time.sleep(CLEANUP_TIME)  

if __name__ == '__main__':
    # Start the cleanup task in a separate thread
    cleanup_thread = threading.Thread(target=cleanup_task, daemon=True)
    cleanup_thread.start()
    app.run(debug=True)
