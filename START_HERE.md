# 🎬 NETFLIX CLONE - COMPLETE GUIDE

## 🎯 What You Have

A **production-ready Netflix clone** with:

✅ Full authentication system (Signup/Login/Logout)  
✅ MongoDB database integration  
✅ Beautiful Netflix-style UI  
✅ My List functionality  
✅ Responsive design  
✅ Ready for Vercel deployment  

---

## 🚀 QUICK START (3 Steps)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Configure Environment
You have two options:

**Option A: Interactive Setup (Recommended)**
```bash
npm run setup
```
Follow the prompts to configure MongoDB and JWT secret.

**Option B: Manual Setup**
1. Get MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Generate JWT secret: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
3. Edit `.env` file with your values

### 3️⃣ Run the App
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📋 MONGODB SETUP (Detailed)

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for FREE
3. Choose "Build a Database"
4. Select **M0 FREE** tier
5. Choose your cloud provider and region
6. Click "Create"

### Step 2: Create Database User
1. Click "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Set username and password (remember these!)
5. Database User Privileges: "Read and write to any database"
6. Click "Add User"

### Step 3: Configure Network Access
1. Click "Network Access" in left sidebar
2. Click "Add IP Address"
3. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 4: Get Connection String
1. Click "Database" in left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your actual password
6. Replace `myFirstDatabase` with `netflix`

Example:
```
mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/netflix
```

---

## 🔧 CONFIGURATION

### Environment Variables (`.env`)

```env
# Your MongoDB connection string
MONGODB_URI=mongodb+srv://user:pass@cluster.xxxxx.mongodb.net/netflix

# Your JWT secret (32+ characters)
JWT_SECRET=your_generated_secret_here

# API URL (change for production)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

⚠️ **IMPORTANT**: Never commit `.env` to Git! It's already in `.gitignore`.

---

## 📱 HOW TO USE

### First Time Use
1. **Start the app**: `npm run dev`
2. **Visit**: http://localhost:3000
3. **Sign Up**: Create your account
4. **Browse**: Explore movies and TV shows
5. **Add to List**: Click the + icon on any movie
6. **My List**: View your saved content

### Features
- **Browse Page**: Main content hub with categories
- **My List**: Your personal watchlist
- **User Profile**: Click your avatar in top right
- **Categories**: Trending, Top Rated, Action, Sci-Fi, etc.

---

## 🚀 DEPLOYMENT TO VERCEL

### Prerequisites
- GitHub account
- Vercel account (free)
- MongoDB Atlas configured

### Step-by-Step Deployment

#### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Netflix clone"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### 2. Deploy on Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`

#### 3. Add Environment Variables in Vercel
Click "Environment Variables" and add:

```
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret
NEXT_PUBLIC_API_URL = https://your-app-name.vercel.app
```

⚠️ Use your ACTUAL Vercel URL for `NEXT_PUBLIC_API_URL`

#### 4. Deploy
Click "Deploy" and wait ~2 minutes

#### 5. Update API URL (Important!)
After first deployment:
1. Copy your Vercel URL
2. Go to Project Settings → Environment Variables
3. Edit `NEXT_PUBLIC_API_URL` to your Vercel URL
4. Go to Deployments → Latest → "..." → Redeploy

### MongoDB Atlas for Production
Ensure Network Access allows all IPs (0.0.0.0/0) for Vercel's dynamic IPs.

---

## 📁 PROJECT STRUCTURE

```
netflix-clone/
├── components/      # React components (MovieCard, Navbar, etc.)
├── context/         # Authentication context
├── data/           # Sample movie data
├── lib/            # Utilities (auth, database)
├── models/         # MongoDB schemas
├── pages/          # Next.js pages & API routes
│   ├── api/        # Backend API
│   │   └── auth/   # Login, signup, logout
│   ├── browse.js   # Main browsing page
│   ├── login.js    # Login page
│   ├── signup.js   # Signup page
│   └── mylist.js   # My List page
├── styles/         # CSS files
└── .env           # Environment variables (ADD YOUR VALUES!)
```

---

## 🛠️ TROUBLESHOOTING

### Issue: Can't connect to MongoDB
**Solution:**
- Verify connection string in `.env`
- Check username/password are correct
- Ensure IP is whitelisted (0.0.0.0/0)
- Password with special characters? URL encode them

### Issue: Authentication not working
**Solution:**
- Check JWT_SECRET is set in `.env`
- Clear browser cookies
- Restart dev server
- Check console for errors

### Issue: Port 3000 already in use
**Solution:**
```bash
npm run dev -- -p 3001
```

### Issue: Build fails
**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Issue: Movies not loading
**Solution:**
- Sample data is in `data/movies.js`
- Check browser console for errors
- Ensure you're logged in

---

## 🎨 CUSTOMIZATION

### Add Your Own Movies
Edit `data/movies.js`:
```javascript
{
  id: 13,
  title: "Your Movie",
  poster: "https://your-image-url.jpg",
  backdrop: "https://your-backdrop-url.jpg",
  description: "Movie description",
  category: "trending", // trending, top, action, scifi
  year: 2024,
  rating: "PG-13"
}
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  netflix: {
    red: '#E50914',  // Change these!
    black: '#141414',
    gray: '#2F2F2F',
  },
}
```

### Add TMDB Integration (Optional)
Get API key from https://www.themoviedb.org/
Add to `.env`:
```env
TMDB_API_KEY=your_api_key
```

---

## 📊 FEATURES CHECKLIST

- ✅ User Authentication (JWT)
- ✅ Password Hashing (bcrypt)
- ✅ MongoDB Database
- ✅ Protected Routes
- ✅ My List Functionality
- ✅ Responsive Design
- ✅ Netflix-like UI
- ✅ Smooth Scrolling
- ✅ Hover Effects
- ✅ User Profiles
- ✅ Logout Functionality
- ✅ Production Ready
- ✅ Vercel Deployment

---

## 📚 DOCUMENTATION FILES

- **README.md** - Project overview
- **SETUP.md** - Quick setup guide
- **DEPLOYMENT.md** - Deployment checklist
- **STRUCTURE.md** - File structure explanation
- **START_HERE.md** - This file!

---

## 🎓 LEARNING RESOURCES

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MongoDB**: https://docs.mongodb.com
- **Vercel**: https://vercel.com/docs

---

## 🤝 SUPPORT

### Need Help?
1. Check TROUBLESHOOTING section above
2. Review documentation files
3. Check browser console for errors
4. Verify environment variables

### Common Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run setup       # Interactive setup wizard
```

---

## 🎯 NEXT STEPS

After getting it running:

1. ✅ Create an account and test all features
2. ✅ Customize with your own content
3. ✅ Deploy to Vercel
4. ✅ Share with friends!
5. ✅ Add to your portfolio

---

## ⚖️ LICENSE & DISCLAIMER

This is an educational project. Netflix is a registered trademark of Netflix, Inc.
This clone is for learning purposes only.

---

## 🎉 YOU'RE READY!

Everything is set up and ready to go. Just run:

```bash
npm run setup   # If you haven't already
npm run dev     # Start the app
```

Then visit http://localhost:3000 and enjoy your Netflix clone! 🍿

---

**Made with ❤️ for learning and building awesome projects!**

Questions? Check the other documentation files or the troubleshooting section above.

Happy coding! 🚀
