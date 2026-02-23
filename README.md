# Task Manager Frontend

This is the **frontend** of the Task Manager application, built with **Vite + React**. It connects to the Task Manager backend deployed on [Railway](https://task-manager-backend-production-0fc7.up.railway.app/).

---

## 🌐 Live Demo

[Frontend Live URL](https://your-frontend-railway-url.up.railway.app)  

(Replace with your Railway frontend URL after deployment)

---

## ⚡ Features

- Login & Authentication
- Task CRUD operations (Create, Read, Update, Delete)
- Connects with backend API hosted on Railway
- Fully responsive design for mobile and desktop

---

## 🛠 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS (or your styling library)
- **Backend API:** Node.js + NestJS + Prisma (deployed separately)
- **HTTP Client:** Fetch API / Axios

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/THANSIYA234/task-manager-frontend.git
cd task-manager-frontend

Install dependencies:

npm install

Create a .env file in the root folder with your backend URL:

VITE_API_URL=https://task-manager-backend-production-0fc7.up.railway.app
🚀 Development

Start the development server:

npm run dev

Open http://localhost:5173
 in your browser.
Vite supports hot-reloading, so changes are reflected instantly.

🏗 Build for Production
npm run build

This creates a dist/ folder with production-ready files.

To preview the production build locally:

npm run preview
