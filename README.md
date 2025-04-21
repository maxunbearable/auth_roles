# Auth Roles API

This is an educational Node.js project demonstrating role-based authentication and authorization using Express, MongoDB, and JWT.

---

## 🚀 Features

- ✅ User registration with input validation
- ✅ Password hashing with bcrypt
- ✅ JWT-based authentication
- ✅ Role-based access control (`USER`, `ADMIN`)
- ✅ Protected routes with middleware
- ✅ MongoDB models for Users and Roles

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT (`jsonwebtoken`)**
- **bcryptjs**
- **express-validator**

---

## 📂 Project Structure

```
├── index.js              # Entry point
├── config.js             # Secret key config
├── authRouter.js         # Routes for auth
├── authController.js     # Logic for auth endpoints
├── models/
│   ├── User.js           # Mongoose User schema
│   └── Role.js           # Mongoose Role schema
├── middlewares/
│   ├── authMiddleware.js # Verifies JWT token
│   └── roleMiddleware.js # Checks user roles
└── package.json
```

---

## ⚙️ Setup & Run

1. Clone the repo:
```bash
git clone https://github.com/your-username/auth_roles.git
cd auth_roles
```

2. Install dependencies:
```bash
npm install
```

3. Run the server:
```bash
npm start
```

> ⚠️ Make sure to replace the MongoDB URI in `index.js` with your own connection string.

---

## 📬 API Endpoints

| Method | Endpoint            | Access      | Description             |
|--------|---------------------|-------------|-------------------------|
| POST   | `/auth/registration`| Public      | Register new user       |
| POST   | `/auth/login`       | Public      | Login and get JWT token |
| GET    | `/auth/users`       | Admin only  | Get all users           |

