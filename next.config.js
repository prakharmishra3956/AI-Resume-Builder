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
  // Disable file tracing on Windows to avoid EPERM on protected user folders
  outputFileTracing: false,
  experimental: {
    // Constrain file tracing to this project root to avoid scanning user profile dirs on Windows
    outputFileTracingRoot: __dirname,
    // disable LightningCSS on Windows if it causes issues (falls back to PostCSS)
    optimizeCss: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6m0cxj8fgdmf3ibh.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig
;
