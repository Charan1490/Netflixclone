import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const { data } = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        Cookies.remove('token');
      }
    }
    setLoading(false);
  };

  const signup = async (name, email, password) => {
    try {
      const { data } = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      
      if (data.success) {
        Cookies.set('token', data.token, { expires: 7 });
        setUser(data.user);
        router.push('/browse');
        return { success: true };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Signup failed' 
      };
    }
  };

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/api/auth/login', {
        email,
        password,
      });
      
      if (data.success) {
        Cookies.set('token', data.token, { expires: 7 });
        setUser(data.user);
        router.push('/browse');
        return { success: true };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout');
      Cookies.remove('token');
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMyList = async (movieId, title, poster) => {
    try {
      const token = Cookies.get('token');
      const { data } = await axios.post('/api/mylist', 
        { movieId, title, poster },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (data.success) {
        setUser(prev => ({ ...prev, myList: data.myList }));
      }
    } catch (error) {
      console.error('Toggle myList error:', error);
    }
  };

  const isInMyList = (movieId) => {
    return user?.myList?.some(item => item.movieId === movieId) || false;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      signup, 
      login, 
      logout,
      toggleMyList,
      isInMyList,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
