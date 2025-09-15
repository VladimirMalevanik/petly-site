/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "petly-site"; // <-- если переименуешь репо, поменяй тут

module.exports = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
};
