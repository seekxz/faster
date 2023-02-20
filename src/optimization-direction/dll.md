
## dll

Webpack 的 DLLPlugin 可用于将常用的模块捆绑成动态链接库 (DLL) 文件，然后可以由浏览器缓存以加快加载速度。

```js
// webpack.config.js

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
};
```
