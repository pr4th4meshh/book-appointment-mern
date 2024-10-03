# Book Appointment MERN [Skin & You]

## Project Overview

Book Appointment MERN is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project aims to provide a platform for users to book appointments with doctors. It features user authentication, appointment scheduling, and an admin panel for managing doctors and appointments.

## Key Features

- User Registration and Authentication
- Doctor Listing and Search
- Appointment Booking System
- Admin Panel for Managing Doctors and Appointments
- Responsive Design for Mobile and Desktop

## Tech Stack

- Frontend: React.js with Redux for state management
- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Styling: CSS Modules

## Project Structure

The project is divided into two main directories:

1. `client`: Contains the React frontend application
2. `server`: Contains the Node.js/Express backend application

### Client-side Structure

- `src/components`: Reusable React components
- `src/pages`: Main page components
- `src/redux`: Redux actions, reducers, and store configuration
- `src/styles`: CSS modules for styling components

### Server-side Structure

- `config`: Database configuration
- `controllers`: Request handlers for different routes
- `middlewares`: Custom middleware functions
- `models`: Mongoose schemas for database models
- `routes`: API route definitions

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/pr4th4meshh/book-appointment-mern.git
   ```

2. Install dependencies for both client and server:
   ```
   cd book-appointment-mern/client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory
   - Add necessary environment variables (e.g., MongoDB connection string, JWT secret)

4. Start the backend server:
   ```
   cd server
   npm start
   ```

5. Start the frontend development server:
   ```
   cd client
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions to this project are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your fork
5. Submit a pull request

## License

This project is open-source and available under the MIT License.

## Contact

For any questions or concerns, please open an issue on the GitHub repository.

---

Thank you for checking out the Book Appointment MERN project!