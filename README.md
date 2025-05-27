# 🦷 Dental Rizers

A comprehensive **React-based web application** for managing dental clinic operations. Built with modern technologies and best practices, it features secure authentication, role-based authorization, and a modular architecture for scalability.

---

## 📸 Screenshots

<table>
  <tr>
    <strong>🏠 Home Page (Public)</strong><br><img src="https://github.com/user-attachments/assets/7e6862ae-e209-4183-88a3-1005044c9565" width="100%"/>
   <strong>🔐 Login Page (Public Only)</strong><br><img src="https://github.com/user-attachments/assets/d4b6b2e9-b9d2-47e5-8bba-ee815534dc2d" width="100%"/>
  </tr>
  <tr>
    <td><strong>🧑‍💼 Admin Dashboard</strong><br><img src="https://github.com/user-attachments/assets/70df4b4b-672c-4c84-ba1b-6550fa3f3b8c" width="100%"/></td>
    <td><strong>👨‍👩‍👧‍👦 Patient List (CRUD)</strong><br><img src="https://github.com/user-attachments/assets/368cb068-e880-46f7-bde8-3de0f020140d" width="100%"/></td>
  
  <tr>
    <td><strong>🎨 Designer Page</strong><br><img src="https://github.com/user-attachments/assets/d1358240-fda1-49ea-bee7-16b7f70e060e" width="100%"/></td>
    <td><strong>👤 Profile Page</strong><br><img src="https://github.com/user-attachments/assets/58cc41a2-ee5d-4d09-8773-46fdb64027db" width="100%"/></td>
  </tr>
    <tr>
    <strong>🚫 Access Denied</strong><br><img src="https://github.com/user-attachments/assets/bba04ab5-aef8-4204-a442-b328ae2a3f61" width="100%"/>
    <strong>🩺 Doctor Dashboard</strong><br><img src="https://github.com/user-attachments/assets/fcdac5b4-797a-419e-9df6-8ffd46e25b89" width="100%"/>
  </tr>



  


</table>

---

## 🔐 Authentication & Authorization

Dental Rizers includes a full authentication and role-based authorization system:

### 👥 User Roles

* **Admin** – Full access to all features.
* **Doctor** – Can manage patients, treatments, and view dashboards.
* **Designer** – Limited to design-related views.

### 🔄 Authentication Flow

1. User logs in via the **Login Page**
2. Credentials are verified via DummyJSON API
3. A **JWT token** and user data (including role) are received
4. Token & user data are saved in **Redux state** and `localStorage`
5. User is redirected based on their role

### 🔒 Protected Routes

Custom wrappers (`<ProtectedRoute />`, `<PublicOnlyRoute />`) check:

* `isAuthenticated` status via Redux
* Role matching (if `requiredRole` is set)

If validation fails, users are redirected to `/login` or an **Access Denied** page.

```jsx
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

<Route path="/admin" element={
  <ProtectedRoute requiredRole="admin">
    <AdminPanel />
  </ProtectedRoute>
} />
```

---

## ⚙️ Features

* ✅ **Authentication** with JWT
* 🔐 **Role-Based Access**: Admin, Doctor, Designer
* 🔒 **Protected Routes** via wrappers
* 🧠 **Redux Toolkit** for global state
* 🧩 **Modular structure** for scalability
* 📱 **Responsive UI** *(if implemented)*
* 🔗 **DummyJSON API** integration

---

## 🛠 Tech Stack

* **React** – UI library
* **React Router DOM** – Routing
* **Redux Toolkit + React Redux** – State management
* **Axios / Fetch** – API calls
* *(Styling via CSS/Tailwind – specify if needed)*

---

## 🗂 Project Structure

```
├── public/
├── src/
│   ├── assets/                 # Images, icons
│   ├── components/
│   │   ├── auth/               # Auth wrappers
│   │   ├── common/             # Reusable UI
│   │   └── patients/           # Patient views
│   ├── config/                 # App configs
│   ├── hooks/                  # Custom hooks
│   ├── pages/
│   │   ├── auth/               # Login
│   │   ├── admin/              # Admin view
│   │   ├── doctor/             # Doctor view
│   │   ├── designer/           # Designer view
│   │   └── ...                 # Shared pages
│   ├── services/
│   │   ├── authService.js
│   │   └── patientService.js
│   ├── store/
│   │   ├── authSlice.js
│   │   └── patientSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css / App.css
```

---

## 🚀 Getting Started

### 🧾 Prerequisites

* Node.js (LTS)
* npm or yarn

### 📦 Installation

```bash
git clone https://github.com/NaderDweik/Dental-Rizers.git
cd Dental-Rizers
npm install
# or
yarn install
```

### 🧪 Run Locally

```bash
npm run dev
# or
yarn dev
```

Visit: `http://localhost:5173`

---

## 📇 Contact

* **Nader Dweik**
* 🔗 [LinkedIn](https://www.linkedin.com/in/naderdweik/)
* 📧 [nderdweik@gmail.com](mailto:nderdweik@gmail.com)
* 💻 [GitHub](https://github.com/NaderDweik)

---
