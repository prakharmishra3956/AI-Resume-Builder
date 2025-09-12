import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
    // disable LightningCSS on Vercel (fallback to PostCSS)
    optimizeCss: false,
  }
};


export default nextConfig;
