import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const namespaces = [
  'common',
  'home',
  'about',
  'contact',
  'catalogue'
];

export default getRequestConfig(async ({ requestLocale }) => {  
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const userMessages = (
    await Promise.all(
      namespaces.map(async (namespace) => {
        try {
          const messages = (await import(`../messages/${locale}/${namespace}.json`)).default;
          
          // ИСПРАВЛЕНИЕ ЗДЕСЬ:
          // Мы просто возвращаем содержимое файла, чтобы ключи из JSON (Navbar) 
          // попали сразу в корень объекта сообщений.
          return messages; 
          
        } catch (error) {
          console.error(`❌ Error loading translation: ${namespace} for ${locale}`);
          return {};
        }
      })
    )
  ).reduce((acc, current) => ({ ...acc, ...current }), {});

  return {
    locale,
    messages: userMessages
  };
});