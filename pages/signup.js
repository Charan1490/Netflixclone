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
          <Link href="/" className="text-5xl font-bold bg-gradient-to-r from-streamflix-primary via-streamflix-secondary to-streamflix-accent bg-clip-text text-transparent">
            STREAMFLIX
          </Link>
        </div>

        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
          <div className="bg-black/80 backdrop-blur-xl border border-streamflix-primary/30 p-12 md:p-16 rounded-2xl w-full max-w-md shadow-2xl">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-streamflix-primary to-streamflix-secondary bg-clip-text text-transparent">Sign Up</h1>

            {error && (
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-500/50 text-white p-4 rounded-lg mb-4 shadow-lg">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-streamflix-dark/50 backdrop-blur-sm border border-streamflix-primary/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-streamflix-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-streamflix-dark/50 backdrop-blur-sm border border-streamflix-primary/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-streamflix-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-streamflix-dark/50 backdrop-blur-sm border border-streamflix-primary/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-streamflix-primary focus:border-transparent transition-all"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-streamflix-primary to-streamflix-secondary text-white py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
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
