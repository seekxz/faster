
## 服务端渲染 SSR

服务端渲染是一种优化方式，它可以让你的应用在服务端渲染出 HTML，然后将其直接发送到浏览器，最后将客户端的 JavaScript 附加到应用程序中。这种方式可以让你的应用在首次加载时更快地呈现出内容，同时也可以让你的应用在没有 JavaScript 的情况下正常工作。

### 为什么要使用 SSR？

使用 SSR 的主要原因是为了提升首屏渲染的速度。在传统的 SPA 应用中，首屏渲染的速度取决于应用的大小，如果应用比较大，那么首屏渲染的速度就会比较慢。而使用 SSR 之后，首屏渲染的速度就会得到很大的提升。

### SSR 的工作原理

SSR 的工作原理是在服务端渲染出 HTML，然后将其直接发送到浏览器，最后将客户端的 JavaScript 附加到应用程序中。这种方式可以让你的应用在首次加载时更快地呈现出内容，同时也可以让你的应用在没有 JavaScript 的情况下正常工作。


### SSR 的简单实现

通过 `vue-server-renderer` 库，可以很方便地实现 SSR。

```js
import Vue from 'vue'
import createRenderer from 'vue-server-renderer'

// 1. 创建一个 Vue 实例
const clientApp = new Vue({
  template: `<div>Hello World</div>`
})

// 2. 创建一个 renderer
const renderer = createRenderer()

// 3. 将 Vue 实例渲染为 HTML
renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})

// 4. 输出，通过浏览器打开，通过 express 服务器打开
express.get('/', (req, res) => {
  // 信息返回给浏览器
})
```

### 实践 SSR 代码

```js
// server.js
const express = require('express')
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const server = express()

const template = fs.readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

server.use('/dist', express.static(path.resolve(__dirname, './dist')))

server.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080)
```

生产中一般是通过 `Nuxt.js` 等框架来实现 SSR。
