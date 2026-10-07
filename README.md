# Chinmay Deshmukh - Portfolio Website

A premium, AI-powered developer portfolio built with React.js, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium UI/UX Design**: Modern, futuristic interface with glassmorphism and smooth animations
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Animated Loading Experience**: Professional introduction animation
- **Interactive Hero Section**: Code editor mockup with floating technology labels
- **About Section**: Personal introduction with animated statistics
- **Experience Timeline**: Vertical timeline with achievement cards
- **Technical Skills**: Categorized skill cards with hover effects
- **Featured Projects**: Project cards with modals and technology tags
- **AI Portfolio Assistant**: Chat interface for answering questions about skills and experience
- **Contact Form**: EmailJS integration for sending messages
- **Responsive Design**: Mobile-first approach with excellent accessibility
- **Custom Cursor**: Animated cursor effect on desktop
- **Scroll Progress**: Visual scroll progress indicator
- **SEO Optimized**: Meta tags and Open Graph support

## 🛠️ Technology Stack

- **Framework**: React.js 18.3.1
- **Build Tool**: Vite 5.4.8
- **Styling**: Tailwind CSS 3.4.10
- **Animations**: Framer Motion 11.5.4
- **Icons**: Lucide React 0.445.0
- **Email Service**: EmailJS Browser 4.4.1
- **Fonts**: Space Grotesk (headings), Inter (body)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your credentials:
   ```env
   # EmailJS Configuration
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key

   # AI Assistant Configuration (Optional)
   VITE_AI_API_KEY=your_ai_api_key
   VITE_AI_API_ENDPOINT=your_ai_endpoint
   ```

## 📧 EmailJS Setup

To enable the contact form, you need to configure EmailJS:

1. **Sign up for EmailJS**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Create an Email Service**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - Copy the **Service ID**

3. **Create an Email Template**
   - Go to Email Templates → Create New Template
   - Set up your template with these variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email (set as Reply-To)
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - **Important**: In the template settings, set the Reply-To field to `{{email}}`
   - Copy the **Template ID**

4. **Get Your Public Key**
   - Go to Account → General
   - Copy your **Public Key**

5. **Update Environment Variables**
   - Add the credentials to your `.env` file:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

6. **Restart the Development Server**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

## 🤖 AI Assistant Setup (Optional)

The AI assistant currently runs in demo mode with keyword matching. To enable full AI capabilities:

1. Choose an AI API provider (e.g., OpenAI, Anthropic, etc.)
2. Get your API key and endpoint
3. Add to `.env`:
   ```env
   VITE_AI_API_KEY=your_api_key
   VITE_AI_API_ENDPOINT=your_api_endpoint
   ```
4. Update `src/components/AIAssistant.jsx` to make actual API calls

## 🎨 Customization

### Update Portfolio Data

Edit `src/data/portfolioData.js` to update:
- Personal information
- Experience details
- Skills
- Projects
- Certifications

### Update Colors

Edit `tailwind.config.js` to customize the color palette.

### Update Fonts

Edit `src/index.css` to change fonts.

## 🚀 Running the Application

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Open in browser**
   - The app will open automatically at `http://localhost:3000`
   - Or navigate manually to the URL shown in terminal

## 📦 Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 🧪 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Add your resume PDF here
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AIAssistant.jsx
│   │   ├── AppContent.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── Skills.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 📝 Adding Your Resume

1. Place your resume PDF in the `public/` directory
2. Name it `resume.pdf`
3. The download button in the navigation and hero section will automatically link to it

## 🔧 Troubleshooting

### EmailJS Not Working
- Verify all three environment variables are set correctly
- Check that your EmailJS service is active
- Ensure your template has the correct variable names
- Check browser console for error messages

### Theme Not Persisting
- Clear browser localStorage
- Check that ThemeContext is properly initialized

### Animations Not Smooth
- Check if `prefers-reduced-motion` is enabled in your OS
- Reduce animation complexity in components

## 🚢 Deployment

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

### Other Platforms
Build the project and deploy the `dist/` folder to any static hosting service.

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

- **Email**: deshmukhchinmay300@gmail.com
- **LinkedIn**: linkedin.com/in/chinmay-deshmukh
- **GitHub**: https://github.com/

---

Built with ❤️ by Chinmay Deshmukh
