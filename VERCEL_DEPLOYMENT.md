# 🚀 StreamFlix - Vercel Deployment Guide

## ✅ **Changes Pushed to GitHub!**

Your StreamFlix is now on GitHub with all the latest updates:
- ✅ Modern gradient UI (Purple/Pink/Blue)
- ✅ OMDB API integration
- ✅ 20 real movies with IMDB ratings
- ✅ Fallback data system
- ✅ Authentication working
- ✅ Glassmorphism effects
- ✅ Responsive design

**Repository:** https://github.com/Charan1490/Netflixclone

---

## 🎯 **Deploy to Vercel (5 Minutes)**

### **Step 1: Go to Vercel**
1. Visit: **https://vercel.com**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**

### **Step 2: Import Your Repository**
1. Click **"Add New..."** → **"Project"**
2. Find **"Charan1490/Netflixclone"**
3. Click **"Import"**

### **Step 3: Configure Project**
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)

Click **"Deploy"** - But wait! It will fail without environment variables.

### **Step 4: Add Environment Variables** ⚠️ **CRITICAL!**

Before or after first deploy, go to:
**Project Settings** → **Environment Variables**

Add these 4 variables:

#### **1. MONGODB_URI**
```
mongodb+srv://USERCharan:Charan1490@myatlasclusteredu.pczh6t0.mongodb.net/netflixclone
```

#### **2. JWT_SECRET**
```
8f4d9e7c2b1a6f8d3e5c7b9a2f4d6e8c1a3b5d7e9f2c4e6a8b1d3f5c7e9a2b4d
```

#### **3. OMDB_API_KEY**
```
38621094
```

#### **4. NEXT_PUBLIC_API_URL**
```
https://your-project-name.vercel.app
```
**Note:** Replace with your actual Vercel URL after first deploy

---

## 📋 **Step-by-Step with Screenshots**

### **Adding Environment Variables:**

1. **Go to your project** on Vercel
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in left sidebar
4. For each variable:
   - **Key:** Enter variable name (e.g., `MONGODB_URI`)
   - **Value:** Paste the value
   - **Environment:** Select **"Production", "Preview", "Development"** (all 3)
   - Click **"Save"**

### **Variable List:**

| Variable Name | Value | Where Used |
|--------------|-------|------------|
| `MONGODB_URI` | Your MongoDB connection string | Database |
| `JWT_SECRET` | Your 64-char secret key | Authentication |
| `OMDB_API_KEY` | `38621094` | Movie data |
| `NEXT_PUBLIC_API_URL` | Your Vercel domain | API calls |

---

## 🔧 **After Adding Variables**

### **Option 1: First Deploy**
If you haven't deployed yet:
- Just add all variables
- Click **"Deploy"**
- Wait 2-3 minutes
- Your site will be live!

### **Option 2: Redeploy**
If already deployed without variables:
- Add all 4 variables
- Go to **"Deployments"** tab
- Click **"..."** on latest deployment
- Click **"Redeploy"**
- Select **"Use existing Build Cache"** (faster)
- Click **"Redeploy"**

---

## 🌐 **Update NEXT_PUBLIC_API_URL**

After first successful deploy:

1. **Copy your Vercel URL**
   - Example: `https://netflixclone-abc123.vercel.app`

2. **Update Environment Variable**
   - Go to **Settings** → **Environment Variables**
   - Find `NEXT_PUBLIC_API_URL`
   - Click **"Edit"**
   - Change value to your Vercel URL
   - Click **"Save"**

3. **Redeploy**
   - Go to **Deployments**
   - Redeploy latest

---

## ✅ **Verify Deployment**

### **Check These Pages:**

1. **Homepage** → Should show StreamFlix logo with gradient
2. **Signup** → Create account
3. **Login** → Sign in
4. **Browse** → Should see 20 movies from OMDB
5. **My List** → Add/remove movies

### **Check Browser Console:**
- F12 → Console
- Should see: `Loaded 20 movies from omdb`
- No red errors

### **Check Network Tab:**
- F12 → Network
- Look for `/api/movies` request
- Should return 200 status
- Response should have 20 movies

---

## 🐛 **Troubleshooting**

### **Issue 1: Build Failed**
**Error:** "Module not found"

**Solution:**
- Check `package.json` has all dependencies
- Redeploy with fresh build

### **Issue 2: No Movies Loading**
**Error:** Using fallback data instead of OMDB

**Solution:**
- Check `OMDB_API_KEY` is set in Vercel
- Verify value is `38621094`
- Redeploy

### **Issue 3: Login Not Working**
**Error:** JWT errors or 401 unauthorized

**Solution:**
- Check `JWT_SECRET` is set
- Check `MONGODB_URI` is correct
- Verify MongoDB Atlas IP whitelist allows 0.0.0.0/0

### **Issue 4: MongoDB Connection Failed**
**Error:** "Failed to connect to MongoDB"

**Solution:**
1. Go to MongoDB Atlas
2. Click **"Network Access"**
3. Click **"Add IP Address"**
4. Click **"Allow Access from Anywhere"**
5. Save and wait 2 minutes
6. Redeploy on Vercel

---

## 🎨 **Custom Domain (Optional)**

### **Add Your Own Domain:**

1. Go to **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `streamflix.com`)
4. Follow DNS instructions
5. Update `NEXT_PUBLIC_API_URL` to your custom domain

---

## 📊 **Vercel Features You Get:**

✅ **Automatic HTTPS** - Secure by default  
✅ **Global CDN** - Fast worldwide  
✅ **Auto Scaling** - Handles any traffic  
✅ **Git Integration** - Auto-deploy on push  
✅ **Preview Deployments** - Test before production  
✅ **Analytics** - See your traffic  
✅ **99.99% Uptime** - Always online  

---

## 🔄 **Continuous Deployment**

Now every time you push to GitHub:
1. Vercel automatically detects the push
2. Builds your project
3. Deploys to production
4. Updates your live site

**To deploy updates:**
```bash
git add .
git commit -m "Your update message"
git push origin main
```

Vercel handles the rest! 🚀

---

## 📱 **Environment Variable Reference**

### **Production Environment:**

```bash
# Database
MONGODB_URI=mongodb+srv://USERCharan:Charan1490@myatlasclusteredu.pczh6t0.mongodb.net/netflixclone

# Authentication
JWT_SECRET=8f4d9e7c2b1a6f8d3e5c7b9a2f4d6e8c1a3b5d7e9f2c4e6a8b1d3f5c7e9a2b4d

# Movies API
OMDB_API_KEY=38621094

# Frontend API URL
NEXT_PUBLIC_API_URL=https://your-app.vercel.app
```

---

## 🎉 **You're Live!**

After successful deployment:

✅ Your StreamFlix is **LIVE** on the internet  
✅ Anyone can visit your URL  
✅ Perfect for portfolio/resume  
✅ Share with friends & recruiters  
✅ Production-ready streaming platform  

---

## 📈 **Next Steps:**

1. ✅ **Test Your Live Site** - Visit your Vercel URL
2. ✅ **Share It** - Add to resume/portfolio
3. ✅ **Custom Domain** - Buy a domain (optional)
4. ✅ **Analytics** - Enable Vercel Analytics
5. ✅ **Monitoring** - Check logs in Vercel dashboard

---

## 💡 **Pro Tips:**

### **Faster Deploys:**
- Vercel caches builds (~30 seconds)
- First deploy takes 2-3 minutes
- Subsequent deploys: 30-60 seconds

### **Preview Deployments:**
- Each PR gets a preview URL
- Test before merging to main
- Perfect for client reviews

### **Automatic Rollbacks:**
- Click **"Promote to Production"** on any deploy
- Instant rollback if something breaks
- No downtime

---

## 🔗 **Important Links:**

- **Your GitHub:** https://github.com/Charan1490/Netflixclone
- **Vercel Dashboard:** https://vercel.com/dashboard
- **MongoDB Atlas:** https://cloud.mongodb.com
- **OMDB API:** http://www.omdbapi.com

---

## ✅ **Deployment Checklist:**

- [x] Code pushed to GitHub
- [ ] Signed up on Vercel
- [ ] Imported GitHub repository
- [ ] Added all 4 environment variables
- [ ] Deployed successfully
- [ ] Tested signup/login
- [ ] Verified movies loading
- [ ] Updated NEXT_PUBLIC_API_URL
- [ ] Shared with friends! 🎉

---

**Your StreamFlix is ready for the world! 🌍🍿**

Need help? Check Vercel logs in dashboard for any errors!
