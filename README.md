# MERN Authentication Backend

This is a backend application for authentication using the  (MongoDB, Express.js, Node.js). It includes user registration, login, and logout functionality with JWT-based authentication.

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

Create and configure .env file
Create a .env file in the root of the project and add the following environment variables:
```
MONGODB_URI='your_mongodb_connection_string'
JWT_SECRET_KEY='your_jwt_secret_key_here'
NODE_ENV='development'

SMTP_USER='your_smtp_username_here'
SMTP_PASS='your_smtp_password_here'

SENDER_EMAIL='your_sender_email'
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


### Middleware

userAuth: This middleware is required for routes that need user authentication. It checks if the user has a valid JWT token.



