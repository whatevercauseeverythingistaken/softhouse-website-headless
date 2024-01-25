/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		domains: [process.env.WP_IMAGES_URL],
	},
};

export default nextConfig;
