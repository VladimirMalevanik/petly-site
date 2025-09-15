/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/petly" : "",
  assetPrefix: isProd ? "/petly/" : "",
  images: { unoptimized: true }, // мы используем <img>, но на всякий
};

module.exports = nextConfig;
