/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined // Add this if you're getting module resolution errors
  }
};

module.exports = nextConfig;