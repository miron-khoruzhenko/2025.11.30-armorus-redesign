import { defineRouting } from 'next-intl/routing';

// 1. Экспортируем переменные отдельно, чтобы использовать их в других файлах
export const locales = ['en', 'tr', 'ru'];
export const defaultLocale = 'en';

export const routing = defineRouting({
  locales, // используем переменную
  defaultLocale, // используем переменную
  localePrefix: 'always'
});