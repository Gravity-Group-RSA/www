/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

// GitHub Pages repo name
const repoName = 'gravity-group-rsa';

const nextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages (static export)
  output: 'export',

  // Only apply basePath + assetPrefix on GitHub Pages builds
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',

  // GitHub Pages does not support Next/Image optimization
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gravitygrouprsa.co.za',
      },
      {
        protocol: 'https',
        hostname: 'www.gravitygrouprsa.co.za',
      }
    ]
  },

  // GitHub Pages does not support Node.js server features
  experimental: {
    optimizeCss: true,
    typedRoutes: true
  },

  // Security headers (safe for static hosting)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
        ],
      }
    ];
  },

  // Redirects still work for static export if paths resolve correctly
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
