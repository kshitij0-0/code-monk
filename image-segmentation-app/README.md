
## Project Overview

The Image Segmentation App is a web application designed to segment images using advanced machine learning models, specifically Florence 2 and SAM 2. This application allows users to upload images and view the segmentation results, showcasing the power of TensorFlow.js and React for building AI-powered web applications.

## Installation Instructions

To get started with the Image Segmentation App, follow these steps:

1. **Clone the repository**

   ```
   git clone https://github.com/your-repository/image-segmentation-app.git
   ```

2. **Navigate to the project directory**

   ```
   cd image-segmentation-app
   ```

3. **Install dependencies**

   Run the following command to install the necessary dependencies for both the server and the client application:

   ```
   npm install
   cd client
   npm install
   cd ..
   ```

4. **Start the application**

   To start the server, run:

   ```
   npm start
   ```

   For starting the client, navigate to the client directory and run:

   ```
   cd client && npm start
   ```

   This setup helps in differentiating between starting the app in development and in production environments.

## Usage Guide

### Uploading an Image

1. **Navigate to the application**

   After starting the application, open your web browser and go to `http://localhost:3000`.

2. **Upload an image**

   Click on the "Upload Image" button and select an image from your computer that you wish to segment.

3. **View segmentation results**

   Once the image is uploaded, the application will process the image and display the segmentation results below the upload button.

## Dependencies

This project relies on several key dependencies:

- **Frontend**
  - `react` and `react-dom` for building the user interface.
  - `@tensorflow/tfjs` for running TensorFlow.js models in the browser.

- **Backend**
  - `express` for setting up the server.
  - `multer` for handling file uploads.

- **Development**
  - `concurrently` for running the server and client in parallel during development.

For a complete list of dependencies, refer to the `package.json` files located in the root and the `client` directory of the project.