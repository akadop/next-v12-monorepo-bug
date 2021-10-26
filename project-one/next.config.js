/**
 * @type {import('next').NextConfig}
 **/

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
  /**
   *
   *  previous versions of next did not need this explicitly stated in the config
   *
   * the build also breaks when you point at the tsconfig that is at this folder level
   *
   *
   */
  typescript: {
    // breaks
    tsconfigPath: './tsconfig.json'

    // valid
    // tsconfigPath: '../tsconfig.json'
  }
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
