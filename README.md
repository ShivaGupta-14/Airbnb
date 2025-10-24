# 🏠 Airbnb Clone

A full-stack web application that replicates core Airbnb functionalities, built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌐 Live Demo
Experience the application live: [Airbnb Clone](https://airbnb-henna-eta.vercel.app)

## ✨ Features

### User Authentication
- 🔐 Secure signup/login with JWT authentication
- 🍪 HTTP-only cookie based session management
- 👤 User profile management

### Listing Management
- 📝 Create and manage property listings
- 🖼️ Upload multiple images with Cloudinary integration
- 📍 Add location details and property information
- 💰 Set rental prices and availability
- ⭐ Rating system for properties

### Booking System
- 📅 Book properties for specific dates
- 👁️ View booking history
- 🏠 Host dashboard for managing listings
- 💫 Real-time availability updates

### Search & Filter
- 🔍 Search properties by location
- 🏷️ Filter by categories
- 📊 Sort by price, ratings, etc.
- 🗺️ View property details with landmarks

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js with Vite for fast development
- 🎨 TailwindCSS for styling
- 📡 Axios for API calls
- 🔄 React Context for state management
- 🛣️ React Router for navigation
- 🔔 React Toastify for notifications

### Backend
- 🚀 Node.js & Express.js
- 📦 MongoDB with Mongoose ODM
- 🔒 JWT for authentication
- ☁️ Cloudinary for image storage
- 📁 Multer for file handling
- 🔐 bcrypt for password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- MongoDB
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShivaGupta-14/Airbnb.git
cd Airbnb
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Set up environment variables in \`backend/.env\`:
```env
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

5. Start the development servers:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## 📱 Features Showcase

### Authentication
- Secure user registration and login
- Password hashing and JWT token generation
- Protected routes with middleware

### Property Management
- Multi-step listing creation process
- Image upload with preview
- Detailed property information input
- Category and location tagging

### Booking System
- Availability checking
- Booking confirmation
- Booking history for guests
- Listing management for hosts

## 🎯 Key Learnings

- Building a full-stack application with MERN
- Implementing secure authentication with JWT
- Handling file uploads with Multer and Cloudinary
- Managing complex state with React Context
- Creating responsive designs with TailwindCSS
- Implementing search and filter functionality
- Error handling and user feedback
- Database schema design and relationships
- API design and implementation
- Deployment and environment configuration

## 🔐 Security Features

- HTTP-only cookies for JWT
- Password hashing with bcrypt
- Protected API routes
- Input validation and sanitization
- Secure file upload handling

## 🛣️ Future Roadmap

- [ ] Implement real-time chat between hosts and guests
- [ ] Add payment gateway integration
- [ ] Include map integration for property locations
- [ ] Add email verification
- [ ] Add advanced search filters
- [ ] Include property reviews and ratings system
- [ ] Add booking date range selection
