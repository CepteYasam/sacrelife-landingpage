import { NextRequest, NextResponse } from 'next/server';
import { languages, fallbackLng } from './src/app/i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Response oluştur
  const response = NextResponse.next();
  
  // Pathname'i header olarak ekle
  response.headers.set('x-pathname', pathname);
  
  // Eğer pathname zaten bir locale ile başlıyorsa, sadece header'ları ekleyip devam et
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return response;
  }

  // Locale yoksa varsayılan locale'e yönlendir
  const locale = fallbackLng;
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  
  const redirectResponse = NextResponse.redirect(redirectUrl);
  redirectResponse.headers.set('x-pathname', `/${locale}${pathname}`);
  
  return redirectResponse;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 