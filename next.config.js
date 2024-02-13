/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true }
}

module.exports = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
}
module.exports = nextConfig
