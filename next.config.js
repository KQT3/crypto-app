/*** @type {import('next').NextConfig}*/
module.exports = {
  images: {unoptimized: true},
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts', 'assets', 'styles'],
  },
  webpack(config, {dev, isServer}) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
