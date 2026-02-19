# Deployment Checklist for Vercel ✅

## Before Deployment

- [ ] Code pushed to GitHub repository
- [ ] MongoDB Atlas cluster created and running
- [ ] MongoDB connection string tested locally
- [ ] JWT_SECRET generated
- [ ] All features tested locally

## Vercel Setup Steps

### 1. Import Project
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Select the repository with your Netflix clone

### 2. Configure Project
- Framework Preset: **Next.js** (auto-detected)
- Root Directory: **./** (leave default)
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)

### 3. Environment Variables

Add these in Vercel:

```
MONGODB_URI=your_mongodb_srv_connection_string_here
JWT_SECRET=your_jwt_secret_key_here
NEXT_PUBLIC_API_URL=https://your-project-name.vercel.app
```

**Important Notes:**
- Replace `NEXT_PUBLIC_API_URL` with your actual Vercel URL after first deployment
- MongoDB URI must be the same one that works locally
- JWT_SECRET should be the same as your local .env

### 4. Deploy

Click **"Deploy"** button

### 5. After First Deployment

1. Copy your Vercel URL (e.g., `https://netflix-clone-xyz.vercel.app`)
2. Go to Project Settings → Environment Variables
3. Update `NEXT_PUBLIC_API_URL` with your Vercel URL
4. Redeploy (Go to Deployments → Click "..." → Redeploy)

### 6. MongoDB Network Access

Ensure MongoDB Atlas allows connections from anywhere:
- Go to Network Access in MongoDB Atlas
- Add IP Address: `0.0.0.0/0` (allows all IPs)
- This is necessary for Vercel's dynamic IPs

## Verification

After deployment, test:
- [ ] Visit your Vercel URL
- [ ] Signup with a new account
- [ ] Login works
- [ ] Browse page loads
- [ ] Add items to My List
- [ ] Logout works
- [ ] Login again and verify My List persists

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_API_URL` to your custom domain

## Troubleshooting

**500 Error on API Routes:**
- Check MongoDB connection string in Vercel env vars
- Verify MongoDB Atlas network access allows all IPs
- Check deployment logs in Vercel

**Authentication not working:**
- Verify JWT_SECRET is set correctly
- Check NEXT_PUBLIC_API_URL points to your Vercel domain
- Clear browser cookies and try again

**Build fails:**
- Check all dependencies are in package.json
- Verify no local file paths in imports
- Review build logs in Vercel

## Production Best Practices

- [ ] Use strong JWT_SECRET (32+ characters)
- [ ] Enable MongoDB Atlas backup
- [ ] Monitor MongoDB Atlas metrics
- [ ] Set up custom domain with SSL
- [ ] Add monitoring (Vercel Analytics)

## Need Help?

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- Next.js Docs: https://nextjs.org/docs

Your Netflix clone is ready for the world! 🎬🚀
