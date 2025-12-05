import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath:'/kanasaki-nextjs-2.0',
    output: "export",
    distDir:'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
