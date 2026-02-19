# 🚀 Quick Setup Guide

Follow these steps to get your Netflix Clone up and running:

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a FREE account
3. Create a new cluster (choose FREE tier)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string

It will look like:
```
mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/netflix
```

7. Replace `<password>` with your actual password
8. Replace `netflix` at the end with your preferred database name

## Step 3: Generate JWT Secret

Run this command in your terminal:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output - this is your JWT_SECRET

## Step 4: Configure Environment Variables

Open the `.env` file and add your values:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/netflix
JWT_SECRET=YOUR_GENERATED_SECRET_FROM_STEP_3
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Step 5: Whitelist Your IP in MongoDB Atlas

1. In MongoDB Atlas, go to "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Or add your specific IP address

## Step 6: Run the Development Server

```bash
npm run dev
```

## Step 7: Open Your Browser

Visit: [http://localhost:3000](http://localhost:3000)

## 🎉 You're Done!

Now you can:
- Create an account (Signup)
- Login
- Browse movies
- Add to My List
- Enjoy your Netflix clone!

## 📱 Deploy to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Netflix clone ready"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add the same environment variables from `.env`
5. Deploy! 🚀

## ⚠️ Common Issues

**Can't connect to MongoDB?**
- Check your connection string
- Verify IP is whitelisted
- Ensure password doesn't contain special characters (or encode them)

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

Need help? Check README.md for more details!
