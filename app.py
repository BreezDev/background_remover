from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from rembg import remove
from PIL import Image
import io
import os

app = Flask(__name__)


if not os.path.exists('static'):
    os.makedirs('static')


@app.route('/', methods=['GET', 'POST'])
def index():
    processed_image = None
    if request.method == 'POST':
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            return redirect(request.url)
        custom_filename = request.form.get('filename', 'output') + '.png'
        input_image = Image.open(file)
        output_image = remove(input_image)
        output_path = os.path.join('static', custom_filename)
        output_image.save(output_path)
        processed_image = custom_filename

    return render_template('index.html', processed_image=processed_image)


@app.route('/download/<filename>', methods=['GET'])
def download(filename):
    return send_from_directory('static', filename, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
