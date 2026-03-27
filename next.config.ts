import type { NextConfig } from 'next';

const repoName = 'Personal-website';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  transpilePackages: ['motion'],
  webpack: (config, { dev }) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
