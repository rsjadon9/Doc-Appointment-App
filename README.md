# Doctor Appointment Portal

Welcome to the Doctor Appointment Portal, a web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to schedule and manage their appointments with doctors conveniently.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
  

## Features
- **User Authentication:** Secure user authentication using JSON Web Tokens (JWT) ensures that only authorized users can access the portal.
- **Appointment Scheduling:** Users can easily schedule appointments with their preferred doctors based on availability.
- **User Dashboard:** A personalized dashboard for users to view and manage their upcoming and past appointments.
- **Admin Dashboard:** Admins have access to a dedicated dashboard to manage doctor schedules, user appointments, and system configurations.
- **Responsive UI:** The user interface is designed to be responsive, ensuring a seamless experience across devices.

## Technologies Used
- **Frontend:** React.js, Ant Design (antd), Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Redux
- **Middleware:** Concurrently, Axios, Morgan
- **Security:** JSON Web Tokens (JWT)
- **Other:** Local Storage for client-side data storage

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/doctor-appointment-portal.git
   cd doctor-appointment-portal

  2. Install dependencies for both the client and server:npm install
cd client
npm install

  3. Set up your MongoDB database and update the database connection string in the server configuration files.
  4. Run the application:
   npm run dev
5. Access the application in your browser at http://localhost:3000.

6. Project Structure
client: Contains the React.js frontend code.
server: Contains the Node.js and Express.js backend code.
models: Defines MongoDB schema models.
routes: Handles API routes for the application.
controllers: Contains logic for handling route requests.
middlewares: Custom middleware functions for authentication and authorization.


