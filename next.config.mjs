/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required so pdf-parse works in API routes (Node.js runtime)
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
