const withImages = require('next-images')
const sitemap = require('nextjs-sitemap-generator')

sitemap({  
  baseUrl: 'https://joshtjs-portfolio.vercel.app/',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
})

module.exports = withImages({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    })
    // Important: return the modified config
    return config
  },
})