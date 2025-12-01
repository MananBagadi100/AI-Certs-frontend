# Mini Audit Trail Generator

A lightweight full‑stack web application that tracks text changes and generates an audit trail for every saved version.  
Built as a 2‑hour assignment using **React + Vite**, **Node.js + Express**, and **Axios**.

---

## 🚀 Features

### **Frontend**
- Clean, modern UI with a navbar and component‑based structure  
- Text editor to input content  
- Save Version button triggers backend diff logic  
- Version history displayed in neat, styled cards  
- Axios instance using environment variable `VITE_BACKEND_URL`

### **Backend**
- Express server with two main routes:
  - `POST /save-version` — computes added/removed words, stores version
  - `GET /versions` — returns all saved versions  
- Diff utility to identify added and removed words  
- Stores all versions in `data.json`  
- Uses UUID and timestamps (Day.js)

---

## 🧩 Folder Structure

### **Frontend**
```
frontend/
 ├── src/
 │    ├── components/
 │    │     ├── Editor.jsx
 │    │     ├── Editor.css
 │    │     ├── HistoryList.jsx
 │    │     ├── HistoryList.css
 │    │     ├── Navbar.jsx
 │    │     └── Navbar.css
 │    ├── App.jsx
 │    ├── App.css
 │    ├── api.js
 │    ├── main.jsx
 │    └── index.css
 ├── .env
 ├── .gitignore
 └── package.json
```

### **Backend**
```
backend/
 ├── controllers/
 │     └── versionController.js
 ├── routes/
 │     └── versionRoutes.js
 ├── utils/
 │     └── diffUtil.js
 ├── data.json
 ├── index.js
 ├── .env
 ├── .gitignore
 └── package.json
```

---

## 🔧 Environment Variables

### **Frontend (.env)**
```
VITE_BACKEND_URL="https://your-live-backend-url/api"
```

### **Backend (.env)**
```
PORT=3000
```

---

## 🖥 Running Locally

### **Backend**
```
cd backend
npm install
npm run dev  (or node index.js)
```

### **Frontend**
```
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment

### **Frontend: Vercel**
- Uses Vite build output (`dist`)
- Must configure `VITE_BACKEND_URL` in Vercel Environment Variables

### **Backend: Railway / Render**
- Deploy normally
- Replace the frontend `.env` variable with the live backend URL

---

## 📌 API Endpoints

### **POST /save-version**
Saves a new version and returns diff metadata.

### **GET /versions**
Returns all saved version entries.

---

## 🎯 Tech Stack

- **React + Vite**
- **Node.js + Express**
- **Axios**
- **UUID**
- **Day.js**

---

## 📄 Description

This app demonstrates:
- Backend diff logic
- Version history management
- Frontend API integration
- Component‑based UI architecture
- Clean and modern styling

Designed to show real‑world full‑stack ability within a short time frame.

---

## ✨ Author  
Manan Bagadi  
Full‑Stack Developer (React + Node.js)
