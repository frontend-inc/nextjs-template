const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supabase.frontend.co',
      },
    ],
  },
}

module.exports = nextConfig;

