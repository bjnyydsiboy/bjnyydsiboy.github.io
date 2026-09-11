import type { NextConfig } from "next";

const exportForPages = process.env.GITHUB_PAGES === "true";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  ...(exportForPages ? {
    output: "export",
    trailingSlash: true,
    basePath,
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
