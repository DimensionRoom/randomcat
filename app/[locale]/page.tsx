'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/innovationboard');
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
      {loading ? (
        <div>Loading...</div>
      ) : null}
    </div>
  );
}
