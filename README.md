# Intro to Backend

A RESTful API backend project built with Node.js, Express, and MongoDB for learning backend development fundamentals.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)

## ✨ Features

- User authentication (register, login, logout)
- Password hashing with bcrypt
- MongoDB database integration with Mongoose
- RESTful API design
- Post/content management system
- Error handling and validation
- Environment variable configuration

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **nodemon** - Development auto-reload

## 📁 Project Structure

```
Into-to-backend/
├── backend/
│   ├── controllers/
│   │   ├── user.controller.js    # User business logic
│   │   └── post.controller.js    # Post business logic
│   ├── routes/
│   │   ├── user.route.js         # User API routes
│   │   └── post.route.js         # Post API routes
│   └── src/
│       ├── config/
│       │   ├── constants.js      # App constants
│       │   └── database.js       # MongoDB connection
│       ├── models/
│       │   ├── user.model.js     # User schema
│       │   └── post.model.js     # Post schema
│       ├── app.js                # Express app setup
│       └── index.js              # Server entry point
├── .env                          # Environment variables
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Bandla1995/Into-to-backend.git
cd Into-to-backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```bash
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server
```bash
npm run dev
```

The server will start on `http://localhost:8000`

## 🔐 Environment Variables

Create a `.env` file with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `8000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://username:password@cluster.mongodb.net/dbname` |

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add database user with username and password
4. Whitelist your IP address (or use `0.0.0.0/0` for development)
5. Get your connection string and add it to `.env`

## 📡 API Endpoints

### User Routes

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/api/v1/users/register` | Register new user | `{username, email, password}` |
| POST | `/api/v1/users/login` | Login user | `{email, password}` |
| POST | `/api/v1/users/logout` | Logout user | `{email}` |

### Post Routes

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/api/v1/posts/create` | Create new post | `{name, description, age}` |

## 💡 Usage Examples

### Register a User

```bash
POST http://localhost:8000/api/v1/users/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login

```bash
POST http://localhost:8000/api/v1/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create a Post

```bash
POST http://localhost:8000/api/v1/posts/create
Content-Type: application/json

{
  "name": "John Doe",
  "description": "This is a sample post",
  "age": 25
}
```

## 🧪 Testing with Postman

1. Download and install [Postman](https://www.postman.com/)
2. Create a new request
3. Set the request method (GET, POST, etc.)
4. Enter the endpoint URL
5. Add headers: `Content-Type: application/json`
6. Add request body (for POST requests)
7. Click Send

## 📝 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not configured yet)

## 👤 Author

**Benjamin**

- GitHub: [@Bandla1995](https://github.com/Bandla1995)

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 