/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "www.skinandyou.in",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }
    ],
    minimumCacheTTL: 60
  },
}

export default nextConfig
