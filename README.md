# Ayush Kumar Pahari - Portfolio Website

A modern, responsive portfolio website built with React.js and Node.js, featuring a clean design, interactive elements, and a functional contact form.

![Portfolio Preview](/frontend/src/assets/preview.png)

## Project Structure

```
root/
├── frontend/               # React frontend
│   ├── public/             # Static files
│   ├── src/                
│   │   ├── assets/         # Images and static resources
│   │   ├── components/     # React components
│   │   │   ├── About.jsx   # About section component
│   │   │   ├── Contact.jsx # Contact form component
│   │   │   ├── Hero.jsx    # Hero section component
│   │   │   └── ...         # Other components
│   │   ├── App.jsx         # Main App component
│   │   ├── global.css      # Global styles
│   │   └── index.jsx       # Entry point
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend documentation
│
├── backend/                # Node.js backend
│   ├── controllers/        # Route controllers
│   │   └── contactController.js  # Contact form handling
│   ├── middleware/         # Express middleware
│   │   ├── errorHandler.js # Error handling middleware
│   │   └── rateLimiter.js  # Rate limiting middleware
│   ├── routes/             # API routes
│   │   └── contactRoutes.js # Contact form routes
│   ├── .env                # Environment variables (not in git)
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation (this file)
```

## Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Dynamic Content**: Timeline-based about section and featured projects
- **Contact Form**: Backend-powered contact form with email notifications
- **Dark Theme**: Sleek dark theme design
- **Mobile Navigation**: Burger menu for mobile and dock navigation for desktop
- **Coding Profiles**: LeetCode and GeeksForGeeks profile showcases
- **Skills Section**: Comprehensive display of technical skills

## Tech Stack

### Frontend
- React.js
- Framer Motion for animations
- CSS Modules for styling
- React Icons
- JavaScript ES6+

### Backend
- Node.js
- Express.js
- Nodemailer for email handling
- Environment variables with dotenv
- Rate limiting for security

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Git

### Frontend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. The website should now be running at `http://localhost:5173`

### Backend Setup
1. Navigate to the backend directory
   ```bash
   cd ../backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5001
   EMAIL=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   NODE_ENV=development
   ```
   
   **Note**: For Gmail, you'll need to use an App Password. See backend README for details.

4. Start the backend server
   ```bash
   npm run dev
   ```

5. The API should now be running at `http://localhost:5001`

## Deployment

### Frontend Deployment
The frontend can be deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages

### Backend Deployment
The backend can be deployed to:
- Render
- Railway
- Heroku
- AWS (EC2, Lambda)

Remember to update the API URL in the frontend's Contact component after deploying the backend.

## Customization

### Modifying Content
- Edit the information in components like `About.jsx`, `ProjectSection.jsx`, etc.
- Update your personal links in `Contact.jsx` and `Dock.jsx`
- Add or modify projects in the `projects` array in `ProjectSection.jsx`

### Styling
- Global styles are in `global.css`
- Component-specific styles are in their respective `.module.css` files
- Theme variables are defined in `:root` in `global.css`

## Features in Detail

### Contact Form
The contact form sends emails using Nodemailer with the following features:
- Form validation (frontend and backend)
- Auto-responder to the sender
- Rate limiting for security
- Error handling

### Responsive Navigation
- Desktop: Vertical dock on the left side
- Mobile: Burger menu that opens a sliding drawer
- Active section highlighting

### Interactive Elements
- Particle effect canvas in the hero section
- Scrolling timeline in the about section
- Animated skill cards

## Credits

- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Email Service: [Nodemailer](https://nodemailer.com/)

## License

[MIT License](LICENSE)

## Contact

Ayush Kumar Pahari
- Email: ak.pahari03@gmail.com
- GitHub: [@akpahari03](https://github.com/akpahari03)
- LinkedIn: [Ayush Kumar Pahari](https://www.linkedin.com/in/ayush-kumar-pahari-465090224/)