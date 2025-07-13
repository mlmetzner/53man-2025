import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.www.nfl.com',
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
