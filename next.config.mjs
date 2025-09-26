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

  // IMPORTANT for static export to GitHub Pages
  output: "export",
  basePath: "/prakritiAircon",
  assetPrefix: "/prakritiAircon/",
  trailingSlash: true, // makes routes like /about/ -> out/about/index.html
};

export default nextConfig;
