"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fallbackLng } from './i18n/settings';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Varsayılan locale'e yönlendir
    router.push(`/${fallbackLng}`);
  }, [router]);

  return null; // Yönlendirme sırasında boş sayfa göster
}
