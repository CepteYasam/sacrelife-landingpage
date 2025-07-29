import { NextRequest, NextResponse } from 'next/server';
import { languages, fallbackLng } from './src/app/i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Eğer pathname zaten bir locale ile başlıyorsa, devam et
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Locale yoksa varsayılan locale'e (Türkçe) yönlendir
  const locale = fallbackLng; // 'tr'
  
  // Ana sayfa için sondaki eğik çizgiyi kaldır
  const cleanPathname = pathname === '/' ? '' : pathname;
  const redirectUrl = new URL(`/${locale}${cleanPathname}`, request.url);
  
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 