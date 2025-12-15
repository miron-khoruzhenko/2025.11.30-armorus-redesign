import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Матчим все пути, кроме api, статики (_next/static), картинок и favicon
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};