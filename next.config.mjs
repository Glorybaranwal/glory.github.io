export default {
  output: 'export',         // ✅ this enables static HTML output
  trailingSlash: true,      // ✅ ensures folder-style routing
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}