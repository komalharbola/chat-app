Quick Chat is a full-stack, real-time messaging application built using the MERN stack (MongoDB, Express, React, and Node.js). The application enables users to communicate instantly without reloading the page by leveraging Socket.io for bidirectional communication.

--------------------------------------------------------------------------------
Key Features
• Real-Time Messaging: Send and receive text and images instantly.
• Presence Tracking: Real-time updates for users' online and offline status, indicated by a green dot.
• Notification System: Tracks and displays an unseen message count for unread notifications.
• User Search: A dedicated search bar to find users by name.
• Profile Customization: Users can update their name, bio, and profile picture, which is stored in the cloud.
• Media Gallery: A specialized sidebar that displays all images shared within a specific chat.

--------------------------------------------------------------------------------
Technology Stack
Frontend
• React & Vite: For building a fast, modern user interface.
• Tailwind CSS: For responsive and custom styling.
• Socket.io-client: To handle real-time events on the client side.
• Axios: To facilitate API calls to the backend.
• React Hot Toast: For providing real-time notification alerts.
Backend
• Node.js & Express: For the server environment and API routing.
• Socket.io: To manage bidirectional server-client links.
• MongoDB & Mongoose: For database management and data modeling.
• JWT (JSON Web Token): For secure user authentication and route protection.
• Cloudinary: To host and manage user-uploaded images.

--------------------------------------------------------------------------------
Project Structure
The project is divided into two main directories:
1. Client: Contains the React frontend, including components like the Sidebar, Chat Container, and Profile Page.
2. Server: Contains the Node.js backend, including controllers, models, routes, and middleware.

--------------------------------------------------------------------------------
Installation and Setup
To run this application locally, you must initialize both the client and server:
1. Clone the project and navigate into the chat app directory.
2. Client Setup:
    ◦ Navigate to the /client folder and run npm install.
    ◦ Configure the .env file with your VITE_BACKEND_URL.
    ◦ Start the frontend with npm run dev.
3. Server Setup:
    ◦ Navigate to the /server folder and run npm install.
    ◦ Create an .env file and provide your MONGODB_URI, JWT_SECRET, and Cloudinary API credentials.
    ◦ Start the server with npm run server.

--------------------------------------------------------------------------------
Deployment
This application is designed for production and can be deployed online for free using Vercel. Each part of the app (frontend and backend) requires a vercel.json configuration file for proper deployment.
