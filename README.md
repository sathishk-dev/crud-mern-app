# CRUD MERN App

This is a basic CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to submit their name, email, and age, store the data in a MongoDB database, and display it on the same page.

## Live Demo

[CRUD MERN App](https://crud-mern-app-ebon.vercel.app/)

## Features

- Add new users with name, email, and age.
- Display the submitted data in real-time.
- Store data in a MongoDB database.
- Simple and clean UI.

## Project Structure

The project has two main folders:

- **client/**: Contains the React frontend.
- **server/**: Contains the Express backend.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sathishk-dev/crud-mern-app.git
   cd crud-mern-app
   ```

2. **Install dependencies for both client and server:**
  ```bash
  cd client
  npm install

  cd ../server
  npm install
  ```
3. **Run the app:**
   - Start the server
   ```bash
   cd server
   npm start
   ```
   - Start the client
   ```bash
    cd client
    npm run dev
   ```
4. **Access the app:**
   - Go to http://localhost:3000 in your browser to view the app.

## Tech Stack

- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Deployment:** Vercel

