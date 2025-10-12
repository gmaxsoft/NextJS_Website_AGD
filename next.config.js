const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    },
};

module.exports = nextConfig