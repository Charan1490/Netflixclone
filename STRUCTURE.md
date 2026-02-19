# 📁 Project Structure

```
netflix-clone/
│
├── 📁 components/           # Reusable React components
│   ├── MovieCard.js        # Individual movie card with hover effects
│   ├── MovieRow.js         # Scrollable row of movies
│   └── Navbar.js           # Navigation bar with user menu
│
├── 📁 context/             # React Context for state management
│   └── AuthContext.js      # Authentication context & hooks
│
├── 📁 data/                # Static data
│   └── movies.js           # Sample movie data
│
├── 📁 lib/                 # Utility libraries
│   ├── auth.js            # JWT token utilities
│   ├── middleware.js      # Authentication middleware
│   └── mongodb.js         # MongoDB connection
│
├── 📁 models/              # Database models
│   └── User.js            # User schema with Mongoose
│
├── 📁 pages/               # Next.js pages (routes)
│   ├── 📁 api/            # API routes
│   │   ├── 📁 auth/       # Authentication endpoints
│   │   │   ├── login.js   # POST /api/auth/login
│   │   │   ├── logout.js  # POST /api/auth/logout
│   │   │   ├── me.js      # GET /api/auth/me
│   │   │   └── signup.js  # POST /api/auth/signup
│   │   └── mylist.js      # POST /api/mylist
│   │
│   ├── _app.js            # Custom App component
│   ├── _document.js       # Custom Document component
│   ├── browse.js          # Main browsing page (authenticated)
│   ├── index.js           # Landing page (redirects)
│   ├── login.js           # Login page
│   ├── mylist.js          # User's saved content page
│   └── signup.js          # Registration page
│
├── 📁 styles/              # Global styles
│   └── globals.css        # Tailwind + custom CSS
│
├── 📁 public/              # Static assets (auto-created)
│
├── .env                    # Environment variables (YOU NEED TO CONFIGURE)
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
├── jsconfig.json          # JavaScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies & scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vercel.json            # Vercel deployment config
│
├── README.md              # Main documentation
├── SETUP.md               # Quick setup guide
├── DEPLOYMENT.md          # Deployment instructions
└── STRUCTURE.md           # This file!
```

## 🔑 Key Files Explained

### **Components**
- **MovieCard.js**: Displays movie posters with hover effects and "Add to List" functionality
- **MovieRow.js**: Horizontal scrolling container for movie categories
- **Navbar.js**: Top navigation with logo, menu, and user dropdown

### **Context**
- **AuthContext.js**: Manages user authentication state, login/signup/logout functions

### **API Routes**
- **auth/signup.js**: Creates new user, hashes password, returns JWT
- **auth/login.js**: Validates credentials, returns JWT
- **auth/logout.js**: Clears authentication cookie
- **auth/me.js**: Returns current user info (protected)
- **mylist.js**: Toggles movies in user's list (protected)

### **Database**
- **lib/mongodb.js**: Establishes MongoDB connection
- **models/User.js**: User schema with email, password, name, myList

### **Pages**
- **index.js**: Entry point, redirects based on auth status
- **login.js**: Login form with email/password
- **signup.js**: Registration form with name/email/password
- **browse.js**: Main content page with featured movie and rows
- **mylist.js**: Displays user's saved movies

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Classes**: Netflix-specific colors (netflix-red, netflix-black)
- **Responsive Design**: Mobile-first approach

## 🔒 Authentication Flow

1. User signs up → Password hashed with bcrypt
2. JWT token generated and stored in HTTP-only cookie
3. Protected routes check token validity
4. Invalid/missing token → Redirect to login

## 🗄️ Database Schema

**User Collection:**
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  name: String,
  myList: [{
    movieId: Number,
    title: String,
    poster: String,
    addedAt: Date
  }],
  createdAt: Date
}
```

## 🚀 Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📦 Dependencies

**Frontend:**
- next: Next.js framework
- react: UI library
- tailwindcss: CSS framework
- react-icons: Icon library
- axios: HTTP client
- js-cookie: Cookie management

**Backend:**
- mongoose: MongoDB ODM
- bcryptjs: Password hashing
- jsonwebtoken: JWT generation

## 🎯 Features by File

| Feature | Files Involved |
|---------|---------------|
| User Registration | `signup.js`, `pages/api/auth/signup.js`, `User.js` |
| User Login | `login.js`, `pages/api/auth/login.js`, `AuthContext.js` |
| Browse Movies | `browse.js`, `MovieRow.js`, `MovieCard.js`, `movies.js` |
| My List | `mylist.js`, `pages/api/mylist.js`, `MovieCard.js` |
| Protected Routes | `AuthContext.js`, `middleware.js` |
| Navigation | `Navbar.js`, `AuthContext.js` |

## 🔄 Data Flow

1. **Authentication:**
   - User submits form → API route → MongoDB → JWT → Cookie → Context

2. **Protected Pages:**
   - Page loads → Check cookie → Validate JWT → Fetch user → Render

3. **My List:**
   - Click add → API call → Update MongoDB → Update context → Re-render

---

Need to modify something? Now you know exactly where to look! 🎯
