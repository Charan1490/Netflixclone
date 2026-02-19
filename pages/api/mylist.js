import { authMiddleware } from '@/lib/middleware';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { movieId, title, poster } = req.body;

    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    const existingIndex = user.myList.findIndex(item => item.movieId === movieId);

    if (existingIndex > -1) {
      user.myList.splice(existingIndex, 1);
    } else {
      user.myList.unshift({ movieId, title, poster });
    }

    await user.save();

    return res.status(200).json({
      success: true,
      myList: user.myList,
    });
  } catch (error) {
    console.error('Toggle myList error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
}

export default authMiddleware(handler);
