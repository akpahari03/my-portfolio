# Portfolio Website Backend

The backend server for Ayush Kumar Pahari's portfolio website, handling contact form submissions and email notifications.

## Features

- **Contact Form API**: Process form submissions from the portfolio website
- **Email Notifications**: Send email notifications to portfolio owner
- **Auto-Responder**: Send confirmation emails to users
- **Form Validation**: Validate inputs before processing
- **Rate Limiting**: Prevent abuse and spam
- **Error Handling**: Comprehensive error management

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **Nodemailer**: Email sending library
- **Cors**: Cross-Origin Resource Sharing
- **Dotenv**: Environment variable management
- **Express-rate-limit**: Rate limiting middleware

## Project Structure

```
backend/
├── controllers/
│   └── contactController.js    # Contact form handling logic
├── middleware/
│   ├── errorHandler.js         # Global error handling
│   └── rateLimiter.js          # Rate limiting configuration
├── routes/
│   └── contactRoutes.js        # API route definitions
├── .env                        # Environment variables (not in git)
├── .gitignore                  # Git ignore file
├── package.json                # Project dependencies
├── README.md                   # Project documentation (this file)
└── server.js                   # Main server file
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account for sending emails

### Installation

1. Clone the repository or navigate to the backend folder
   ```bash
   cd backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5001
   EMAIL=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   NODE_ENV=development
   ```

   **Important Note about EMAIL_PASSWORD:**
   - If you're using Gmail, you'll need to use an "App Password" instead of your regular password
   - To generate an App Password:
     1. Enable 2-Step Verification on your Google Account
     2. Go to your Google Account > Security > App passwords
     3. Select "Mail" and "Other" (Custom name), name it "Portfolio Contact Form"
     4. Copy the generated 16-character password to your .env file

4. Start the server
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Health Check
```
GET /api/health
```
Returns a status message to confirm the server is running.

### Contact Form Submission
```
POST /api/contact
```
Accepts contact form data and sends email notifications.

**Request Body:**
```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello, I'd like to discuss a project opportunity."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! You will receive a confirmation email shortly."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message details..."
}
```

## Rate Limiting

The API implements rate limiting to prevent abuse:

- **Basic Rate Limiter**: 5 requests per 15-minute window per IP address
- This applies to all API endpoints, including the contact form

## Email Templates

### Main Notification Email

Sent to portfolio owner when someone submits the contact form. Contains:
- Sender's name and email
- Message content
- Reply-to header set to sender's email

### Auto-Response Email

Sent to the visitor as confirmation their message was received. Contains:
- Thank you message
- Links to social profiles
- Information about expected response time

## Error Handling

The server implements a global error handling middleware that:

1. Logs errors to the console
2. Returns appropriate status codes
3. Provides user-friendly error messages
4. Includes detailed error information in development mode

## Deployment

This server can be deployed to platforms like:

- **Render**: Free tier available, easy deployment
- **Railway**: Developer-friendly with generous free tier
- **Heroku**: Reliable but requires a paid plan
- **AWS (EC2 or Lambda)**: More advanced but highly configurable

### Deployment Checklist

1. Set environment variables on your hosting platform
2. Configure CORS to only allow requests from your frontend domain
3. Set NODE_ENV to "production"
4. If using a free tier service, be aware of sleep/idle policies

## Security Considerations

- App passwords should be treated as sensitive data
- In production, restrict CORS to only your portfolio domain
- Consider implementing additional security like CAPTCHA for production
- Regularly rotate your app password

## License

[MIT License](LICENSE)

## Contact

For issues or questions about the backend, contact:

Ayush Kumar Pahari
- Email: ak.pahari03@gmail.com
- GitHub: [@akpahari03](https://github.com/akpahari03)