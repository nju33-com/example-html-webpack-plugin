const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',
    target: 'web',
    entry: {
      main: path.join(__dirname, 'index.js')
    },
    output: {
      path: path.join(__dirname, 'out'),
      filename: '[name].js'
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: 'default.html'
      }),
      new HTMLWebpackPlugin({
        filename: 'nju33.html',
        title: 'nju33'
      }),
      new HTMLWebpackPlugin({
        template: path.join(__dirname, 'template.html'),
        filename: 'template.html',
        title: 'template'
      }),
      new HTMLWebpackPlugin({
        templateContent: ({ htmlWebpackPlugin }) => {
          return `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>${htmlWebpackPlugin.options.title}</title>
</head>

<body>
</body>

</html>
          `
        },
        filename: 'template-content.html',
        title: 'template-content'
      })
    ],
    devServer: {
      port: 33948
    }
  }
}
