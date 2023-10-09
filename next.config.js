/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
