📇 Add Contact Management Application

A full-stack Contact Management Web Application built using React, JavaScript, Node.js, Express, and MongoDB.
The application allows users to add, view, edit, and delete contacts with a clean and interactive UI.

🚀 Features
➕ Add new contacts (Name, Gmail, Phone)
✏️ Edit existing contacts
❌ Delete contacts
📃 View all contacts in real-time
🔄 Modal-based form for Add/Edit
🔔 Toast notifications for actions
📱 Responsive UI using Bootstrap
🌐 RESTful API integration
☁️ Deployed backend with MongoDB Atlas

🛠️ Tech Stack
Frontend
React.js
JavaScript (ES6+)
Axios
Bootstrap
React Toastify
Backend
Node.js
Express.js
MongoDB
Mongoose
CORS

📂 Project Structure
├── backend
│   ├── ContactModal.js
│   ├── server.js
│
├── frontend
│   ├── App.jsx
│   ├── AddContact.jsx
│   ├── Contact.jsx
│   ├── main.jsx
│
├── README.md

🔗 API Endpoints
| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| GET    | `/`      | Fetch all contacts |
| POST   | `/`      | Add new contact    |
| PUT    | `/:id`   | Update contact     |
| DELETE | `/:id`   | Delete contact     |

⚙️ How It Works
User opens the application
Frontend fetches contact data from backend using Axios
Contacts are stored in MongoDB
Add/Edit actions open a modal form
Backend handles CRUD operations using Express & Mongoose
Toast notifications display success messages

🧠 Key Concepts Used
React Hooks (useState, useEffect)
Controlled Forms
REST API integration
MongoDB Schema & Models
Axios for HTTP requests
Modal handling & UI state management

📌 Learning Outcomes
Built a complete MERN stack application
Learned CRUD operations with MongoDB
Improved React state management skills
Hands-on experience with API integration
Understood deployment and CORS handling

📄 Project Details
Project Name: Add Contact Management Application
Description:
	Developed a full-stack contact management application using React and JavaScript on the frontend and Node.js, Express, and MongoDB on the backend.
	The application allows users to add, edit, delete, and view contacts in real-time with a responsive UI and REST API integration.
Responsibilities:
	Designed REST APIs for CRUD operations
	Implemented MongoDB schema using Mongoose
	Built React components for form handling and contact listing
	Integrated Axios for frontend-backend communication
	Added toast notifications for better UX
	Managed modal visibility and application state
Tools & Technologies:
	React.js, JavaScript, Node.js, Express.js, MongoDB, Axios, Bootstrap
