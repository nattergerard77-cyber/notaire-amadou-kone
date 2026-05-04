import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'maitre-amadou-kone.com' }],
        destination: 'https://www.maitre-amadou-kone.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
