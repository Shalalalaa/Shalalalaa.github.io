import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 告诉 Next.js 构建静态文件
  // basePath: '/shalalalaa.github.io',
  images: {
    unoptimized: true, // 避免静态导出时对图片优化
  },
};

module.exports = nextConfig;


// const nextConfig: NextConfig = {
//   /* config options here */
// };

export default nextConfig;
