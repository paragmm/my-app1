/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    root: "D:/NextJSApps/my-app1",
  },
  async headers() {
    return [
      {
        source: '/profile',
        headers: [
          {
            key: 'app-auth-key',
            value: 'patah12345',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
