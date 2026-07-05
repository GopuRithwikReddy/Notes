# Notes

A full-stack Notes application built using the MERN stack.

The project currently includes a complete authentication system using JWT and HTTP-only cookies.

## 📚 Documentation

Detailed backend API documentation, including endpoints, authentication, and security, is available in:

- [`backend/API.md`](backend/API.md)
---

## 🚀 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cookie Parser
- CORS

---

## ✨ Features

### Authentication

- ✅ User Registration
- ✅ User Login
- ✅ Persistent Authentication
- ✅ Protected Routes
- ✅ Logout
- ✅ JWT Authentication using HTTP-only Cookies

---

## 📁 Folder Structure

```text
Notes/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/GopuRithwikReddy/Notes.git
```

### Backend

```bash
cd Notes/backend
npm install
npm run dev
```

### Frontend

Open another terminal.

```bash
cd Notes/frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables

### Backend (`backend/.env`)

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development
# Change to "production" when deploying the application.
```

### Frontend

No environment variables are required for local development.

The frontend currently uses the API URL configured in:

```text
src/api/axios.js
```

If you deploy the application later, you can move the API URL into a frontend `.env` file.

Example:

```env
VITE_API_URL=https://your-backend-url.com/api
```

and update `src/api/axios.js` accordingly.

---

## 📌 Current Status

✅ Authentication system completed.

---

## 📜 License

This project is licensed under the MIT License.