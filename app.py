from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

sample_data = {
    "location": {
        "name": "Sample City",
        "region": "Sample Region",
        "country": "Sample Country"
    },
    "current": {
        "last_updated": "2023-10-28 12:00:00",
        "condition": {
            "icon": "sample.png",
            "text": "Sample Weather"
        },
        "temp_c": 20,
        "temp_f": 68
    }
}

@app.route('/api/weather', methods=['POST'])
def get_weather():
    return jsonify(sample_data)

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
