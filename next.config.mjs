/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "source.unsplash.com",
				port: "",
				pathname: "/random",
			},
		],
	},
};

export default nextConfig;
