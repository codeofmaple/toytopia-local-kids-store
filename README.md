# ToyTopia 🧸 - A Local Kids Toy Store Platform

## 📖 Overview
ToyTopia is a vibrant and playful online marketplace designed to help families discover and support local toy sellers. This interactive platform allows users to browse toys, view detailed information, and leave feedback - all while encouraging community engagement and supporting small businesses.

## 🚀 Live Demo
🔗 **Live URL:** https://toytopia-kids-toystore.web.app/

## 🎯 Project Purpose
The goal of ToyTopia is to provide a colorful, interactive, and user-friendly toy shopping experience while supporting local toy stores. It aims to inspire imagination and fun in every child through an accessible digital platform that connects families with their community's toy sellers.

## ✨ Key Features

### 🔐 Authentication System
- **User Registration & Profile Management** - Complete user account creation and management
- **Firebase Authentication** - Secure login with both Email/Password and Google Login
- **Password Recovery** - Functional forgot password feature with email redirect
- **Persistent Sessions** - User state maintained across page reloads using Firebase onAuthStateChange

### 🛍️ Toy Shopping Experience
- **Interactive Toy Browsing** - Browse and view detailed toy information
- **User Reviews & Ratings** - Leave feedback and ratings for toys
- **Swiper Slider** - Engaging toy showcase with smooth animations
- **Protected Routes** - Secure access to authenticated user features

### 👤 User Management
- **Profile Updates** - Edit name and photoURL using Firebase updateProfile()
- **Dynamic Navbar** - Shows user image and name when logged in
- **Show/Hide Password** - Toggle password visibility on registration form

### 🎨 User Interface
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Toast Notifications** - Real-time feedback for user actions
- **Custom 404 Page** - Friendly error page with engaging design
- **Dynamic Page Titles** - Unique titles for each page

## 🛠️ Technology Stack

### Frontend
- **React** - Core UI library for building user interfaces
- **React Router** - Client-side routing for single-page application
- **Tailwind CSS** - Utility-first CSS framework for styling
- **DaisyUI** - Component library built on Tailwind CSS

### Backend & Services
- **Firebase** - Authentication, hosting, and backend services
- **Environment Variables** - Secure configuration management

### UI Enhancements
- **Swiper** - Modern touch slider for image carousels
- **React Icons** - Comprehensive icon library
- **React Spinners** - Loading animations and indicators
- **React Toastify** - Toast notification system

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| react | Core UI library |
| react-dom | React DOM rendering |
| react-router | Client-side routing |
| firebase | Authentication & backend services |
| tailwindcss | Utility-first CSS framework |
| daisyui | Tailwind component library |
| swiper | Image carousel/slider |
| react-icons | Icon library |
| react-spinners | Loading animations |
| react-toastify | Toast notifications |
| @tailwindcss/vite | Tailwind support for Vite |

## 🗂️ Project Structure

### Main Pages
- **Home Page** - Features slider, popular toys section, and additional content
- **Toy Details Page** - Protected route with comprehensive toy information
- **Login/Register** - Authentication pages with form validation
- **My Profile** - Protected route for user profile management
- **404 Page** - Custom error page

### Core Functionality
- **Navbar** - Dynamic navigation with user authentication state
- **Footer** - Consistent footer across all pages
- **Protected Routes** - Authentication-required pages
- **Form Handling** - User interactions and data submission

## 🔒 Security Features

- Environment variables for sensitive configuration
- Protected routes for authenticated content
- Firebase security rules
- Password validation (uppercase, lowercase, min 6 characters)
- Persistent authentication state

## 📱 Responsive Design

ToyTopia is fully responsive and optimized for:
- 📱 Mobile devices
- 📟 Tablets  
- 💻 Desktops
- 🖥️ Large screens

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- Firebase account for backend services

### Installation Steps
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables with your Firebase config
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## 🌟 Special Features

### Challenge Requirements Implemented
- ✅ My Profile page with Firebase updateProfile() functionality
- ✅ Show/hide password toggle with eye icon
- ✅ Swiper slider implementation for toy showcases
- ✅ Forgot password functionality with email redirect

### User Experience Enhancements
- Loading states during authentication
- Success/error messages via toast notifications
- Active route highlighting in navigation
- Hover effects and interactive elements

## 📄 License
This project is open-source and available under the **MIT License**.

## 🔄 Recent Updates
All project updates and feature implementations are documented in the project repository, ensuring transparency and clear tracking of development progress.

---

*Built with ❤️ for happy kids and local businesses* 