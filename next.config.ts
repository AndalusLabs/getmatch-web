import type { NextConfig } from "next";

const aasaHeaders = [
  { key: "Content-Type", value: "application/json" },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: aasaHeaders,
      },
      {
        source: "/apple-app-site-association",
        headers: aasaHeaders,
      },
    ];
  },
};

export default nextConfig;
