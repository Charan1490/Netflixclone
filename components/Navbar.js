import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { FaSearch, FaBell, FaCaretDown } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-streamflix-darker backdrop-blur-lg border-b border-streamflix-primary/20' : 'bg-gradient-to-b from-black/90 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-8">
          <Link href="/browse" className="text-3xl font-bold bg-gradient-to-r from-streamflix-primary via-streamflix-secondary to-streamflix-accent bg-clip-text text-transparent">
            STREAMFLIX
          </Link>
          
          <div className="hidden md:flex gap-6">
            <Link 
              href="/browse" 
              className={`hover:text-gray-300 transition ${router.pathname === '/browse' ? 'font-bold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/browse/tv-shows" 
              className="hover:text-gray-300 transition"
            >
              TV Shows
            </Link>
            <Link 
              href="/browse/movies" 
              className="hover:text-gray-300 transition"
            >
              Movies
            </Link>
            <Link 
              href="/mylist" 
              className={`hover:text-gray-300 transition ${router.pathname === '/mylist' ? 'font-bold' : ''}`}
            >
              My List
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <FaSearch className="cursor-pointer hover:text-gray-300 transition" size={20} />
          <FaBell className="cursor-pointer hover:text-gray-300 transition" size={20} />
          
          <div className="relative">
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center font-bold">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <FaCaretDown size={12} />
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-gray-700 rounded">
                <div className="p-4 border-b border-gray-700">
                  <p className="font-bold">{user?.name}</p>
                  <p className="text-sm text-gray-400">{user?.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-3 hover:bg-gray-800 transition"
                >
                  Sign out of Netflix
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
