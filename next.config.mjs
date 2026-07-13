/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A landing page é essencialmente estática/SSG. Mantemos o build simples.
  eslint: {
    // Não travar o build de produção por lint; rode `pnpm lint` separadamente.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
