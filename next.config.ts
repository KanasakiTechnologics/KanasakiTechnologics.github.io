import type { NextConfig } from "next";

interface CustomNextConfig extends NextConfig {
    allowedDevOrigins?: string[];
}

const nextConfig: CustomNextConfig = {
    allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;
