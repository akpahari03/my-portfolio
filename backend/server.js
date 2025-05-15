// Updated server.js with fixed CORS configuration
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');
const contactRoutes = require('./routes/contactRoutes');
const { basicLimiter } = require('./middleware/rateLimiter');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS Configuration - UPDATED to allow localhost:5173
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL] // Will set this in Vercel environment variables
    : ['http://localhost:5173', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Apply rate limiting to all requests
app.use(basicLimiter);

// Routes
app.use('/api', contactRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for: ${JSON.stringify(corsOptions.origin)}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});