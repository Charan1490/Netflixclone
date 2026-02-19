#!/usr/bin/env node

/**
 * Netflix Clone - First Time Setup Helper
 * Run this after npm install to set up your environment
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
  console.log('\n🎬 Welcome to Netflix Clone Setup!\n');
  console.log('This wizard will help you configure your environment.\n');

  let mongoUri = '';
  let jwtSecret = '';
  
  // Check if .env already exists
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const overwrite = await question('.env file already exists. Overwrite? (y/n): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('\n✅ Setup cancelled. Your existing .env file is unchanged.');
      rl.close();
      return;
    }
  }

  console.log('\n📝 Step 1: MongoDB Configuration');
  console.log('─────────────────────────────────');
  console.log('You need a MongoDB Atlas connection string.');
  console.log('Get it from: https://www.mongodb.com/cloud/atlas\n');
  console.log('Example: mongodb+srv://user:pass@cluster.xxxxx.mongodb.net/netflix\n');
  
  mongoUri = await question('Enter your MongoDB URI: ');
  
  while (!mongoUri.startsWith('mongodb')) {
    console.log('❌ Invalid MongoDB URI. It should start with "mongodb://" or "mongodb+srv://"');
    mongoUri = await question('Enter your MongoDB URI: ');
  }

  console.log('\n🔐 Step 2: JWT Secret');
  console.log('─────────────────────');
  const useGenerated = await question('Generate random JWT secret? (recommended) (y/n): ');
  
  if (useGenerated.toLowerCase() === 'y') {
    jwtSecret = crypto.randomBytes(32).toString('hex');
    console.log('✅ Generated secure JWT secret!');
  } else {
    jwtSecret = await question('Enter your JWT secret (min 32 characters): ');
    while (jwtSecret.length < 32) {
      console.log('❌ JWT secret must be at least 32 characters long');
      jwtSecret = await question('Enter your JWT secret: ');
    }
  }

  // Create .env file
  const envContent = `# Netflix Clone Environment Variables
# Generated on ${new Date().toISOString()}

# MongoDB Atlas Connection String
MONGODB_URI=${mongoUri}

# JWT Secret for authentication
JWT_SECRET=${jwtSecret}

# API URL (use http://localhost:3000 for development)
NEXT_PUBLIC_API_URL=http://localhost:3000
`;

  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Setup Complete!\n');
  console.log('Your .env file has been created with the following:');
  console.log('─────────────────────────────────────────────────');
  console.log('✓ MongoDB URI configured');
  console.log('✓ JWT Secret configured');
  console.log('✓ API URL set to http://localhost:3000');
  console.log('\n📚 Next Steps:');
  console.log('─────────────');
  console.log('1. Make sure your IP is whitelisted in MongoDB Atlas');
  console.log('2. Run: npm run dev');
  console.log('3. Open: http://localhost:3000');
  console.log('4. Create an account and start browsing!\n');
  console.log('📖 For deployment instructions, see DEPLOYMENT.md\n');

  rl.close();
}

setup().catch(err => {
  console.error('❌ Setup failed:', err);
  rl.close();
  process.exit(1);
});
