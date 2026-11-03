# 🌟 Koorsiye Bochora - Professional Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A modern, responsive, and multilingual portfolio showcasing full-stack development expertise**

[Live Demo](https://korsiye-bochora.netlify.app) • [View CV](./ADVANCED_CV.md) • [Report Bug](https://github.com/Korsiyee/portfolio/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contact](#contact)
- [License](#license)

---

## 🎯 About

This is my professional portfolio website built with React and Vite, showcasing my journey as a Full Stack Web Developer and Software Engineering student at Haramaya University. The portfolio demonstrates my skills, projects, certifications, and provides multiple ways to get in touch.

### Key Highlights

- **5th Year** Software Engineering Student
- **6+ Completed Projects** across various technologies
- **Full Stack Developer** with MERN stack expertise
- **Multilingual Support** (English, Afan Oromo, Amharic)
- **Dark Mode** for comfortable viewing

---

## ✨ Features

### 🎨 Design & UX
- ✅ Modern, professional dark-theme design
- ✅ Fully responsive across all devices
- ✅ Smooth animations and transitions
- ✅ Interactive UI elements
- ✅ Glassmorphism navigation bar
- ✅ Dark/Light mode toggle

### 🌐 Multilingual
- ✅ English
- ✅ Afan Oromo
- ✅ Amharic
- ✅ Persistent language selection

### 📱 Sections
- ✅ **Hero** - Dynamic introduction with animated typing effect
- ✅ **About** - Education and specialization details
- ✅ **Skills** - Comprehensive technical skills showcase
- ✅ **Projects** - Featured projects with live demos
- ✅ **Certificates** - Professional certifications and achievements
- ✅ **Contact** - Functional contact form with EmailJS integration
- ✅ **Footer** - Comprehensive links and information

### 🚀 Functionality
- ✅ Working contact form (EmailJS)
- ✅ CV download functionality
- ✅ Smooth scroll navigation
- ✅ Scroll-to-top button
- ✅ Loading screen
- ✅ Social media integration
- ✅ Live project links

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool
- **React Icons 4.12.0** - Icon library
- **CSS3** - Styling with custom properties
- **JavaScript ES6+** - Programming language

### Services
- **EmailJS** - Contact form email delivery
- **Vercel/Netlify** - Hosting and deployment

### Development Tools
- **VS Code** - Code editor
- **Git** - Version control
- **GitHub** - Code repository
- **npm** - Package manager

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Korsiyee/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Done!** Your portfolio is live

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - Or connect GitHub repository for continuous deployment

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile-pic.png
│   │   ├── FDRE-MESOB-HRMS.png
│   │   ├── Nokia-Snake-Game.png
│   │   ├── Apple-Clone.png
│   │   ├── BBC-News-Classifier.png
│   │   └── Korsiye_Bochora_CV.pdf
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── LanguageSelector.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── LanguageContext.jsx
│   └── translations.js
├── .vercelignore
├── vercel.json
├── package.json
├── vite.config.js
├── index.html
├── README.md
├── DEPLOYMENT_GUIDE.md
└── ADVANCED_CV.md
```

---

## 📸 Screenshots

### Desktop View - Hero Section
![Hero Section](https://via.placeholder.com/800x400?text=Hero+Section)

### Projects Showcase
![Projects](https://via.placeholder.com/800x400?text=Projects)

### Mobile Responsive
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+View)

---

## 🎯 Key Features Implementation

### Contact Form with EmailJS

The contact form uses EmailJS for serverless email delivery:

```javascript
emailjs.sendForm(
  'service_xbh3mw8',
  'template_11oqqpl',
  form,
  'wLKHTUVmYE8O5RvQr'
)
```

### Multilingual Support

Language switching with Context API:

```javascript
const { language, setLanguage, t } = useLanguage()
```

### Smooth Animations

CSS transitions and animations for enhanced UX:

```css
transition: all 0.3s ease;
animation: fadeIn 0.6s ease;
```

---

## 📞 Contact

**Koorsiye Bochora**

- 📧 Email: bkorsiye@gmail.com
- 📱 Phone: +251 972 891 671
- 🌐 Portfolio: [korsiye-bochora.netlify.app](https://korsiye-bochora.netlify.app)
- 💼 LinkedIn: [korsiye-bochora](https://linkedin.com/in/korsiye-bochora-980b2b3a9)
- 🐙 GitHub: [@Korsiyee](https://github.com/Korsiyee)
- 💬 Telegram: @koorsiyee

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

## 📝 License

This project is [MIT](./LICENSE) licensed.

---

## 🙏 Acknowledgments

- **Haramaya University** - For quality education
- **React Community** - For amazing tools and resources
- **EmailJS** - For contact form functionality
- **React Icons** - For beautiful icons
- **Vercel/Netlify** - For free hosting

---

<div align="center">

**Made with ❤️ by Koorsiye Bochora**

*Last Updated: October 27, 2026*

</div>
