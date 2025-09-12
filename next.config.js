// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     serverActions: {
//       bodySizeLimit: "4mb",
//     },
//     // disable LightningCSS on Vercel (fallback to PostCSS)
//     optimizeCss: false,
//   }
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     outputFileTracingRoot: __dirname,
//     serverActions: {
//       bodySizeLimit: "4mb",
//     },
//     // disable LightningCSS on Vercel (fallback to PostCSS)
//     optimizeCss: false,
//   },
//   webpack: (config) => {
//     config.watchOptions = {
//       ignored: [
//         "**/node_modules",
//         "C:/Users/acer/Cookies",
//         "C:/Users/acer/Application Data",
//         "C:/Users/acer/AppData",
//       ],
//     };
//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
    // disable LightningCSS on Vercel (fallback to PostCSS)
    optimizeCss: false,
  },
  // Completely disable output file tracing to prevent permission issues
  outputFileTracing: false,
  // Disable source maps
  productionBrowserSourceMaps: false,
  // Use standalone output to avoid permission issues
  output: "standalone",
};

module.exports = nextConfig;
