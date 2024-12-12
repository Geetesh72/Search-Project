Elasticsearch Autocomplete Project

This project demonstrates a simple Search as You Type implementation using Elasticsearch, Express.js for the backend, and React for the frontend. It includes features like autocomplete and full-text search.

Requirements

1. Prerequisites

Node.js and npm installed on your machine.

Elasticsearch installed and running locally at http://localhost:9200.

Basic understanding of JavaScript, React, and REST APIs.

2. Dependencies

Backend (Express.js)

express

body-parser

cors

dotenv

@elastic/elasticsearch

Frontend (React)

axios

@mui/material

@emotion/react

@emotion/styled

3. Necessary Conditions to Run the Project

Ensure Elasticsearch is running with a valid index (e.g., myelkfirst).

The backend server (Node.js) should be running on port 4000.

The frontend application should be running on port 3000.

Tech Stack

Frontend

React: For building the user interface.

Material-UI (MUI): For modern and responsive UI components.

Backend

Express.js: A fast and lightweight web framework for Node.js.

Elasticsearch Node.js Client: To interact with the Elasticsearch instance.

Database

Elasticsearch: A distributed, RESTful search engine.

Setup and Run

Step 1: Backend Setup

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Start the backend server:

node index.js

The backend server will run on http://localhost:4000.

Step 2: Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm start

The frontend application will run on http://localhost:3000.

Step 3: Elasticsearch Setup

Ensure Elasticsearch is running locally.

Create an index (myelkfirst) if it doesn't exist.

Populate the index with sample documents (refer to the Elasticsearch documentation or use the /_bulk API).

How to Test the Application

Open the application in your browser at http://localhost:3000.

Use the search bar to type queries. Suggestions will appear dynamically as you type.
