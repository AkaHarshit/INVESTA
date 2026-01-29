# Investa 📈

**Investa** is a comprehensive full-stack investment and trading platform designed to help users manage their portfolios, track market positions, and execute trading operations seamlessly. The platform provides a modern, intuitive interface for both retail investors and traders to monitor their investments and make informed trading decisions.

## 🌟 Overview

Investa consists of three interconnected applications that work together to deliver a complete trading experience:

1. **Frontend Landing Page** - A marketing website where users can learn about the platform, sign up, and log in
2. **Trading Dashboard** - A feature-rich React application for portfolio management, order tracking, and market analysis
3. **Backend API** - A secure REST API built with Express.js that handles authentication, user management, and trading operations

### What Makes Investa Special?

- 🔐 **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- 📊 **Real-time Portfolio Tracking**: Monitor holdings, positions, and orders in real-time
- 📈 **Interactive Data Visualization**: Beautiful charts and graphs powered by Chart.js
- 🎨 **Modern UI/UX**: Responsive design with Material-UI components
- 🔄 **Seamless User Flow**: Smooth transition from signup to dashboard access
- 📱 **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile devices

---

## 🏗️ Project Architecture

```
Investa/
├── backend/              # Express.js REST API Server
│   ├── Controllers/      # Route controllers (AuthController)
│   ├── model/           # Mongoose models (User, Holdings, Positions, Orders)
│   ├── schemas/         # MongoDB schemas
│   ├── index.js         # Main server file
│   └── package.json     # Backend dependencies
│
├── frontend/            # React Landing Page Application
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── home/    # Homepage components (Hero, Stats, Pricing, etc.)
│   │   │   ├── login/   # Login page
│   │   │   ├── signup/  # Signup page
│   │   │   ├── about/   # About page
│   │   │   ├── products/# Products showcase
│   │   │   ├── pricing/ # Pricing information
│   │   │   ├── support/ # Support and ticket creation
│   │   │   └── profile/ # User profile management
│   │   └── index.js     # Frontend entry point
│   └── package.json     # Frontend dependencies
│
├── dashboard/           # React Trading Dashboard Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js    # Main dashboard layout
│   │   │   ├── Home.js         # Dashboard entry point
│   │   │   ├── Summary.js      # Portfolio summary
│   │   │   ├── Holdings.js     # Holdings management
│   │   │   ├── Positions.js    # Positions tracking
│   │   │   ├── Orders.js       # Order management
│   │   │   ├── WatchList.js    # Stock watchlist
│   │   │   ├── Funds.js        # Funds overview
│   │   │   └── ...             # Other components
│   │   └── index.js            # Dashboard entry point
│   └── package.json            # Dashboard dependencies
│
└── package.json        # Root package configuration
```

---

## ✨ Key Features

### 🔐 Authentication & Security
- **User Registration**: Secure signup with email validation and duplicate checking
- **User Login**: JWT token-based authentication with 7-day expiration
- **Password Security**: Bcrypt hashing with salt rounds for secure password storage
- **Protected Routes**: Middleware-based route protection for sensitive endpoints
- **Session Management**: Token-based session handling with localStorage

### 📊 Trading Dashboard Features
- **Portfolio Summary**: Overview of total portfolio value, gains/losses, and performance metrics
- **Holdings Management**: View and manage all your stock holdings with detailed information
- **Positions Tracking**: Monitor open positions and their current status
- **Order Management**: Create, view, and track buy/sell orders
- **Watchlist**: Add stocks to your watchlist for quick monitoring
- **Funds Overview**: Check available funds and account balance
- **Interactive Charts**: Visualize portfolio distribution and performance with doughnut and bar charts
- **Responsive Design**: Mobile-friendly interface with collapsible watchlist

### 🌐 Landing Page Features
- **Hero Section**: Engaging introduction to the platform
- **Product Showcase**: Detailed information about platform features
- **Pricing Information**: Transparent pricing and brokerage details
- **Educational Content**: Resources to help users learn about trading
- **Support System**: Create support tickets for assistance
- **User Profile**: Manage account settings and preferences

---

## 🛠️ Technology Stack

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database for data storage |
| **Mongoose** | MongoDB object modeling tool |
| **JWT** | JSON Web Tokens for authentication |
| **Bcrypt.js** | Password hashing library |
| **Passport.js** | Authentication middleware |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |

### Frontend (Landing Page)
| Technology | Purpose |
|-----------|---------|
| **React 18.3** | UI library for building user interfaces |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP client for API requests |
| **React Scripts** | Build tooling and configuration |

### Dashboard
| Technology | Purpose |
|-----------|---------|
| **React 18.3** | UI library for building user interfaces |
| **Material-UI (MUI)** | Component library for modern UI |
| **Chart.js** | Data visualization library |
| **React-Chartjs-2** | React wrapper for Chart.js |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP client for API requests |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes bundled with Node.js
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud)

### Recommended Tools
- **Git** - For version control
- **VS Code** or any code editor
- **Postman** or **Thunder Client** - For API testing (optional)
- **MongoDB Compass** - GUI for MongoDB (optional, but helpful)

### Verify Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check MongoDB (if installed locally)
mongod --version
```

---

## 🚀 Installation & Setup Guide

Follow these step-by-step instructions to get Investa running on your local machine.

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd Investa
```

### Step 2: Install Dependencies

You need to install dependencies for all three applications. Run these commands in order:

```bash
# Install root-level dependencies (if any)
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend (landing page) dependencies
cd ../frontend
npm install

# Install dashboard dependencies
cd ../dashboard
npm install

# Return to root directory
cd ..
```

**Note**: This process may take a few minutes depending on your internet connection.

### Step 3: Set Up MongoDB Database

You have two options for MongoDB:

#### Option A: Local MongoDB Installation

1. Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   ```bash
   # On macOS/Linux
   mongod
   
   # On Windows (as Administrator)
   net start MongoDB
   ```
3. Your connection string will be: `mongodb://localhost:27017/investa`

#### Option B: MongoDB Atlas (Cloud - Recommended for Beginners)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is sufficient)
3. Create a database user (remember username and password)
4. Whitelist your IP address (or use `0.0.0.0/0` for development)
5. Get your connection string from "Connect" → "Connect your application"
6. Replace `<password>` with your database user password

### Step 4: Configure Environment Variables

Create a `.env` file in the `backend` directory:

```bash
# Navigate to backend directory
cd backend

# Create .env file
touch .env    # On macOS/Linux
# OR
type nul > .env    # On Windows Command Prompt
```

Open the `.env` file and add the following variables:

```env
# Server Configuration
PORT=3002

# MongoDB Connection String
# For local MongoDB:
MONGO_URL=mongodb://localhost:27017/investa

# For MongoDB Atlas (replace with your actual connection string):
# MONGO_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/investa?retryWrites=true&w=majority

# JWT Secret Key (use a strong, random string in production)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
```

**Important Security Notes**:
- Never commit the `.env` file to version control
- Use a strong, random string for `JWT_SECRET` in production
- Keep your MongoDB credentials secure

### Step 5: Start the Backend Server

Open your first terminal window:

```bash
# Navigate to backend directory
cd backend

# Start the server (uses nodemon for auto-restart)
npm start
```

You should see output like:
```
🚀 Server started on port 3002
✅ MongoDB connected!
```

**Troubleshooting**:
- If you see "MongoDB error", check your `MONGO_URL` in `.env`
- If port 3002 is already in use, change `PORT` in `.env`
- Ensure MongoDB is running (if using local installation)

### Step 6: Start the Frontend (Landing Page)

Open a **new terminal window** (keep the backend running):

```bash
# Navigate to frontend directory
cd frontend

# Start the development server
npm start
```

The frontend will automatically open in your browser at `http://localhost:3000`.

**Note**: If port 3000 is busy, React will ask if you want to use another port (e.g., 3001).

### Step 7: Start the Dashboard

Open a **third terminal window** (keep both backend and frontend running):

```bash
# Navigate to dashboard directory
cd dashboard

# Start the development server
npm start
```

The dashboard will open at `http://localhost:3001` (or the next available port).

**Note**: The dashboard expects to receive authentication tokens via URL parameters when accessed from the landing page.

---

## 🎯 Usage Guide

### First Time Setup

1. **Access the Landing Page**: Open `http://localhost:3000` in your browser
2. **Create an Account**: Click "Sign Up" and fill in:
   - Full Name
   - Email Address
   - Phone Number
   - Password (minimum 6 characters recommended)
3. **Login**: After signup, you'll be redirected to the login page. Enter your credentials
4. **Access Dashboard**: After login, click "Dashboard" in the navigation bar to access the trading dashboard

### Using the Dashboard

1. **Portfolio Summary**: The default view shows your portfolio overview with charts and statistics
2. **View Holdings**: Click "Holdings" in the sidebar to see all your stock holdings
3. **Track Positions**: Navigate to "Positions" to monitor open trading positions
4. **Place Orders**: Go to "Orders" to create new buy/sell orders
5. **Watchlist**: Use the watchlist sidebar (toggle with ☰ button on mobile) to track favorite stocks
6. **Check Funds**: View available funds in the "Funds" section

### User Flow

```
Landing Page (Port 3000)
    ↓
Sign Up / Login
    ↓
Authentication (Backend validates credentials)
    ↓
JWT Token stored in localStorage
    ↓
Navigate to Dashboard (Port 3001)
    ↓
Dashboard loads with token from URL/localStorage
    ↓
Make authenticated API calls to Backend (Port 3002)
```

---

## 🚀 Deployment (Render + Vercel)

To deploy the **backend** on **Render** and the **frontend** and **dashboard** on **Vercel**, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

Summary of environment variables:

- **Backend (Render)**: `MONGO_URL` (required), `JWT_SECRET` (required in production), `PORT` (optional; Render sets it).
- **Frontend (Vercel)**: `REACT_APP_API_URL` (backend URL), `REACT_APP_DASHBOARD_URL` (dashboard URL).
- **Dashboard (Vercel)**: `REACT_APP_API_URL` (backend URL), `REACT_APP_FRONTEND_URL` (landing page URL for logout).

Copy `.env.example` to `.env` in each app for local development; do not commit `.env` files.

---

## 📡 API Documentation

### Base URL
```
http://localhost:3002
```

### Authentication Endpoints

#### Register New User
```http
POST /signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "password": "SecurePassword123"
}
```

**Success Response** (201):
```json
{
  "success": true,
  "message": "Account created successfully!"
}
```

**Error Response** (400):
```json
{
  "success": false,
  "message": "Email already registered"
}
```

#### Login User
```http
POST /login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "SecurePassword123"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890"
  }
}
```

**Error Response** (400):
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

### Protected Endpoints

All protected endpoints require a JWT token in the Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

#### Get All Holdings
```http
GET /allHoldings
Authorization: Bearer <token>
```

**Response** (200):
```json
[
  {
    "_id": "...",
    "name": "RELIANCE",
    "qty": 10,
    "price": 2500,
    ...
  }
]
```

#### Get All Positions
```http
GET /allPositions
Authorization: Bearer <token>
```

**Response** (200):
```json
[
  {
    "_id": "...",
    "name": "TCS",
    "qty": 5,
    "price": 3500,
    ...
  }
]
```

#### Create New Order
```http
POST /newOrder
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "RELIANCE",
  "qty": 10,
  "price": 2500,
  "mode": "BUY"
}
```

**Response** (200):
```
Order saved!
```

**Note**: `mode` can be either `"BUY"` or `"SELL"`.

---

## 🗂️ Database Schema

### Users Collection
```javascript
{
  name: String (required),
  email: String (required, unique, lowercase),
  phone: String (required),
  password: String (required, hashed),
  createdAt: Date (default: Date.now)
}
```

### Holdings Collection
```javascript
{
  name: String,
  qty: Number,
  price: Number,
  // Additional fields as per HoldingsSchema
}
```

### Positions Collection
```javascript
{
  name: String,
  qty: Number,
  price: Number,
  // Additional fields as per PositionsSchema
}
```

### Orders Collection
```javascript
{
  name: String,
  qty: Number,
  price: Number,
  mode: String,  // "BUY" or "SELL"
  // Additional fields as per OrdersSchema
}
```

---

## 🔒 Security Features

### Authentication Security
- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication with 7-day expiration
- **Token Validation**: Middleware validates tokens on protected routes
- **Email Uniqueness**: Prevents duplicate account creation

### API Security
- **CORS Configuration**: Cross-origin requests are properly configured
- **Protected Routes**: Sensitive endpoints require valid JWT tokens
- **Error Handling**: Secure error messages that don't expose sensitive information
- **Input Validation**: Basic validation on user inputs

### Best Practices
- Store JWT tokens securely in localStorage (consider httpOnly cookies for production)
- Use HTTPS in production
- Regularly rotate JWT secrets
- Implement rate limiting for API endpoints
- Add input sanitization and validation

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Backend Issues

**Problem**: `MongoDB connection error`
- **Solution**: 
  - Check if MongoDB is running (`mongod` command)
  - Verify `MONGO_URL` in `.env` file
  - Check MongoDB Atlas IP whitelist (if using cloud)
  - Ensure network connectivity

**Problem**: `Port 3002 already in use`
- **Solution**: 
  - Change `PORT` in `.env` to another port (e.g., 3003)
  - Or stop the process using port 3002:
    ```bash
    # Find process
    lsof -i :3002  # macOS/Linux
    netstat -ano | findstr :3002  # Windows
    # Kill process
    kill -9 <PID>  # macOS/Linux
    taskkill /PID <PID> /F  # Windows
    ```

**Problem**: `JWT_SECRET is not defined`
- **Solution**: Ensure `.env` file exists in `backend/` directory with `JWT_SECRET` defined

#### Frontend Issues

**Problem**: `Cannot connect to backend API`
- **Solution**: 
  - Verify backend is running on port 3002
  - Check CORS configuration in backend
  - Verify API URLs in frontend code match backend URL
  - Check browser console for specific error messages

**Problem**: `npm install fails`
- **Solution**: 
  - Clear npm cache: `npm cache clean --force`
  - Delete `node_modules` and `package-lock.json`
  - Run `npm install` again
  - Check Node.js version compatibility

**Problem**: `Login redirects but no token`
- **Solution**: 
  - Check browser console for errors
  - Verify backend `/login` endpoint is working
  - Check network tab for API response
  - Ensure localStorage is enabled in browser

#### Dashboard Issues

**Problem**: `Dashboard shows "Unauthorized" or blank`
- **Solution**: 
  - Ensure you're logged in on the landing page first
  - Check if token exists in localStorage
  - Verify token is passed in URL when navigating to dashboard
  - Check browser console for authentication errors

**Problem**: `Charts not displaying`
- **Solution**: 
  - Verify Chart.js dependencies are installed
  - Check browser console for JavaScript errors
  - Ensure data is being fetched from API correctly

#### General Issues

**Problem**: `Changes not reflecting`
- **Solution**: 
  - Clear browser cache
  - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
  - Restart development servers
  - Check if files are saved

**Problem**: `Module not found errors`
- **Solution**: 
  - Run `npm install` in the affected directory
  - Check if file paths are correct
  - Verify all dependencies are listed in `package.json`

---

## 🚢 Building for Production

### Build Frontend (Landing Page)

```bash
cd frontend
npm run build
```

The production build will be in `frontend/build/` directory.

### Build Dashboard

```bash
cd dashboard
npm run build
```

The production build will be in `dashboard/build/` directory.

### Production Deployment Checklist

- [ ] Set `NODE_ENV=production` in backend `.env`
- [ ] Use strong `JWT_SECRET` (generate with: `openssl rand -base64 32`)
- [ ] Configure MongoDB Atlas with proper IP whitelist
- [ ] Set up HTTPS/SSL certificates
- [ ] Configure CORS for production domain only
- [ ] Set up environment variables on hosting platform
- [ ] Build frontend and dashboard applications
- [ ] Configure reverse proxy (nginx/Apache) if needed
- [ ] Set up process manager (PM2) for Node.js backend
- [ ] Configure logging and error tracking
- [ ] Set up database backups
- [ ] Test all endpoints in production environment

---

## 📝 Development Guidelines

### Code Structure
- **Backend**: Follow RESTful API conventions
- **Frontend**: Component-based architecture with reusable components
- **Dashboard**: Modular components with context API for state management

### Naming Conventions
- **Components**: PascalCase (e.g., `Dashboard.js`)
- **Files**: camelCase for utilities, PascalCase for components
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### Git Workflow
1. Create feature branch from `main`
2. Make changes and commit with descriptive messages
3. Push to remote repository
4. Create pull request for review

### Adding New Features

**Backend**:
1. Create schema in `schemas/` directory
2. Create model in `model/` directory
3. Add route handler in `index.js` or create controller
4. Test with Postman or similar tool

**Frontend/Dashboard**:
1. Create component in appropriate directory
2. Add route in `index.js` if needed
3. Style with CSS or Material-UI
4. Test in browser

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes** and test thoroughly
4. **Commit your changes**:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**

### Contribution Guidelines
- Write clear, descriptive commit messages
- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes before submitting
- Update documentation if needed

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Harshit Singh**

---

## 🙏 Acknowledgments

- **Material-UI** - For providing excellent React components
- **Chart.js** - For powerful data visualization capabilities
- **React Community** - For comprehensive documentation and support
- **Express.js** - For the robust web framework
- **MongoDB** - For the flexible database solution

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the API documentation
3. Check browser console and server logs for errors
4. Create a support ticket through the application's support page

---

## 🔮 Future Enhancements

Potential features for future releases:

- [ ] Real-time market data integration
- [ ] Advanced charting and technical indicators
- [ ] Paper trading mode
- [ ] Social trading features
- [ ] Mobile applications (iOS/Android)
- [ ] Email notifications
- [ ] Two-factor authentication (2FA)
- [ ] Advanced portfolio analytics
- [ ] Integration with trading APIs (Zerodha Kite, etc.)
- [ ] Dark mode theme

---

**Happy Trading! 📈**

*Last Updated: 2024*
