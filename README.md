# Word-Frequency-App

This application analyzes the most frequently occurring words on any given webpage. It consists of a Node.js backend and a React frontend, which interact via a REST API. The backend fetches and processes the page content to identify the top 10 most frequent words, which are then displayed in a table on the frontend.

## Features

- **URL Input**: Enter a URL to analyze the text content of the page.
- **Word Frequency**: View the top 10 most frequent words along with their frequencies.
- **Interactive Interface**: User-friendly and responsive design.

## Demo

To use the app, simply enter the URL of a webpage. The app will retrieve the content, analyze the word frequencies, and display the results.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Additional Libraries**:
  - `jsdom` for HTML parsing
  - `cors` for Cross-Origin Resource Sharing

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/faizanmd08/Word-Frequency-app.git
   cd Word-Frequency-app
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Build the frontend:
   ```bash
   npm run build
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend:

   ```bash
   cd frontend
   npm start
   ```

3. Open a browser and go to `http://localhost:3001` to use the application.

## Usage

1. Enter the URL of the webpage you want to analyze in the input field.
2. Click the "Analyze" button.
3. View the top 10 most frequent words and their counts in the table below.

## Project Structure

- **backend/**: Contains the backend code, built using Express.js, which fetches and processes the webpage content.
- **frontend/**: Contains the frontend code, developed with React, to handle user input and display results.

## Future Improvements

- Add support for different languages and character sets.
- Implement caching for faster repeated analyses of the same webpage.
