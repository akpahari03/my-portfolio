// middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');

// Basic rate limiter
const basicLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: 'Too many requests, please try again later after 15 minutes.'
  },
  skipSuccessfulRequests: false, // all requests count toward the limit
});

// Strict rate limiter for login/signup endpoints
const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many attempts, please try again after an hour.'
  },
  skipSuccessfulRequests: false,
});

module.exports = {
  basicLimiter,
  strictLimiter
};