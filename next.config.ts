/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- ESTO ES VITAL
  images: { unoptimized: true }
};
export default nextConfig;