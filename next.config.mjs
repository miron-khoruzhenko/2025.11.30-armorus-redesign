import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Внимание: Это позволяет сборке проходить даже при наличии ошибок ESLint.
    ignoreDuringBuilds: true,
  },
  // ...остальные настройки
};
// module.exports = nextConfig;
export default withNextIntl(nextConfig);
