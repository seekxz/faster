
## Wbepack 本身提供的优化，Base64，资源压缩，Tree Shaking，拆包 chunk

- Base64: 通过 url-loader 实现，当图片小于 8kb 时，会被转成 base64
- 资源压缩：通过 UglifyJsPlugin 进行压缩
- Tree Shaking: 依赖于 ES2015 模块语法的静态结构，允许 webpack 分析代码并确定哪些部分被使用，哪些没有。可以通过 babel-plugin-transform-imports 来完成，它重写导入以便它们与 webpack 的 tree shaking 逻辑一起工作。 
- 拆包：通过 CommonsChunkPlugin 进行拆包

```js
const path = require('path');
const webpack = require('webpack');

// Base64、资源压缩、Tree Shaking、拆包 chunk
module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader', // Base64
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(), // 资源压缩
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 拆包 chunk
    }),
  ]
};
```