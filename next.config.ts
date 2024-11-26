import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};

export default nextConfig;
