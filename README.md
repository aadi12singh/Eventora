# Eventora - Event Booking Platform

Eventora is a full-stack event booking platform that allows users to discover events, register for an account, and book tickets. Administrators can create and manage events and handle booking requests.

## 🚀 Features

### User Features
- User registration and login
- Email OTP verification
- Browse available events
- View event details
- Book event tickets
- View booking status
- User authentication and authorization

### Admin Features
- Admin authentication
- Admin dashboard
- Create new events
- Manage events
- View booking requests
- Manage booking statuses
- Track event seats and bookings

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Nodemailer

### Database
- MongoDB

## 📁 Project Structure

```text
Eventora/
│
├── client/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   └── eventController.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   ├── Booking.js
│   │   └── OTP.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── events.js
│   │   └── bookings.js
│   │
│   ├── utils/
│   │   └── email.js
│   │
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── .gitignore