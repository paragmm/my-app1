/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    root: "D:/NextJSApps/my-app1",
  },
  env: {
    API_KEY: `${process.env.API_KEY}`,
    API_BASE_URL: `${process.env.API_BASE_URL}`,
  }

};

export default nextConfig;
