
## 使用 perfetch, preload 预加载等新特性

prefetch, preload 等新特性可以在页面加载时预加载一些资源，这样可以让页面加载更快，提升用户体验。

prefetch: 会在浏览器空闲时加载资源，但是不会阻塞页面的渲染。
preload: 会在浏览器空闲时加载资源，但是会阻塞页面的渲染。

当使用 preload 时，所有请求都必须有一个响应代码（例如 200), 并且缓存控制设置为 max-age，而使用 prefetch 时，只需要进行某些请求。

```js
<link rel="prefetch" href="" />
<link rel="preload" href="" />
```

## 与 webpack 结合

webpack 4.6.0 之后，可以使用 prefetch, preload 插件，来自动添加 prefetch, preload 链接。

```js
// webpack.config.js

module.exports = {
  plugins: [
    new webpack.PrefetchPlugin('./src/async.js'),
    new webpack.PreloadPlugin({
      rel: 'preload',
      include: 'async',
    }),
  ],
};
```

## 动态引入 js 文件, 使用 prefetch

代码分割注释：`/* webpackChunkName: 'supports' */`
prefetch 注释：`/* webpackPrefetch: true */`

```js
// src/index.js

import(/* webpackPrefetch: true */ './async.js');
```

react 项目：
  
```js
// src/index.js

// 代码分割后的组件
const Demo = asyncComponent(() => import(/* webpackChunkName 'supports' */ */))

// 路由引入
<Route path="/" component={App}>
  <Route path="/demo" component={Demo} />
</Route>
```
首页组件生命周期内：
```js
// effect
import {useEffect} from 'react'

useEffect(() => {
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: 'supports' */
  './async.js');
}, [])
```
