# Background Remover Web App

This is a simple web application built with Python and Flask that removes the background from an image using the rembg library. The user can upload an image, view the processed image with the background removed, and optionally download the result.

## Features

- Upload an image in any common format (JPEG, PNG, etc.).
- View the image with the background removed directly on the web page.
- Download the processed image as a PNG file.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/breezdev/background_remover.git
    cd background_remover
    ```

2. Create and activate a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run the application:

    ```bash
    python app.py
    ```

5. Open your web browser and go to `http://127.0.0.1:5000/`.

## Dependencies

- Flask
- rembg
- Pillow

These dependencies are listed in the `requirements.txt` file.

## Contributing

Feel free to fork this project and submit pull requests. Any enhancements or bug fixes are welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
