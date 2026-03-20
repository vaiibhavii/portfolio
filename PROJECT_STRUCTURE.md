# Project Structure 📂

```
vaibhavi-portfolio/
│
├── 📄 package.json              # Dependencies and scripts
├── 📄 vite.config.js            # Vite configuration
├── 📄 index.html                # HTML entry point with SEO meta tags
├── 📄 .gitignore                # Git ignore rules
├── 📄 vercel.json               # Vercel deployment config
├── 📄 README.md                 # Full documentation
├── 📄 QUICKSTART.md             # 5-minute setup guide ⭐ START HERE
├── 📄 BEST_PRACTICES.md         # Maintenance & best practices
│
├── 📁 public/                   # Static assets (served as-is)
│   ├── resume.pdf               # ✅ Your resume (already added!)
│   └── README.md                # Instructions for public folder
│
└── 📁 src/                      # Source code
    ├── 📄 main.jsx              # React entry point
    ├── 📄 index.css             # Global styles + font imports
    ├── 📄 App.jsx               # Main portfolio component
    ├── 📄 App.css               # All portfolio styles (970+ lines)
    │
    ├── 📁 data/                 # Content data (UPDATE THIS!)
    │   └── 📄 portfolio-data.js # ⭐ All your content in one file
    │
    ├── 📁 components/           # Future: break down components
    │   └── (empty - for future use)
    │
    └── 📁 assets/               # Images, icons (if needed)
        └── (empty - add project screenshots here)
```

## 🎯 Key Files to Know

### Files You'll Edit Regularly:

1. **`src/data/portfolio-data.js`** ⭐ MOST IMPORTANT
   - All your content (projects, experience, skills, etc.)
   - Edit this to update your portfolio
   - No need to touch JSX!

2. **`public/resume.pdf`**
   - Your downloadable resume
   - Replace when you update your resume

### Files You Might Edit:

3. **`src/App.css`**
   - All styles
   - Change colors here
   - Adjust layouts

4. **`index.html`**
   - SEO meta tags
   - Page title
   - Favicon

### Files You Won't Touch:

5. **`src/App.jsx`** - Main component (already set up)
6. **`src/main.jsx`** - Entry point (no changes needed)
7. **`vite.config.js`** - Build config (works out of the box)
8. **`package.json`** - Dependencies (update only for new packages)

## 🔄 Workflow

### Daily Updates (Content Changes):
```
Edit portfolio-data.js → Test locally → Push to GitHub → Auto-deploys
```

### Style Changes:
```
Edit App.css → Test locally → Push to GitHub → Auto-deploys
```

### Adding Images:
```
Add to src/assets/ or public/ → Import in code → Test → Push
```

## 📝 File Sizes (for reference)

```
portfolio-data.js    ~5 KB    (your content)
App.css             ~25 KB    (all styles)
App.jsx             ~12 KB    (structure)
Total bundle        ~50 KB    (very fast!)
```

## 🎨 Design System (from App.css)

### Colors:
```css
Primary:    #9CA764  (matcha green)
Secondary:  #F1E8C7  (honey beige)
Background: #F9F7F4  (warm cream)
Text Dark:  #2D3319  (deep olive)
Text Light: #5A6635  (medium olive)
```

### Typography:
```css
Display:    'Fraunces', serif     (headings, numbers)
Body:       'DM Sans', sans-serif (paragraphs, UI)
```

### Breakpoints:
```css
Mobile:     < 768px
Tablet:     768px - 1024px
Desktop:    > 1024px
```

## 🚀 Build Output

After running `npm run build`:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js    (your React app)
│   └── index-[hash].css   (compiled styles)
└── resume.pdf             (copied from public/)
```

This `dist/` folder is what gets deployed!

## 💡 Pro Tips

1. **Keep portfolio-data.js updated** - It's your single source of truth
2. **Test locally before pushing** - Catch issues early
3. **Use meaningful commit messages** - Future you will thank you
4. **Back up regularly** - Push to GitHub often
5. **Check mobile view** - Most visitors are on mobile

---

**Next Steps:**
1. Read `QUICKSTART.md` to get started
2. Edit `src/data/portfolio-data.js` with your info
3. Run `npm run dev` to see it live
4. Deploy to Vercel when ready!
