import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/sportsci-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
