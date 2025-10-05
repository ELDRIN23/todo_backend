🔒 eldrinTodo Backend

The backend of the eldrinTodo application is built using Node.js and Express.js, with MongoDB as the database.
This API is designed with a security-first approach, featuring JWT authentication, bcrypt password hashing, and structured RESTful endpoints to manage todos and users efficiently.

⚡ Overview

This backend powers the eldrinTodo frontend by handling authentication, user management, and todo operations.
Every endpoint follows clean and secure coding practices to ensure data protection and reliability.

🛠️ Tech Stack
Layer	Technology
Runtime	Node.js
Framework	Express.js
Database	MongoDB + Mongoose
Authentication	JWT (JSON Web Tokens)
Password Hashing	bcrypt
Environment Management	dotenv
Security	Helmet, CORS, and input validation
🔐 Security Practices

✅ JWT Authentication – Secure access to protected routes.
✅ bcrypt Hashing – User passwords are safely encrypted before storage.
✅ Environment Variables – Sensitive data (keys, DB URIs, secrets) stored in .env.
✅ CORS Policy – Configured to allow safe communication with the frontend.
✅ Helmet Middleware – Adds security headers for HTTP protection.
✅ Input Validation – Prevents malicious data via schema validation (e.g., Joi or Express Validator).

📦 Features

👤 User Authentication (Register / Login / Logout)

🔐 JWT-Based Authorization

📝 CRUD APIs for Todos (Add, Update, Delete, Toggle Status)

💾 MongoDB Integration with Mongoose

🚀 Optimized for Performance and Security

⚙️ Installation & Setup
# 1️⃣ Clone the repository
git clone https://github.com/<your-username>/eldrinTodo-backend.git

# 2️⃣ Navigate to the project folder
cd eldrinTodo-backend

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create an environment file
touch .env

Example .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

# 5️⃣ Start the server
npm run dev || npm start (nodemon)

📁 Folder Structure
eldrinTodo-backend/
│
├── src/
│   ├── config/          # Database & environment config
│   ├── controllers/     # Route logic
│   ├── middleware/      # Auth & validation middlewares
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express route files
│   └── server.js        # Entry point
│
├── .env                 # Environment variables
├── package.json         # Dependencies & scripts
└── README.md            # Project documentation

🧠 API Endpoints Overview
Method	Endpoint	Description	Auth Required
POST	/api/auth/register	Register a new user	❌
POST	/api/auth/login	Login and get token	❌
GET	/api/todos	Get all todos	✅
POST	/api/todos	Add new todo	✅
PUT	/api/todos/:id	Update a todo	✅
DELETE	/api/todos/:id	Delete a todo	✅
PATCH	/api/todos/:id/status	Toggle status	✅
🚀 Upcoming Features

🤖 AI Chat Bot API Integration

📅 Task scheduling & reminders

🧩 Role-based access control

📊 Rate limiting for enhanced security

💻 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repository and submit a pull request.

📜 License

This project is licensed under the MIT License – see the LICENSE
 file for details.

👨‍💻 Author

Eldrin Johnson
🚀 Backend Developer | Node.js & Security Enthusiast
📫 https://www.linkedin.com/in/eldrin-johnson
