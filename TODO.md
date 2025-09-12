# Fix Vercel Build Errors

## Issues
- LightningCSS module missing for linux-x64 platform
- Sharp module missing for linux-x64 platform

## Tasks
- [ ] Update package.json to ensure proper installation of native modules
- [ ] Add vercel.json to configure build settings
- [ ] Test build locally to verify fixes
- [ ] Deploy and verify on Vercel

## Details
- LightningCSS is used by Tailwind CSS v4
- Sharp is used for image optimization in Next.js
- Errors occur during build on Vercel due to missing platform-specific binaries
