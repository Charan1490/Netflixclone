import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/browse');
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    const result = await signup(name, email, password);
    
    if (!result.success) {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 opacity-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="px-8 py-6">
          <Link href="/" className="text-netflix-red text-5xl font-bold">
            NETFLIX
          </Link>
        </div>

        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
          <div className="bg-black/75 p-12 md:p-16 rounded-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-8">Sign Up</h1>

            {error && (
              <div className="bg-netflix-red/20 border border-netflix-red text-white p-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-netflix-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-netflix-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-netflix-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-netflix-red text-white py-3 rounded font-bold hover:bg-netflix-red/90 transition disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-8 text-gray-400">
              <p>
                Already have an account?{' '}
                <Link href="/login" className="text-white hover:underline">
                  Sign in now
                </Link>
                .
              </p>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                <span className="text-blue-500 hover:underline cursor-pointer">
                  Learn more
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
