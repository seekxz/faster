
## webpack optimization setting

原因：减少文件体积，加快加载速度。

怎么做：webpack 配置 `optimization`，vite 配置 `build`，`rollup` 配置 `terser`。进行优化，主要包括：代码分割、代码压缩、去除重复代码、tree shaking、scope hoisting、动态 polyfill、预编译、预渲染。

代码分割配置如下：
```js
optimization: {
  splitChunks: {
    chunks: 'all',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
}
```

代码压缩配置如下：
```js
optimization: {
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    }),
  ],
}
```

去除重复代码配置如下：
```js
optimization: {
  runtimeChunk: {
    name: 'manifest'
  },
}
```

tree shaking 配置如下：
```js
optimization: {
  usedExports: true,
}
```

动态 polyfill 配置如下：
```js
optimization: {
  providedExports: true,
}
```

预编译配置如下：
```js
optimization: {
  sideEffects: true,
}
```
