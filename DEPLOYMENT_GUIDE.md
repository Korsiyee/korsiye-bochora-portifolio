# 🚀 Portfolio Deployment Guide - Vercel

## Prerequisites
- GitHub account
- Vercel account (free tier is perfect)
- Git installed on your computer

---

## Step 1: Initialize Git Repository (if not already done)

```bash
cd c:\Users\lapun_technologies\OneDrive\Desktop\portifolio
git init
git add .
git commit -m "Initial commit: Complete portfolio with all features"
```

---

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` or `korsiye-portfolio`
3. Description: "Professional portfolio showcasing my full-stack development projects"
4. Keep it **Public** (for free Vercel deployment)
5. **DON'T** initialize with README (you already have files)
6. Click "Create repository"

---

## Step 3: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/Korsiyee/portfolio.git

# Push your code
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy to Vercel

### Option A: Using Vercel Website (Recommended)

1. Go to https://vercel.com/signup
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your `portfolio` repository
5. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? portfolio
# - Directory? ./
# - Override settings? N

# For production deployment
vercel --prod
```

---

## Step 5: Configure Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (usually 24-48 hours)

---

## Environment Variables (if needed in future)

If you need to add environment variables:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add variables (e.g., API keys)
4. Redeploy to apply changes

---

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every pull request = Preview deployment
- Vercel automatically builds and deploys

---

## Your Deployment URLs

After deployment, you'll get:
- **Production URL:** `https://portfolio-korsiyee.vercel.app` (or your custom domain)
- **Preview URLs:** For each PR/branch

---

## Build Optimization Checklist

Before deploying, ensure:
- [x] All images are optimized and in `public/assets/`
- [x] CV PDF is in `public/assets/Korsiye_Bochora_CV.pdf`
- [x] No console.log statements in production code
- [x] All external links work correctly
- [x] EmailJS credentials are correct
- [x] All environment variables are set (if any)
- [x] Mobile responsiveness is tested
- [x] All translations work correctly

---

## Testing Your Deployment

After deployment, test:
1. ✅ All navigation links work
2. ✅ Contact form sends emails successfully
3. ✅ CV download works
4. ✅ All project links (GitHub, Live Demo) work
5. ✅ Language switching works
6. ✅ Dark mode toggle works
7. ✅ Mobile responsiveness
8. ✅ All images load correctly

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images Not Loading
- Ensure images are in `public/assets/` folder
- Check image paths start with `/assets/` not `./assets/`

### 404 on Refresh
- Vercel.json is already configured for SPA routing
- Check `vercel.json` exists in root directory

### Contact Form Not Working
- Verify EmailJS credentials in Contact.jsx
- Check EmailJS dashboard for template settings
- Clear Bcc field in EmailJS template

---

## Performance Optimization

Your portfolio is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting
- ✅ Lazy loading components
- ✅ Optimized images
- ✅ Minimal dependencies

**Expected Performance:**
- Load time: < 2 seconds
- Lighthouse score: 90+
- Mobile-friendly: Yes

---

## Post-Deployment

1. **Update your CV:** Replace portfolio URL with your Vercel URL
2. **Share on LinkedIn:** Add portfolio link to your LinkedIn profile
3. **GitHub README:** Update README with live demo link
4. **Email Signature:** Add portfolio link to your email signature

---

## Monitoring & Analytics (Optional)

Add analytics to track visitors:

### Vercel Analytics (Free)
1. Go to your project dashboard
2. Click "Analytics" tab
3. Enable Vercel Analytics

### Google Analytics (Free)
1. Create GA4 property at https://analytics.google.com
2. Get tracking ID
3. Add to your `index.html` or use React package

---

## Maintenance

### Regular Updates
```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main

# Vercel automatically deploys
```

### Rollback if Needed
1. Go to Vercel Dashboard → Deployments
2. Find previous successful deployment
3. Click "..." → "Promote to Production"

---

## Support

If you encounter issues:
- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **Community:** https://github.com/vercel/vercel/discussions

---

## Success! 🎉

Once deployed, your portfolio will be live at:
`https://your-project-name.vercel.app`

Share it with:
- Potential employers
- On LinkedIn
- In your CV
- On Twitter/X
- In GitHub profile

---

**Remember:** Every time you push to GitHub, Vercel automatically redeploys! No manual deployment needed.

Good luck with your deployment! 🚀
