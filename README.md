# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js and Node.js.

## Project Structure

```
personal-portfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # React source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── assets/        # Images, fonts, etc.
│       ├── styles/        # CSS/SCSS files
│       └── utils/         # Utility functions
└── server/                # Node.js backend
    ├── controllers/       # Route controllers
    ├── models/           # Database models
    ├── routes/           # API routes
    └── config/           # Configuration files
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start the React development server
   cd client
   npm start

   # Start the Node.js server
   cd ../server
   npm run dev
   ```

## Features
- Responsive design
- Modern UI/UX
- Contact form
- Project showcase
- Blog section (optional)
- Dark/Light mode

## Technologies Used
- Frontend:
  - React.js
  - Tailwind CSS
  - React Router
  - Framer Motion (for animations)
- Backend:
  - Node.js
  - Express.js
  - MongoDB (optional)
  - Nodemailer (for contact form)

## License
MIT
