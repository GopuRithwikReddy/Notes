# 📘 Backend API Documentation

A secure RESTful Notes API built with **Node.js**, **Express.js**, and **MongoDB**. The API supports user authentication using **JWT stored in HTTP-only cookies** and allows authenticated users to manage only their own notes.

## Features

### Authentication
- User registration
- User login
- User logout
- Get current authenticated user
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookie-based authentication
- Protected routes

### Notes

* Create a note
* Get all notes for the logged-in user
* Get a specific note
* Update a note
* Delete a note
* User-specific note ownership and authorization

### Validation & Error Handling

* Request validation using Zod
* Centralized error handling
* Async error handling middleware

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcrypt
* Zod
* cookie-parser

## Project Structure

```
src/
├── config
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── validators/
├── app.js
└── server.js
```

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `backend` directory.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

## Running the Project

```bash
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint             | Description                          |
| ------ | -------------------- | -------------------                  |
| POST   | `/api/auth/register` | Register a new user                  |
| POST   | `/api/auth/login`    | Login a user                         |
| POST   | `/api/auth/logout`   | Logout the current user              |
| GET    |  `/api/auth/me`      | Get the currently authenticated user |

### Notes

| Method | Endpoint         | Protected |
| ------ | ---------------- | --------- |
| POST   | `/api/notes`     | ✅         |
| GET    | `/api/notes`     | ✅         |
| GET    | `/api/notes/:id` | ✅         |
| PUT    | `/api/notes/:id` | ✅         |
| DELETE | `/api/notes/:id` | ✅         |

## Security

* Passwords are hashed before storage.
* JWT tokens are stored in HTTP-only cookies.
* Protected routes require authentication.
* Users can only access their own notes.
* Input validation is handled using Zod.

## License
MIT
