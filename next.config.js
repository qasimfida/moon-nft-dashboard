/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	modularizeImports: {
		"@mui/icons-material": {
			transform: "@mui/icons-material/{{member}}",
		},
	},
	images: {
		domains: [
			"imgv3.fotor.com",
			"source.unsplash.com",
			"xumm.app",
			"ipfs.io"
		]
	},
	webpack: (config, { isServer }) => {
		// Add the NodePolyfillPlugin to polyfill 'self' for both server and client bundles
		if (!isServer) {
			config.plugins.push(new NodePolyfillPlugin());
		}

		return config;
	},
};

module.exports = nextConfig;
