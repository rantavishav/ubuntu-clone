/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "img.shields.io",
        port: "",
        pathname: "/badge/**",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/badge/**",
      },
    ],
  },
};

module.exports = nextConfig;
