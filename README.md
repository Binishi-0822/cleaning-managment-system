# Cleaning Service Management System

This is a comprehensive full-stack web application designed to simplify the management of cleaning services and booking processes. Built using ReactJS for the frontend, Node.js for the backend, and MongoDB as the database, it offers a seamless experience for users to book, track, and manage cleaning tasks efficiently.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or later)

## Getting Started

1. Clone the repository:

```
https://github.com/Binishi-0822/cleaning-managment-system.git
```

2. Navigate to the frontend project directory:

```
cd cleaning-management-system-frontend
```

3. Set up the front-end:

Open a terminal window and  install dependencies

```
npm install

```

4. Set up the back-end:

Open another terminal and navigate to backend directory. Then install dependencies

```
cd cleaning-management-system-frontend-backend
npm install

```
5. Add .env file
   
Create a file named .env in your backend directory. It should consist of these variables. Change the MONGO_URI and JWT_SECRET to your own data.

```
PORT=5000
MONGO_URI=yourmongouri
JWT_SECRET=yourjwtsecret

```

6. Run the application:

- Start the front-end development server:

  Run the frontend server from the terminal where you navigate to frontend directory
  
  ```
  npm run dev
  ```

- Start the back-end server:
  
  Run the backend server from the terminal where you navigate to backend directory

  ```
  nodemon index.js
  
  ```
