const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Contact form submission route
router.post('/contact', contactController.submitContactForm);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = router;