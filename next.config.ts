import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {  
    ignoreBuildErrors: true,
  },  
  images: {
		domains: [
      'frontend.co',
			'shopify.com',
      'cdn.shopify.com',
      'logo.clearbit.com',
			'asset.cloudinary.com',
			'res.cloudinary.com',
			'assets.vercel.com',
			'placehold.co',
			'images.unsplash.com',
			'via.placeholder.com',
			'pravatar.cc',
      'placehold.co'
		],
	}
};

export default nextConfig;
