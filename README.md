# BijayChand - Personal Portfolio

A modern, full-stack personal portfolio built with the **MERN Stack** showcasing Cloud, DevOps & Full-Stack projects. This portfolio features a responsive design with a contact form, dynamic sections, and a sleek user interface.

## 🌟 Features

- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Dark/Light Theme**: Theme switcher for user preference
- **Contact Form**: Functional contact form with email notifications
- **Dynamic Sections**: Portfolio, skills, experience, education, and certifications
- **Fast Performance**: Built with Vite for optimized build and HMR
- **Type-Safe**: Full TypeScript implementation across client and server
- **Email Notifications**: Server-side email functionality using Nodemailer

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **React Context API** - State management (Theme)

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Nodemailer** - Email sending

## 📁 Project Structure

```
Bijay_portfolio/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   │   ├── sections/  # Page sections (About, Skills, etc.)
│   │   │   └── ui/        # Reusable UI components
│   │   ├── context/       # React Context (Theme)
│   │   ├── data/          # Static data and constants
│   │   ├── hooks/         # Custom React hooks
│   │   ├── styles/        # Global CSS
│   │   ├── types/         # TypeScript type definitions
│   │   ├── utils/         # Utility functions
│   │   ├── App.tsx        # Main App component
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   ├── tailwind.config.js # Tailwind configuration
│   ├── vite.config.ts     # Vite configuration
│   └── package.json
│
├── server/                # Backend application
│   ├── src/
│   │   ├── config/        # Configuration (Database)
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Utility functions
│   │   └── index.ts       # Server entry point
│   ├── tsconfig.json
│   └── package.json
│
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Bijay_portfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Configuration

1. **Server Configuration**
   - Create a `.env` file in the `server` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

2. **Client Configuration** (if needed)
   - Update API endpoints in `client/src/data/portfolio.ts` if necessary

## 📦 Running the Application

### Development Mode

**Terminal 1 - Start Backend Server**
```bash
cd server
npm run dev
```

**Terminal 2 - Start Frontend Development Server**
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port)

### Production Build

**Frontend Build**
```bash
cd client
npm run build
npm run preview
```

**Backend Production**
```bash
cd server
npm run build
npm start
```

## 📝 Available Scripts

### Client Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript
- `npm start` - Start production server

## 🔄 API Endpoints

### Contact API
- **POST** `/api/contact` - Submit contact form
  - **Body**: `{ name, email, message }`
  - **Response**: Success/error message

## 🎨 Components Overview

### Layout Components
- `Navbar` - Navigation bar with theme switcher
- `Footer` - Footer section with links

### Section Components
- `Hero` - Hero/landing section
- `About` - About me section
- `Skills` - Technical skills display
- `Experience` - Work experience
- `Education` - Educational background
- `Certifications` - Professional certifications
- `Projects` - Portfolio projects showcase
- `Services` - Services offered
- `Contact` - Contact form section

### UI Components
- `Button` - Reusable button component
- `Card` - Card layout component
- `Input` - Input field component
- `Textarea` - Text area component
- `SectionHeading` - Section title component
- `ScrollProgress` - Scroll progress indicator
- `BackToTop` - Back to top button

## 🌐 Environment Variables

### Server (.env)
```
MONGO_URI=mongodb connection string
PORT=5000
EMAIL_USER=your_email_address
EMAIL_PASS=your_app_password
NODE_ENV=development|production
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Bijay Chand**
- Portfolio: [Your Portfolio URL]
- GitHub: [@bijaychand24-code](https://github.com/bijaychand24-code)
- Email: your.email@example.com

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or inquiries, please reach out through the contact form on the portfolio or via email.

---

**Last Updated**: 2026-08-14
