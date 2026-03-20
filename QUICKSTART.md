# 🚀 Quick Start Guide

Get your portfolio live in 5 minutes!

## Step 1: Install Dependencies (2 min)

```bash
cd vaibhavi-portfolio
npm install
```

## Step 2: Update Your Information (1 min)

Open `src/data/portfolio-data.js` and update:

```javascript
export const personalInfo = {
  email: 'your-email@example.com',    // ⚠️ CHANGE THIS
  phone: '+91 XXXXXXXXXX',            // ⚠️ CHANGE THIS
  linkedin: 'https://linkedin.com/in/your-profile',  // ⚠️ CHANGE THIS
  github: 'https://github.com/yourusername',         // ⚠️ CHANGE THIS
};
```

## Step 3: Add Your Resume (30 sec)

Copy your resume PDF to `public/resume.pdf`

## Step 4: Test Locally (1 min)

```bash
npm run dev
```

Open http://localhost:5173 in your browser

## Step 5: Deploy to Vercel (1 min)

### Option A: Deploy with Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option B: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Click "Deploy" (it auto-detects Vite!)
   - Done! 🎉

## ✅ Checklist

Before deploying, make sure:

- [ ] Updated personalInfo in portfolio-data.js
- [ ] Updated project links in portfolio-data.js
- [ ] Added resume.pdf to public folder
- [ ] Tested locally (`npm run dev`)
- [ ] All links work
- [ ] Mobile responsive (test with DevTools)

## 🎨 Optional Customizations

### Change Colors

Find and replace in `src/App.css`:
- `#9CA764` (matcha green) → Your color
- `#F1E8C7` (honey beige) → Your color

### Add Google Analytics

Add your tracking code to `index.html` before `</head>`

### Add Favicon

Place `favicon.ico` in the `public` folder

## 🆘 Need Help?

**Common Issues:**

1. **"npm: command not found"**
   - Install Node.js: https://nodejs.org

2. **Port 5173 already in use**
   ```bash
   # Kill the process
   lsof -ti:5173 | xargs kill -9
   ```

3. **Build fails**
   ```bash
   # Clear and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📚 Next Steps

After deployment:
- Read `BEST_PRACTICES.md` for maintenance tips
- Check out `README.md` for full documentation
- Update content regularly via `portfolio-data.js`

---

**Your portfolio will be live at: `https://your-project.vercel.app`** 🎉
