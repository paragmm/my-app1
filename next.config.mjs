/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    root: "D:/NextJSApps/my-app1",
  },
  distDir: 'build',
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },

  async headers() {
    return [
      {
        source: '/profile',
        headers: [
          { key: 'app-auth-key', value: 'patah12345' }
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff'},
          { key: 'X-Frame-Options', value: 'DENY'},
          // { key: 'Content-Security-Policy', value: 'same-origin'},
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // { key: 'Permissions-Policy', value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
          { key: 'X-XSS-Protection', value: "1; mode=block" },
        ]
      }
    ];
  },
};

export default nextConfig;
