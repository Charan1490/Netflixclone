# 🎬 OMDB API SETUP GUIDE

## ✨ What Changed

Your StreamFlix now uses **REAL MOVIE DATA** from the OMDB API instead of placeholder images!

---

## 🚀 **How to Get OMDB API Key** (FREE!)

### Step 1: Visit OMDB Website
Go to: **http://www.omdbapi.com/apikey.aspx**

### Step 2: Choose FREE Tier
- Select "**FREE! (1,000 daily limit)**"
- Enter your email address
- Check "I'm not a robot"
- Click "**Submit**"

### Step 3: Check Your Email
- Check your email inbox
- Look for email from OMDB API
- Click the **activation link**

### Step 4: Get Your API Key
- After clicking the link, you'll see your API key
- It looks like: `a1b2c3d4` (8 characters)

### Step 5: Add to .env File
Open your `.env` file and add:
```
OMDB_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key!

---

## 📸 **Example API Key Setup**

Your `.env` file should look like:
```env
MONGODB_URI=mongodb+srv://USERCharan:Charan1490@myatlasclusteredu.pczh6t0.mongodb.net/netflixclone
JWT_SECRET=8f4d9e7c2b1a6f8d3e5c7b9a2f4d6e8c1a3b5d7e9f2c4e6a8b1d3f5c7e9a2b4d
NEXT_PUBLIC_API_URL=http://localhost:3000
OMDB_API_KEY=a1b2c3d4
```

---

## ✅ **What You Get with OMDB API**

### **Real Movie Data:**
- ✅ Official movie posters
- ✅ IMDB ratings & votes
- ✅ Release years
- ✅ Runtime information
- ✅ Genre classifications
- ✅ Director & actor names
- ✅ Full plot descriptions
- ✅ Age ratings (PG-13, R, etc.)

### **20 Popular Movies Included:**
1. Guardians of the Galaxy Vol. 2
2. Avengers: Endgame
3. Inception
4. Interstellar
5. The Dark Knight
6. Fight Club
7. Forrest Gump
8. Pulp Fiction
9. The Shawshank Redemption
10. The Lord of the Rings
11. The Return of the King
12. World War Z
13. Django Unchained
14. Se7en
15. The Matrix
16. Terminator 2
17. Saving Private Ryan
18. One Flew Over the Cuckoo's Nest
19. City of God
20. Spirited Away

---

## 🔧 **Fixed Issues**

### **1. Overlapping Components** ✅
- Fixed z-index issues
- Hover cards now properly layer
- Navbar stays on top (z-50)
- Movie rows properly stacked

### **2. Real Images** ✅
- OMDB API integration
- Real movie posters
- IMDB ratings displayed
- Genre tags shown

### **3. Better Layout** ✅
- Fixed spacing
- Proper padding
- Responsive design
- Mobile-friendly

---

## 🎯 **How It Works**

### **API Integration Flow:**
```
User visits /browse
    ↓
Page calls /api/movies
    ↓
Server fetches from OMDB
    ↓
Returns 20 real movies
    ↓
Displays with real posters & data
```

### **Movie Categories:**
- **Action & Adventure**: Action/Adventure genres
- **Sci-Fi & Fantasy**: Sci-Fi/Fantasy genres
- **Top Rated**: Drama/Crime genres
- **Trending**: All other genres

---

## 🚀 **Testing Steps**

1. **Get OMDB API Key** (5 minutes)
   - Visit link above
   - Enter email
   - Click activation link
   - Copy API key

2. **Add to .env file**
   ```
   OMDB_API_KEY=your_key_here
   ```

3. **Restart Server**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

4. **Clear Browser Cache**
   - Press `Ctrl+Shift+R`

5. **Visit http://localhost:3000**
   - Login/Signup
   - You'll see "Loading Movies..."
   - Then 20 real movies appear!

---

## 📊 **What You'll See**

### **Featured Banner:**
- Large movie poster
- IMDB rating with star
- Year, age rating, runtime
- Full plot description
- Genre tags
- "Play Now" button
- "Add to List" button

### **Movie Cards:**
- Real movie posters
- Hover for details
- IMDB rating
- Year & age rating
- Plot summary
- Genre information
- Action buttons

---

## 💡 **Customization**

### **Add More Movies:**
Edit `lib/omdb.js`, add more IMDB IDs:
```javascript
const MOVIE_IDS = [
  'tt3896198', // Guardians of the Galaxy Vol. 2
  'tt4154796', // Avengers: Endgame
  // Add your own!
  'tt0111161', // The Shawshank Redemption
];
```

### **Find IMDB IDs:**
1. Go to imdb.com
2. Search for a movie
3. Look at URL: `imdb.com/title/tt0111161/`
4. The ID is: `tt0111161`

---

## 🐛 **Troubleshooting**

### **Problem: Movies not loading**
**Solution:**
- Check OMDB_API_KEY in .env
- Restart server
- Check console for errors
- Verify API key is activated

### **Problem: "Daily limit exceeded"**
**Solution:**
- Free tier = 1,000 requests/day
- Wait until next day
- Or upgrade OMDB plan

### **Problem: No images showing**
**Solution:**
- Check internet connection
- OMDB API might be down (rare)
- Check browser console

---

## 📈 **API Limits**

### **FREE Tier:**
- ✅ 1,000 requests per day
- ✅ Perfect for development
- ✅ More than enough for testing

### **Usage Calculation:**
- 20 movies loaded = 20 requests
- You can refresh ~50 times per day
- Resets at midnight UTC

---

## 🎉 **Benefits Over Placeholders**

### **Before (Placeholder Images):**
- ❌ Broken/fake images
- ❌ No real data
- ❌ Looked unprofessional
- ❌ No ratings/info

### **After (OMDB API):**
- ✅ Real movie posters
- ✅ IMDB ratings & data
- ✅ Professional look
- ✅ Actual information
- ✅ Better user experience

---

## 🔐 **Security Note**

⚠️ **IMPORTANT:**
- OMDB_API_KEY is in `.env`
- `.env` is in `.gitignore`
- Never commit API keys to GitHub
- Safe to deploy on Vercel (use environment variables)

---

## 🌐 **Deployment with OMDB**

### **When Deploying to Vercel:**
Add environment variable:
```
OMDB_API_KEY = your_key_here
```

In Vercel dashboard:
1. Project Settings
2. Environment Variables
3. Add `OMDB_API_KEY`
4. Add your key
5. Redeploy

---

## 🎊 **You're Done!**

Once you add your OMDB API key and restart:
- 20 real movies with posters
- IMDB ratings displayed
- Professional movie data
- No more placeholder images!

---

**Get your FREE API key now:** http://www.omdbapi.com/apikey.aspx

**Happy streaming! 🍿🎬**
