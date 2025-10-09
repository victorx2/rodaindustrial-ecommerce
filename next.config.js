/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'en', 'fr', 'de', 'it', 'pt'],
    defaultLocale: 'es',
    localeDetection: false,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig