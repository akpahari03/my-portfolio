// Enhanced contactController.js with auto-responder and validation
const nodemailer = require('nodemailer');

// Create a transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Contact form handler with enhanced validation and auto-responder
exports.submitContactForm = async (req, res) => {
  try {
    console.log('Received form data:', req.body);
    const { name, email, message } = req.body;

    // Enhanced validation
    if (!name) {
      return res.status(400).json({ success: false, message: 'Please provide your name' });
    }
    
    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide your email address' });
    }
    
    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }
    
    if (!message) {
      return res.status(400).json({ success: false, message: 'Please include a message' });
    }
    
    if (message.length < 10) {
      return res.status(400).json({ success: false, message: 'Your message is too short. Please provide more details.' });
    }
    
    if (message.length > 3000) {
      return res.status(400).json({ success: false, message: 'Your message is too long. Please keep it under 3000 characters.' });
    }

    // Check environment variables
    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email configuration. Check your .env file.');
      return res.status(500).json({ 
        success: false, 
        message: 'Server configuration error. Please contact the administrator.' 
      });
    }

    const transporter = createTransporter();
    
    // Email options - Main notification email to you
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Your email where you want to receive messages
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3498db; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Message from Your Portfolio Contact Form</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="font-size: 12px; color: #777; margin-top: 30px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
            <p>This message was sent from your portfolio website contact form.</p>
          </div>
        </div>
      `,
      replyTo: email // Allow direct reply to the sender
    };

    // Send notification email to you
    const info = await transporter.sendMail(mailOptions);
    console.log('Notification email sent:', info.messageId);
    
    // Send auto-response to the visitor
    await sendAutoResponse(name, email, transporter);
    
    // Success response
    return res.status(200).json({ success: true, message: 'Message sent successfully! You will receive a confirmation email shortly.' });
  } catch (error) {
    console.error('Error details:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Auto-responder function
const sendAutoResponse = async (name, email, transporter) => {
  try {
    // Auto-response email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Thank you for contacting me | Ayush Kumar Pahari',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3498db; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
          
          <div style="margin: 20px 0; line-height: 1.6;">
            <p>Hello ${name},</p>
            <p>I appreciate you taking the time to contact me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
            <p>In the meantime, feel free to connect with me on LinkedIn or check out more of my projects on GitHub:</p>
            <div style="margin: 20px 0;">
              <a href="https://github.com/akpahari03" style="display: inline-block; background-color: #333; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px; margin-right: 10px;">GitHub</a>
              <a href="https://www.linkedin.com/in/ayush-kumar-pahari-465090224/" style="display: inline-block; background-color: #0077B5; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px;">LinkedIn</a>
            </div>
            <p>Best regards,<br>Ayush Kumar Pahari</p>
          </div>
          
          <div style="font-size: 12px; color: #777; margin-top: 30px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
            <p>This is an automated response to let you know I received your message. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    // Send auto-response
    const info = await transporter.sendMail(mailOptions);
    console.log('Auto-response email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending auto-response:', error);
    return false;
  }
};