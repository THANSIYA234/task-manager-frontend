# Task Manager Frontend

This is the **frontend** of the Task Manager application, built with **Vite + React**.  
It connects to the backend deployed on Railway.

---

## Live Demo

[Frontend Live URL](https://task-manager-frontend-j20i.onrender.com)
[Backend Live URL](https://task-manager-backend-1-j23n.onrender.com)

---

## Features

- Login & Authentication
- Task CRUD operations
- Fully responsive for mobile and desktop
- Connects to backend API

---

## Tech Stack

- React 18 + Vite
- Tailwind CSS (or your styling library)
- Fetch API / Axios for API requests

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/THANSIYA234/task-manager-frontend.git
cd task-manager-frontend

Install dependencies:

npm install

Create a .env file in the root folder with:

VITE_API_URL=https://task-manager-backend-1-j23n.onrender.com/api
Development

Start the development server:

npm run dev

Open http://localhost:5173
 in your browser.

Build for Production
npm run build
npm run preview

This creates a production-ready dist/ folder.

Deployment

You can deploy to Railway, Vercel, or Netlify.

Railway Example:

Push to GitHub

New Project → Deploy from GitHub → Select repo

Set VITE_API_URL variable

Build: npm install && npm run build

Start: npm run preview or npx serve -s dist

Notes

Make sure backend is deployed and accessible.

Enable CORS on backend for your frontend domain.

Developed by Thansiya P
```
