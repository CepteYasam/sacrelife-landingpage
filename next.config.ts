import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Statik export için
  trailingSlash: true, // Amplify için gerekli
  images: {
    unoptimized: true, // Statik export için gerekli
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
