from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate-art', methods=['POST'])
def generate_art():
    data = request.json
    text = data.get('text')
    style = data.get('style')

    # Placeholder for AI image generation logic
    # For now, simulate image URL generation
    image_url = f"https://source.unsplash.com/512x512/?{style},art,{text}"

    return jsonify({'image_url': image_url})

if __name__ == '__main__':
    app.run(debug=True)
