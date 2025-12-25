import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
