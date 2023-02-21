
## 图片优化，图片占位，图片懒加载，雪碧图

图片优化：使用图片压缩工具，如 tinypng，压缩图片大小
图片占位：可以使用默认图片，或者使用 css3 的 background-image 属性，设置背景图片，这样可以避免图片加载时的闪烁
图片懒加载：使用 vue-lazyload 插件，可以实现图片懒加载
雪碧图：使用 webpack-spritesmith 插件，可以实现雪碧图的自动生成

## 使用 webpack 实现雪碧图

```js
// webpack.config.js

const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  plugins: [
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'src/assets/images'),
        glob: '*.png',
      },
      target: {
        image: path.resolve(__dirname, 'src/assets/sprite.png'),
        css: path.resolve(__dirname, 'src/assets/sprite.css'),
      },
      apiOptions: {
        cssImageRef: './sprite.png',
      },
    }),
  ],
};
```
