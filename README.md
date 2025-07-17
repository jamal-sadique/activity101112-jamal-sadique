![Static Badge](https://img.shields.io/badge/Status-Graded-green)

## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## 🧾 Next Fullstack Invoicing App

A full-stack web application built with **Next.js**, **TailwindCSS**, and **NextAuth.js**, allowing users to log in and manage simple dashboard content like invoices. This project demonstrates my understanding of authentication, dynamic routing, protected pages, and modern frontend styling.

---

## 🚀 Live Demo

👉 [View Project on Vercel](https://activity101112-jamal-sadique.vercel.app/)

---

## ✨ Features

- ✅ Public home page
- 🔒 Login page with authentication (via NextAuth.js)
- 📊 Protected dashboard pages (accessible after login)
- ➕ Add, edit, and delete invoices (dynamic content)
- 🎨 Theme toggle (Dark Mode / Light Mode) on all pages  
- 📦 Backend database (e.g., SQLite/PostgreSQL via Prisma)
- 🧩 TailwindCSS + DaisyUI for responsive UI
- 🔍 Search and pagination for user-friendly navigation
- ⚙️ React Server Actions for data mutation and caching
- 🚫 Robust error handling (404 pages, form validation)
- 🌐 SEO-friendly metadata for social sharing

---

## 🔐 How to Use the App

1. Go to the login page
2. Use the test credentials:
   - **Email:** `user@nextmail.com`
   - **Password:** `123456`
3. After login, you’ll be redirected to the **Dashboard**
4. From there, you can:
   - View a list of invoices
   - Add new ones
   - Edit or delete existing ones
   - Switch between **dark** and **light** mode using the toggle button in the **bottom-right corner** (visible on all pages)

---

## 🛠️ Tech Stack

| Frontend       | Backend         | Tools & Auth         |
|----------------|------------------|------------------------|
| Next.js        | Prisma (or mock) | NextAuth.js            |
| TailwindCSS    | SQLite/PostgreSQL | Vercel (for deployment) |
| DaisyUI        | React Server Actions | GitHub                |

---

## 🧪 Installation (Run Locally)

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/your-username/activity-dashboard

# Go into the project folder
cd activity-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
