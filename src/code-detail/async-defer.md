
## 合理使用 async、defer 避免阻塞 DOM 解析

script 标签中的 async 和 defer 属性，用于控制浏览器何时加载 JS 文件。aysnc 允许脚本在加载后立即执行，而不是阻塞页面上的其他元素。而 defer 则是在页面加载完执行。

async: 加载完当前 js 立即执行
defer: 所有资源加载完之后执行 js

使用 async 的优点能够缩短脚本或启用 HTTP 缓存的脚本的执行时间。但如果是有依赖的脚本，最好使用 defer。

```html
<!-- async -->
<script async src="async.js"></script>

<!-- defer -->
<script defer src="defer.js"></script>
```

## webpack 结合使用 async、defer

通过 `html-webpack-script-plugin` 插件，可以在 html 中添加 script 标签。

```js
// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackScriptPlugin = require('html-webpack-script-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackScriptPlugin({
      files: ['async.js'],
      async: true,
    }),
    new HtmlWebpackScriptPlugin({
      files: ['defer.js'],
      defer: true,
    }),
  ],
};
```
