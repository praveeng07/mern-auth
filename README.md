# MERN Authentication Backend

This is a backend application for authentication using the MERN stack (MongoDB, Express.js, React, Node.js). It includes user registration, login, and logout functionality with JWT-based authentication.

## Getting Started

### Clone the repository
First, clone this repository to your local machine:

```bash
git clone https://github.com/praveeng07/mern-auth.git
```

Install dependencies
Navigate to the server directory and install the required dependencies:
```bash
cd server
npm install
```

Run the server
To start the server and access the API endpoints, run the following command:

```bash
npm run server
```

The server will start, and you will have access to all the API endpoints.

Available Endpoints
POST /register: Register a new user
POST /login: Login an existing user
POST /logout: Logout the current user
POST /send-verify-otp: Send an OTP for email verification (requires authentication)
POST /verify-email: Verify the user's email with the OTP (requires authentication)
POST /is-auth: Check if the user is authenticated (requires authentication)
POST /send-reset-otp: Send an OTP for password reset
POST /reset-password: Reset the user's password with the OTP


Middleware
userAuth: This middleware is required for routes that need user authentication. It checks if the user has a valid JWT token.
Environment Variables
Make sure to set up the following environment variables for proper functionality:

JWT_SECRET_KEY: A secret key used for signing JWT tokens.
MONGO_URI: MongoDB connection string.
NODE_ENV: Set to production for a production environment or development for a local environment.

