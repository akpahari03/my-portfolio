# Portfolio Website Frontend

A modern React-based portfolio website showcasing Ayush Kumar Pahari's skills, projects, and experience.

![Portfolio Preview](/src/assets/photo.jpeg)

## Features

- **Modern UI Design**: Clean, professional interface with thoughtful animations
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Interactive Elements**: Particle effects, animated timeline, and hover states
- **Dark Theme**: Elegant dark mode design
- **Responsive Navigation**:
  - Desktop: Vertical dock navigation
  - Mobile: Burger menu with slide-out drawer
- **Key Sections**:
  - Hero with particle canvas background
  - Featured projects with links
  - Skills categorized by expertise
  - Coding profiles showcase
  - Interactive about/timeline section
  - Contact form with validation
- **Contact Form Integration**: Connected to backend for sending emails

## Tech Stack

- **React.js**: UI component library
- **Framer Motion**: Advanced animations
- **CSS Modules**: Scoped styling
- **React Icons**: Icon library
- **JavaScript ES6+**: Modern JavaScript

## Project Structure

```
frontend/
├── public/                # Static files
├── src/
│   ├── assets/            # Images and static resources
│   ├── components/
│   │   ├── About.jsx      # About section with timeline
│   │   ├── BurgerMenu.jsx # Mobile navigation menu
│   │   ├── CodingProfiles.jsx # Coding profiles section
│   │   ├── Contact.jsx    # Contact form component
│   │   ├── Dock.jsx       # Desktop navigation dock
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section with particles
│   │   ├── Navbar.jsx     # Navigation bar (optional)
│   │   ├── ProjectSection.jsx # Projects showcase
│   │   ├── ResponsiveNavigation.jsx # Combined navigation solution
│   │   └── SkillsSection.jsx # Skills showcase
│   ├── App.jsx            # Main App component
│   ├── global.css         # Global styles and variables
│   ├── index.jsx          # Entry point
│   └── ThemeContext.jsx   # Theme provider (dark/light mode)
├── package.json           # Project dependencies
└── README.md              # Frontend documentation (this file)
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository or navigate to the frontend folder
   ```bash
   cd frontend
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

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production build.

## Configuration

### API Endpoint

To configure the contact form to work with your backend:

1. Open `src/components/Contact.jsx`
2. Locate the API URL in the `handleSubmit` function:
   ```javascript
   const API_URL = 'http://localhost:5001';
   ```
3. Update it to your backend URL

### Content Customization

Edit the content in these files to personalize the portfolio:

- **Projects**: Update the `projects` array in `ProjectSection.jsx`
- **Skills**: Modify the skill lists in `SkillsSection.jsx`
- **About**: Edit timeline entries in `About.jsx`
- **Contact**: Update contact information in `Contact.jsx`
- **Social Links**: Update links in `Contact.jsx` and navigation components

### Styling

- Global styles and variables are in `global.css`
- Component-specific styles are in their respective `.module.css` files
- The theme variables are defined in `:root` in `global.css`

## Component Details

### Hero Section

The hero section features a dynamic particle canvas background with interactive mouse effects. Particles connect to form a network that responds to user movement.

### Projects Section

Displays featured projects with:
- Project image
- Title and tech stack
- Description
- Links to code and live demo

### Skills Section

Organizes skills into categories:
- Frontend Development
- Backend Development
- Other technical skills
- Areas of expertise

### Coding Profiles

Showcases coding platform profiles with:
- Platform name
- Statistics (problems solved, rating)
- Direct links

### About Section

Features:
- Personal introduction
- Professional photo
- Interactive timeline of career journey

### Contact Form

Includes:
- Contact information
- Social links
- Form with validation
- Backend integration for sending emails
- Success and error states

### Navigation

Two options are provided:
1. **Separate Components**:
   - `Dock.jsx` for desktop
   - `BurgerMenu.jsx` for mobile
   
2. **Integrated Component** (recommended):
   - `ResponsiveNavigation.jsx` that handles both layouts

## Deployment

The frontend can be deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages

## Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Credits

- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)

## License

[MIT License](LICENSE)

## Contact

Ayush Kumar Pahari
- Email: ak.pahari03@gmail.com
- GitHub: [@akpahari03](https://github.com/akpahari03)
- LinkedIn: [Ayush Kumar Pahari](https://www.linkedin.com/in/ayush-kumar-pahari-465090224/)