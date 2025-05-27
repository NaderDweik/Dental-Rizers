# Dental Rizers

This is a comprehensive React application designed for managing dental clinic operations, featuring a robust authentication and authorization system with different user roles.

-----

## Table of Contents

1.  **Features**
2.  **Authentication & Authorization System**
      * User Roles
      * Authentication Flow
      * Authorization (Protected Routes)
3.  **Technical Stack**
4.  **Project Structure**
5.  **Getting Started**
      * Prerequisites
      * Installation
      * Running the Application
6.  **Live Demo**
7.  **Screenshots**
8.  **Key Learning Outcomes**
9.  **Contributing**
10. **License**
11. **Contact**

-----

## Features

  * **User Authentication**: Secure login with JWT token handling.
  * **Role-Based Authorization**: Differentiated access for Admin, Doctor, and Designer roles.
  * **Protected Routes**: Custom components to enforce authentication and role-based access.
  * **Global State Management**: Efficient state handling with Redux Toolkit.
  * **Modular Project Structure**: Organized codebase for easy maintenance and scalability.
  * **Responsive UI**: (Assumed, can be explicitly stated if implemented)
  * **API Integration**: Uses DummyJSON for mock authentication and data.

-----

## Authentication & Authorization System

The application features a comprehensive authentication and authorization system:

### User Roles

  * **Admin**: Full access to all features, including administrative panels.
  * **Doctor**: Access to patient management, treatment plans, and doctor-specific dashboards.
  * **Designer**: Limited access, primarily to design-related sections.

### Authentication Flow

1.  User enters credentials on the **Login page**.
2.  Credentials are sent to a dummy authentication API (DummyJSON).
3.  Upon successful login, a **JWT token** and user details are received.
4.  The JWT token and user information (including role and permissions) are stored in **Redux state** and `localStorage`.
5.  The user is programmatically redirected to their respective dashboard or a default protected route.

### Authorization (Protected Routes)

  * Custom `ProtectedRoute` and `PublicOnlyRoute` components are used to wrap route elements.
  * These components check the `isAuthenticated` status from Redux.
  * For **role-based access**, `ProtectedRoute` also checks if the logged-in user's role matches the `requiredRole` prop.
  * If authentication/authorization checks fail, the user is redirected (e.g., to `/login` or an "Access Denied" page).

<!-- end list -->

```javascript
// Example of ProtectedRoute usage in App.jsx
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

-----

## Technical Stack

  * **Frontend**:
      * **React**: JavaScript library for building user interfaces.
      * **React Router DOM**: Declarative routing for React.
      * **Redux Toolkit**: Efficient global state management for React applications.
      * **React Redux**: Official React bindings for Redux.
      * **Styling**: (Assumed basic CSS/Tailwind/Styled Components - can be specified if implemented)
      * **API Integration**:
          * **DummyJSON API**: Used for mock authentication and data fetching.
          * **Axios / Fetch API**: For making HTTP requests (can specify which one used).

-----

## Project Structure

The project follows a modular and organized structure to enhance readability and maintainability.

```
├── public/
├── src/
│   ├── assets/                 # Static assets like images, icons
│   ├── components/
│   │   ├── auth/
│   │   │   ├── ProtectedRoute.jsx  # Component to protect routes requiring authentication
│   │   │   └── PublicOnlyRoute.jsx # Component to redirect logged-in users from public-only routes
│   │   ├── common/             # Reusable UI components (e.g., Navbar, Footer)
│   │   └── patients/           # Components related to patient management
│   ├── config/                 # Configuration files (e.g., API_BASE_URL)
│   ├── hooks/                  # Custom React hooks
│   ├── pages/
│   │   ├── auth/
│   │   │   └── LoginPage.jsx   # Login page component
│   │   ├── admin/
│   │   │   └── AdminDashboard.jsx # Admin specific dashboard
│   │   ├── doctor/
│   │   │   └── DoctorDashboard.jsx # Doctor specific dashboard
│   │   ├── designer/
│   │   │   └── DesignerDashboard.jsx # Designer specific dashboard
│   │   ├── Home.jsx            # Public home page
│   │   ├── Dashboard.jsx       # General user dashboard (default protected)
│   │   ├── NotFound.jsx        # 404 page
│   │   └── ...                 # Other specific pages (e.g., PatientsList, PatientDetail)
│   ├── services/
│   │   └── authService.js      # Functions for API calls related to authentication
│   │   └── patientService.js   # Functions for API calls related to patients
│   ├── store/
│   │   ├── index.js            # Redux store configuration
│   │   └── authSlice.js        # Redux slice for authentication state
│   │   └── patientSlice.js     # Redux slice for patient data (if implemented)
│   ├── App.jsx                 # Main application component, defines routes
│   ├── main.jsx                # Entry point of the React application
│   └── index.css / App.css     # Global styles
└── package.json
└── README.md
```

-----

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

  * Node.js (LTS version recommended)
  * npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/NaderDweik/Dental-Rizers.git
    cd Dental-Rizers
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # OR
    yarn install
    ```

### Running the Application

1.  **Start the development server**:
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
2.  **Open your browser**: The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).

-----

## Live Demo

[Your Live Demo URL Here]

-----

## Screenshots

Here are some screenshots demonstrating the application's key features and different user experiences.

**Home Page (Public)**
(Insert Home Page Screenshot)

**Login Page (Public Only)**
(Insert Login Page Screenshot)

**Admin Dashboard (Protected - Admin Role)**
(Insert Admin Dashboard Screenshot)

**Doctor Dashboard (Protected - Doctor Role)**
(Insert Doctor Dashboard Screenshot)

**Access Denied / Unauthorized Page (Example)**
(Insert Access Denied Page Screenshot)

**Patient List (CRUD Example)**
(Insert Patient List Screenshot)

-----

## Key Learning Outcomes

This project provides practical insights into:

  * **Mastering React Router DOM**: From basic `Routes` and `Route` to `Link`, `NavLink`, and programmatic navigation with `useNavigate`.
  * **Robust Authentication**: Implementing a full-fledged authentication system with JWT tokens, login, logout, and session persistence.
  * **Advanced Authorization**: Designing and applying role-based and permission-based access control for different user types.
  * **Effective State Management**: Utilizing Redux Toolkit for scalable and predictable global state.
  * **Building Reusable Components**: Creating generic `ProtectedRoute` and `PublicOnlyRoute` components for cleaner code.
  * **Integrating with Real APIs**: Understanding the workflow of fetching data and handling responses with a backend.
  * **Structuring Large React Applications**: Organizing components, pages, and Redux logic for maintainability.

-----

## Contributing

Contributions are welcome\! If you have suggestions for improvements, find bugs, or want to add new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

-----

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

-----

## Contact

  * **Nader Dweik**
  * **GitHub**: [NaderDweik](https://www.google.com/search?q=https://github.com/NaderDweik)
  * **Email**: your.email@example.com (Optional)
  * **LinkedIn**: Your LinkedIn Profile URL (Optional)
