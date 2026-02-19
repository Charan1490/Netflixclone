import { authMiddleware } from '@/lib/middleware';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

async function handler(req, res) {
  try {
    await dbConnect();

    const user = await User.findById(req.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        myList: user.myList,
      },
    });
  } catch (error) {
    console.error('Get user error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
}

export default authMiddleware(handler);
