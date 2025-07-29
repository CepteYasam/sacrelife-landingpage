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
  // Statik export için gerekli ayarlar
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  // i18n için gerekli webpack konfigürasyonu
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
