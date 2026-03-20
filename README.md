# Vaibhavi Kulkarni - Portfolio Website

A modern, editorial-style portfolio website built with React and Vite, featuring an organic matcha/honey color palette and magazine-inspired design.

## 🚀 Live Demo

[Add your deployed URL here]

## ✨ Features

- **Editorial Design**: Magazine-style layout with asymmetric grids and organic elements
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Built with semantic HTML and keyboard navigation
- **Fast**: Optimized with Vite for lightning-fast performance
- **SEO Optimized**: Meta tags and Open Graph tags for better discoverability

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **Lucide React** - Beautiful icons
- **Custom CSS** - No framework dependencies, fully custom styles

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vaibhavi-portfolio.git
   cd vaibhavi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Your Information

Edit `/src/data/portfolio-data.js` to update:

- Personal information (name, email, phone, etc.)
- Projects and their details
- Work experience
- Skills
- Interests
- Education

```javascript
export const personalInfo = {
  name: 'Your Name',
  email: 'your.email@example.com',
  // ... update all fields
};
```

### Add Your Resume

1. Place your resume PDF in the `/public` folder as `resume.pdf`
2. Or update the `resumeUrl` in `portfolio-data.js` to point to your file

### Update Project Links

In `portfolio-data.js`, update the `link` field for each project:

```javascript
{
  name: 'Your Project',
  link: 'https://your-project-url.com', // Update this
  // ...
}
```

### Change Colors

Edit `/src/App.css` and update the color variables throughout, or find and replace:

- `#9CA764` - Primary matcha green
- `#F1E8C7` - Milky honey background
- `#F9F7F4` - Base cream
- `#2D3319` - Dark text
- `#5A6635` - Medium text

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/vaibhavi-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Automatic deployments**
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

   Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

3. **Or connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - "Add new site" → "Import an existing project"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/vaibhavi-portfolio/', // your repo name
     // ...
   })
   ```

3. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎨 Design Philosophy

This portfolio embraces an **editorial/magazine aesthetic** with:

- **Warm, organic colors** instead of typical tech blues/purples
- **Fraunces serif font** for display text (personality + sophistication)
- **DM Sans** for body text (clean, modern readability)
- **Asymmetric layouts** that break traditional grids
- **Generous white space** for breathing room
- **Animated organic blobs** that add life without distraction

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## ⚡ Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💌 Contact

Vaibhavi Kulkarni - [vaiibhaviikulkarnii@gmail.com](mailto:vaiibhaviikulkarnii@gmail.com)

LinkedIn: [linkedin.com/in/vaibhavi-kulkarni-vaik](https://linkedin.com/in/vaibhavi-kulkarni-vaik)

---

**Built with ❤️ using React + Vite**
