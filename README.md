# 📝 Notes

A modern full-stack Notes application built with the **MERN Stack**.

The application allows users to securely register, log in, and manage their personal notes. Authentication is implemented using **JWT stored in HTTP-only cookies** for improved security.


🌐 **Live Demo:** https://notes-sigma-mocha.vercel.app

---

## 🚀 Features

### 🔐 Authentication

- ✅ User Registration
- ✅ User Login
- ✅ Persistent Authentication
- ✅ JWT Authentication using HTTP-only Cookies
- ✅ Protected Routes
- ✅ Logout
- ✅ User Profile

### 📝 Notes

- ✅ Create Notes
- ✅ View Notes
- ✅ Edit Notes
- ✅ Delete Notes
- ✅ Delete Confirmation
- ✅ Search Notes
- ✅ Responsive Dashboard
- ✅ Empty State UI

### 🎨 User Interface

- ✅ Responsive Design
- ✅ Mobile Friendly
- ✅ Loading States
- ✅ Modern Dark Theme
- ✅ Clean & Minimal UI

---

## 📚 Documentation

Backend API documentation is available here:

- [`backend/API.md`](Backend/API.md)

---

## 🛠 Tech Stack

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

## 📂 Project Structure

```text
Notes/
│
├── Backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── Frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/GopuRithwikReddy/Notes.git
cd Notes
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

Open another terminal.

```bash
cd Frontend
npm install
npm run dev
```

> Start the backend first, then the frontend.

---

## 🌐 Environment Variables

### Backend (`Backend/.env`)

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development
```

### Frontend

Update the API URL inside:

```text
src/api/axios.js
```

For production, you can use:

```env
VITE_API_URL=https://your-backend-url.com/api
```

---

## 📌 Highlights

- 🔐 Secure JWT Authentication
- 🍪 HTTP-only Cookie Authentication
- 📝 Complete Notes CRUD
- 🔍 Real-time Search
- 👤 User Profile
- 📱 Fully Responsive
- ⚡ Fast React + Vite Frontend
- 🌙 Modern Dark UI


## 📖 What I Learned

- Building a complete MERN application
- JWT Authentication with HTTP-only cookies
- Protected Routes
- REST API development with Express
- MongoDB & Mongoose
- Responsive UI with Tailwind CSS
- State management using React Hooks

## 📜 License

This project is licensed under the MIT License.