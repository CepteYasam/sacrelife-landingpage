import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Docker için gerekli
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Production optimizasyonları
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
