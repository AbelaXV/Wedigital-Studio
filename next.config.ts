/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This replaces `next export`
  images: {
    unoptimized: true, // avoids issues with static image optimization
  },
};

export default nextConfig;
