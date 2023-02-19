/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: [
      "img.youtube.com",
      "i.ytimg.com",
      "i1.ytimg.com",
      "i2.ytimg.com",
      "i3.ytimg.com",
      "i4.ytimg.com",
    ],
    //The deviceSizes are used for layout="responsive" and layout="fill" which generates a srcSet with all the device sizes. */
    imageSizes: [16, 32, 48, 64, 96,120, 128, 256, 384], // This array is concatenated to deviceSizes.
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Next.js default
    deviceSizes: [
      96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1280, 1920, 2048, 3840,
    ],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // default
  },
};

module.exports = nextConfig;
