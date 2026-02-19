import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/browse');
      } else {
        router.push('/login');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-streamflix-darker via-streamflix-dark to-streamflix-darker flex items-center justify-center">
      <div className="text-6xl font-bold bg-gradient-to-r from-streamflix-primary via-streamflix-secondary to-streamflix-accent bg-clip-text text-transparent animate-pulse">
        STREAMFLIX
      </div>
    </div>
  );
}
