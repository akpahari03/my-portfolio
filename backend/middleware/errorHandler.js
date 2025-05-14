// middleware/errorHandler.js - Enhanced with better error messaging
const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', err);
  
  // Default error status and message
  const statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  
  // Handle specific error types
  if (err.code === 'EAUTH') {
    message = 'Email authentication failed. Please check server configuration.';
  } else if (err.code === 'ESOCKET') {
    message = 'Network error while sending email. Please try again later.';
  } else if (err.code === 'EENVELOPE') {
    message = 'Invalid email address format.';
  } else if (err.code === 'ETIMEDOUT') {
    message = 'Connection timed out. Please try again later.';
  }
  
  // Log additional info in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error details:', {
      message: err.message,
      stack: err.stack,
      code: err.code
    });
  }
  
  // Send error response
  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack,
      code: err.code
    })
  });
};

module.exports = errorHandler;