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
  // Constrain file tracing to this project root (Next 15 moved this to top-level)
  outputFileTracingRoot: __dirname,
  // Exclude protected/junction Windows user directories that cause EPERM during tracing
  outputFileTracingExcludes: {
    "*": [
      // Broadly exclude all user profile directories on Windows to avoid EPERM
      "C:/Users/**",
      "C:\\Users\\**",
      "C:/Users/**/Application Data/**",
      "C:/Users/**/AppData/**",
      "C:/Users/**/Cookies/**",
    ],
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

module.exports = nextConfig;
