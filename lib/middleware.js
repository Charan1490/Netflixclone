import { verifyToken } from './auth';

export const authMiddleware = (handler) => async (req, res) => {
  const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  req.userId = decoded.userId;
  return handler(req, res);
};
