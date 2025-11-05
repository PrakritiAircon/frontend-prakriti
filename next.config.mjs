/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // Only apply these settings for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: "export",
    basePath: "/prakritiAircon",
    assetPrefix: "/prakritiAircon",
    trailingSlash: true,
  }),
};

export default nextConfig;