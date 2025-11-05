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
  output: "export",
  basePath: "/prakritiAircon",
  assetPrefix: "/prakritiAircon",
  trailingSlash: true,
};

export default nextConfig;