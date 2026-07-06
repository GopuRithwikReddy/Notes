# 📝 Notes

A full-stack Notes application built using the MERN stack.

Users can securely register, log in, and manage their personal notes. Authentication is implemented using JWT stored in HTTP-only cookies for improved security.

> 🚧 This project is currently under active development.

---

## 📚 Documentation

Detailed backend API documentation, including endpoints, authentication, and security, is available in:

- [`backend/API.md`](Backend/API.md)

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
- ✅ JWT Authentication using HTTP-only Cookies
- ✅ Protected Routes
- ✅ Logout
- ✅ Responsive Authentication UI
- ✅ Password Visibility Toggle

### Notes

- 🚧 Dashboard (In Progress)
- ⏳ Create Notes
- ⏳ Edit Notes
- ⏳ Delete Notes
- ⏳ Search Notes

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
cd Notes
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

Open another terminal.

```bash
cd frontend
npm install
npm run dev
```

> Start the backend first, then the frontend.

---

## 🌐 Environment Variables

### Backend (`backend/.env`)

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development
# Change to "production" when deploying.
```

### Frontend

No environment variables are required for local development.

The frontend currently uses the API URL configured in:

```text
src/api/axios.js
```

For production, you can move the API URL into a `.env` file.

Example:

```env
VITE_API_URL=https://your-backend-url.com/api
```

---

## 📌 Current Status

- ✅ Authentication System
- ✅ Protected Routes
- 🚧 Dashboard UI
- ⏳ Notes CRUD
- ⏳ Search & Filtering

---

## 📸 Screenshots

Screenshots will be added once the dashboard and notes features are completed.

---

## 🌍 Live Demo

Coming soon.

---

## 📜 License

This project is licensed under the MIT License.