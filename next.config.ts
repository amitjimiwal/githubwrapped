import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "avatar.iran.liara.run",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
        port: '',
      }, {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      }
    ],
  },
};

export default nextConfig;
