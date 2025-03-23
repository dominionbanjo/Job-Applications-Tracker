<!-- # Job Applications Manager (MERN Stack)

[Live Demo](https://job-applications-manager01.netlify.app)

This MERN stack project helps users track their job applications and monitor the progress of each application.

## Features

1. Add new job applications.
2. Track application progress: `Pending`, `Interview`, `Declined`.
3. Set job type: `Full-time`, `Internship`, `Pending`.
4. Edit job details and update statuses anytime.
5. Delete job applications.

## Tech Stack

### Frontend
- React
- Vite
- TypeScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security
- JSON Web Tokens (JWT)
- bcryptjs
- Helmet
- Express Rate Limit
- Express Validator
- Express Mongo Sanitize

### Other Dependencies
- Multer (File Uploads)
- Cloudinary (Image Hosting)
- Day.js (Date Formatting)
- Nanoid (Unique ID Generation)
- Cookie Parser

## Setup Instructions -->

# Job Applications Manager (MERN Stack)

[Live Demo](https://job-applications-manager01.netlify.app)

This MERN stack project helps users track their job applications and monitor the progress of each application.

## Features

1. Add new job applications.
2. Track application progress: `Pending`, `Interview`, `Declined`.
3. Set job type: `Full-time`, `Internship`, `Pending`.
4. Edit job details and update statuses anytime.
5. Delete job applications.

## Tech Stack

### Frontend

- React
- Vite
- TypeScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security

- JSON Web Tokens (JWT)
- bcryptjs
- Helmet
- Express Rate Limit
- Express Validator
- Express Mongo Sanitize

### Other Dependencies

- Multer (File Uploads)
- Cloudinary (Image Hosting)
- Day.js (Date Formatting)
- Nanoid (Unique ID Generation)
- Cookie Parser

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine.

### 2. Install Dependencies

npm run setup-project

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_CLOUD_NAME=your_cloudinary_name  
CLOUDINARY_API_KEY=your_cloudinary_api_key  
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

### 4. Start the Development Server

npm run dev

## Project Scripts

| Command                      | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| npm run setup-project        | Installs dependencies for both client and server |
| npm run setup-production-app | Installs dependencies and builds the frontend    |
| npm run server               | Starts the backend server with Nodemon           |
| npm run client               | Starts the frontend in development mode          |
| npm run dev                  | Runs both backend and frontend concurrently      |

## License

This project is licensed under the **ISC License**.
