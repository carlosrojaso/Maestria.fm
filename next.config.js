const path = require('path');
const glob = require('glob');

module.exports = {
  exportPathMap: () => {
    const pathMap = {}
    glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
      const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
      pathMap[path] = { page: path }
    })
    return pathMap
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|styl)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.styl$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'stylus-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  }
}
