# Netflix Clone 🎬

A beautiful Netflix clone built with Next.js, MongoDB, and Tailwind CSS. Features user authentication, personalized content, and a stunning UI that mimics Netflix's design.

## 🚀 Features

- ✅ User Authentication (Signup/Login)
- ✅ MongoDB Integration with Mongoose
- ✅ Beautiful Netflix-like UI
- ✅ My List functionality
- ✅ Responsive design
- ✅ JWT-based authentication
- ✅ Protected routes
- ✅ Movie browsing with categories
- ✅ Smooth scrolling rows
- ✅ Ready for Vercel deployment

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- MongoDB account (MongoDB Atlas recommended)
- Git installed

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd netflix-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_srv_connection_string
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**To get your MongoDB URI:**
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a free cluster
- Click "Connect" → "Connect your application"
- Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.xxxxx.mongodb.net/netflix`)
- Replace `<password>` with your actual password

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment on Vercel

1. **Push your code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [Vercel](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Add environment variables:
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `NEXT_PUBLIC_API_URL` (use your Vercel URL)
- Click "Deploy"

Your Netflix clone will be live in minutes! 🎉

## 📱 Pages

- `/` - Landing page (redirects to login/browse)
- `/login` - User login
- `/signup` - User registration
- `/browse` - Main browsing page
- `/mylist` - User's saved content

## 🎨 Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcrypt
- **Icons**: React Icons
- **Deployment**: Vercel

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- HTTP-only cookies
- Protected API routes
- Environment variable protection

## 📝 Default Users

You'll need to create your own account through the signup page.

## 🎯 Usage

1. Visit the app
2. Sign up for a new account
3. Browse movies and TV shows
4. Add items to your list
5. Enjoy your personalized Netflix experience!

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📄 License

This project is for educational purposes only. Netflix is a trademark of Netflix, Inc.

## 🐛 Troubleshooting

**MongoDB Connection Issues:**
- Ensure your IP is whitelisted in MongoDB Atlas
- Check your connection string is correct
- Verify network connectivity

**Build Errors:**
- Run `npm install` again
- Clear `.next` folder and rebuild
- Check all environment variables are set

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ using Next.js and MongoDB
