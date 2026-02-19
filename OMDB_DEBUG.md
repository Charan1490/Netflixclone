# 🔍 OMDB DEBUGGING GUIDE

## ✅ **OMDB-ONLY Configuration Complete!**

### **What I Fixed:**
1. ✅ Removed fallback data - **OMDB ONLY** now
2. ✅ Switched from axios to native `fetch` (more reliable)
3. ✅ Added extensive logging to track every step
4. ✅ Created test endpoint to verify OMDB
5. ✅ Better error messages

---

## 🚀 **STEP-BY-STEP TESTING**

### **Step 1: Restart Server**
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### **Step 2: Test OMDB API Directly**

**Open in browser:**
```
http://localhost:3000/api/test-omdb
```

**What to check:**
- ✅ **"success": true** = OMDB working!
- ✅ **"omdbResponse"** shows movie data = Perfect!
- ❌ **Error message** = See troubleshooting below

---

## 📊 **Reading the Test Results**

### **✅ SUCCESS Response:**
```json
{
  "success": true,
  "apiKeyProvided": true,
  "apiKeyLength": 8,
  "omdbResponse": {
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Poster": "https://...",
    "Response": "True"
  }
}
```
**Means:** OMDB is working perfectly! ✓

### **❌ FAILED Response:**
```json
{
  "success": true,
  "omdbResponse": {
    "Response": "False",
    "Error": "Invalid API key!"
  }
}
```
**Means:** API key is wrong or not activated

---

## 🔧 **Common OMDB Issues & Fixes**

### **Issue 1: "Invalid API key!"**

**Problem:** API key not activated or wrong

**Solution:**
1. Go to your email from OMDB
2. Click the activation link (MUST DO THIS!)
3. Wait 5 minutes after activation
4. Update `.env` with correct key
5. Restart server

**Verify your key:**
- Open browser and test manually:
```
http://www.omdbapi.com/?apikey=38621094&i=tt3896198
```
- Should show movie data, not error

---

### **Issue 2: "Request limit reached"**

**Problem:** Used 1,000 free requests today

**Solution:**
- Wait until tomorrow (resets at midnight UTC)
- Or upgrade OMDB plan
- Or use different email for new free key

---

### **Issue 3: Server shows "OMDB API Key is missing"**

**Problem:** .env file not being read

**Solution:**
```bash
# 1. Stop server (Ctrl+C)
# 2. Check .env file exists
# 3. Check OMDB_API_KEY=38621094 (no spaces!)
# 4. Restart server
npm run dev
```

---

### **Issue 4: No movies showing but no errors**

**Problem:** OMDB timeout or slow response

**Solution:**
Check server console for:
```
[OMDB] Starting to fetch 20 movies...
[OMDB] ✓ Success: Guardians of the Galaxy Vol. 2
[OMDB] ✓ Success: Avengers: Endgame
...
```

If you see ✗ instead of ✓, OMDB is rejecting requests

---

## 📋 **Server Console Log Guide**

### **What You Should See (SUCCESS):**
```
[OMDB] API Key loaded: true
[OMDB] API Key length: 8
=== /api/movies called ===
OMDB_API_KEY exists: true
OMDB_API_KEY value: 38621094
[API] Fetching movies from OMDB...
[OMDB] getPopularMovies() called
[OMDB] Starting to fetch 20 movies...
[OMDB] Fetching: tt3896198
[OMDB] Response for tt3896198: True
[OMDB] ✓ Success: Guardians of the Galaxy Vol. 2
[OMDB] Fetching: tt4154796
[OMDB] ✓ Success: Avengers: Endgame
...
[OMDB] Successfully fetched 20/20 movies
[API] ✓ Returning 20 movies
```

### **What Indicates Problem:**
```
[OMDB] ✗ Error for tt3896198: Invalid API key!
```
or
```
[OMDB] ✗ Exception for tt3896198: Network error
```

---

## 🧪 **Testing Checklist**

Run these tests in order:

### **1. Test API Key Manually**
```
http://www.omdbapi.com/?apikey=38621094&i=tt3896198
```
- Should return JSON with movie data
- If error, API key is invalid

### **2. Test via Next.js API**
```
http://localhost:3000/api/test-omdb
```
- Should return success: true
- Should show movie data

### **3. Test Full App**
```
http://localhost:3000/browse
```
- Should load 20 movies
- Check browser console for errors
- Check Network tab for /api/movies response

### **4. Check Server Logs**
Look in terminal where `npm run dev` is running:
- Should see [OMDB] logs
- Should see ✓ Success messages
- Should NOT see ✗ Error messages

---

## 🎯 **Your API Key: 38621094**

### **Verify It's Activated:**

**Method 1: Direct Test**
```
http://www.omdbapi.com/?apikey=38621094&i=tt0111161
```

**Method 2: Email Check**
- Find OMDB activation email
- Make sure you clicked the link
- Wait 5-10 minutes after clicking

**Method 3: Request New Key**
If still not working:
1. Go to: http://www.omdbapi.com/apikey.aspx
2. Enter DIFFERENT email
3. Choose FREE tier
4. Activate new key
5. Update .env with new key

---

## 💡 **Quick Fixes**

### **Fix 1: Clean Restart**
```bash
# 1. Stop server
Ctrl+C

# 2. Clear Next.js cache
Remove-Item -Recurse -Force .next

# 3. Restart
npm run dev

# 4. Hard refresh browser
Ctrl+Shift+R
```

### **Fix 2: Verify .env Format**
Your `.env` should look EXACTLY like:
```
MONGODB_URI=mongodb+srv://USERCharan:Charan1490@myatlasclusteredu.pczh6t0.mongodb.net/netflixclone
JWT_SECRET=8f4d9e7c2b1a6f8d3e5c7b9a2f4d6e8c1a3b5d7e9f2c4e6a8b1d3f5c7e9a2b4d
NEXT_PUBLIC_API_URL=http://localhost:3000
OMDB_API_KEY=38621094
```
**NO** spaces around `=`
**NO** quotes around values

### **Fix 3: Test Simple Request**
```bash
# In PowerShell:
Invoke-WebRequest -Uri "http://www.omdbapi.com/?apikey=38621094&i=tt3896198" | Select-Object -Expand Content
```

Should return movie JSON. If error, API key problem.

---

## 📊 **Expected Results**

### **Browser Console (F12):**
```
Fetching movies...
Movies response: {success: true, movies: Array(20), source: 'omdb'}
Loaded 20 movies from omdb
```

### **Server Console:**
```
[OMDB] Successfully fetched 20/20 movies
[API] ✓ Returning 20 movies
```

### **Browse Page:**
- Featured movie banner with real poster
- 20 movies in scrollable rows
- IMDB ratings visible
- Real movie data (year, runtime, etc.)

---

## 🆘 **Still Not Working?**

### **Run Full Debug:**

1. **Test API Key:**
```
http://www.omdbapi.com/?apikey=38621094&i=tt3896198
```

2. **Check Test Endpoint:**
```
http://localhost:3000/api/test-omdb
```

3. **Check Server Console** for [OMDB] logs

4. **Check Browser Console** (F12) for errors

5. **Share Output** - Copy and paste:
   - Test endpoint response
   - Server console output
   - Browser console errors

---

## ✅ **When It Works**

You'll see:
- ✅ 20 movies from OMDB
- ✅ Real movie posters
- ✅ IMDB ratings
- ✅ Full movie details
- ✅ Professional look

**No fallback data - PURE OMDB!**

---

## 🎉 **Next Steps**

1. **Test Now:** http://localhost:3000/api/test-omdb
2. **Read Response:** Check if success: true
3. **Fix Issues:** Follow troubleshooting above
4. **Enjoy:** 20 real IMDB movies!

---

**Your StreamFlix will use OMDB ONLY - no fallback data!** 🎬
