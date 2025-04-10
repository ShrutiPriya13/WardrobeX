import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page when accessing root
    router.push('/login');
  }, []);

  return null;
} 