# Best Practices Guide 🚀

## 📁 Project Structure

```
vaibhavi-portfolio/
├── public/              # Static files (resume, favicon, etc.)
├── src/
│   ├── components/      # Future: Break down App.jsx into smaller components
│   ├── data/           
│   │   └── portfolio-data.js  # ⭐ UPDATE THIS to change content
│   ├── App.jsx         # Main component
│   ├── App.css         # Styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template with SEO meta tags
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## ✅ Best Practices for Updates

### 1. **Update Content via Data File** (Easiest Way)

**Always edit `/src/data/portfolio-data.js` for content changes:**

```javascript
// ✅ GOOD: Update data file
export const personalInfo = {
  email: 'new.email@example.com',  // Easy to find and update
  github: 'https://github.com/yourname'
};

// ❌ AVOID: Editing JSX directly in App.jsx
// This makes maintenance harder
```

**Why?** 
- All content in one place
- Easier to find and update
- No risk of breaking the layout
- Can be edited by non-developers

### 2. **Git Workflow**

```bash
# Before making changes
git checkout -b feature/update-projects
git status

# After changes
git add .
git commit -m "Update: Added new project to portfolio"
git push origin feature/update-projects

# Merge to main (triggers auto-deployment on Vercel/Netlify)
git checkout main
git merge feature/update-projects
git push origin main
```

**Commit Message Format:**
- `Update: [what you changed]` - Content updates
- `Fix: [what you fixed]` - Bug fixes
- `Add: [what you added]` - New features
- `Style: [what you styled]` - CSS/design changes

### 3. **Testing Before Deployment**

```bash
# Always test locally before pushing
npm run dev        # Start dev server
# Check all pages, links, and responsiveness

npm run build      # Build for production
npm run preview    # Preview production build

# Only deploy if everything works
git push origin main
```

### 4. **Performance Optimization**

**Images:**
```bash
# Compress images before adding
# Tools: TinyPNG, Squoosh, ImageOptim

# Recommended sizes:
# - Profile photo: 400x400px
# - Project screenshots: 1200x630px
# - OG image: 1200x630px
```

**Code Splitting (Future):**
When the site grows, consider splitting components:
```javascript
// Lazy load heavy components
const Projects = React.lazy(() => import('./components/Projects'));
```

### 5. **SEO Best Practices**

**Update Meta Tags in `index.html`:**
```html
<meta name="description" content="Your updated description" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:image" content="/og-image.png" />
```

**Add robots.txt to `/public`:**
```
User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

### 6. **Accessibility**

**Always include:**
- Alt text for images
- Semantic HTML (already done)
- Keyboard navigation (test with Tab key)
- ARIA labels where needed
- Color contrast ratio > 4.5:1 (current design meets this)

### 7. **Responsive Design Testing**

**Test on these breakpoints:**
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1440px, 1920px

**Chrome DevTools:**
```
F12 → Toggle device toolbar → Test all viewports
```

### 8. **Security**

**Never commit:**
- API keys
- Passwords
- Personal sensitive data
- `.env` files (already in `.gitignore`)

**Use environment variables:**
```javascript
// .env.local (not committed)
VITE_API_KEY=your_key_here

// In code
const apiKey = import.meta.env.VITE_API_KEY;
```

### 9. **Monitoring & Analytics**

**Add Google Analytics (Optional):**

1. Get tracking ID from Google Analytics
2. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 10. **Dependency Management**

```bash
# Check for outdated packages
npm outdated

# Update packages carefully
npm update

# Update major versions one at a time
npm install react@latest react-dom@latest

# Test thoroughly after updates!
npm run dev
```

**Security updates:**
```bash
npm audit          # Check for vulnerabilities
npm audit fix      # Auto-fix when possible
```

## 🔧 Common Maintenance Tasks

### Adding a New Project

**Edit `/src/data/portfolio-data.js`:**

```javascript
export const projects = [
  // ... existing projects
  {
    name: 'New Project Name',
    year: '2025',
    category: 'Category',
    description: 'Brief description',
    tech: ['React', 'Node.js'],
    impact: [
      'Achievement 1',
      'Achievement 2'
    ],
    status: 'Live', // or 'In Development'
    link: 'https://project-url.com'
  }
];
```

### Updating Skills

```javascript
export const skills = {
  core: [..., 'New Skill'],  // Add to array
  dataEngineering: [...],
  devops: [...]
};
```

### Changing Colors

**Find and replace in `/src/App.css`:**

```css
/* Current palette */
#9CA764  →  #YourNewColor  /* Primary green */
#F1E8C7  →  #YourNewColor  /* Honey background */
#F9F7F4  →  #YourNewColor  /* Base cream */
```

**Pro tip:** Use VS Code's Find and Replace (Cmd/Ctrl + H)

## 📊 Performance Checklist

Before every deployment:

- [ ] Images compressed
- [ ] No console errors
- [ ] All links working
- [ ] Mobile responsive
- [ ] Fast load time (< 3s)
- [ ] Lighthouse score > 90
- [ ] Cross-browser tested

## 🐛 Debugging

**Common issues:**

```bash
# Port already in use
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Build fails
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Styles not updating
# Hard refresh: Cmd/Ctrl + Shift + R
```

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev) - Performance tips

## 🎯 Regular Maintenance Schedule

**Weekly:**
- Update project statuses
- Add new blog posts/articles (if applicable)

**Monthly:**
- Check for npm updates
- Review analytics
- Test on latest browsers

**Quarterly:**
- Update resume
- Add new projects/experience
- Refresh screenshots
- Review and update meta descriptions

---

**Remember:** Keep it simple, test locally, commit often, deploy confidently! 🚀
