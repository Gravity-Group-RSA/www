/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable URL-based imports for images & OG assets
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gravitygrouprsa.co.za',
      },
      {
        protocol: 'https',
        hostname: 'www.gravitygrouprsa.co.za',
      },
    ],
  },

  // Allow Next.js App Router to serve robots.txt and sitemap.xml from /public
  experimental: {
    optimizeCss: true,
    serverMinification: true,
    typedRoutes: true,
  },

  // Security headers (helps with SEO + trust + Lighthouse scores)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ];
  },

  // Redirects for canonical URLs (keeps SEO clean)
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
