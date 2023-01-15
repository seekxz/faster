# faster
Front End Performance Optimization

在设计时和编写之前考虑。性能优化是一个持续的过程，不是一蹴而就的。

## 性能指标

性能多快才算快呢？不能凭感觉，要有数据支撑，指标进行客观的衡量。

网络加载可以从 Chrome Dev Tools 中的 Network、Lighthouse 相关的指标来分析。

RAIL 模型，加载完成后的交互响应参考的是：
1. 响应，在 100ms 内响应用户输入；
2. 动画，画面帧率要到达 60 FPS（1 秒 ÷ 60 = 16.6 毫秒）；
3. 异步请求的完成时间最好不超过 1s，如果超过最好做一个 loading 状态的提示；
4. FID < 100ms, LCP < 2.5s, TTI < 5s on 3G, 关键文档大小预算 < 170KB (gzipped)。

相关的指标有：
1. FP， First Print，白屏时间，首次渲染的时间点
2. FCP， First Contentful Paint，首屏时间，首次内容绘制的时间
3. FMP， First Meaningful Paint，首次有意义的绘制，比如首屏的图片加载完毕
4. ATF， Above the Fold，首屏时间，首屏内容加载完毕的时间
5. TTI， Time to Interactive，首次可交互时间，可以用 DomReady 时间。合理值在 5s 以内
6. 资源总下载时间。Load 时间 >= DomContentLoaded 时间
  Dom 加载完时间，DomContentLoaded
  页面资源加载完时间，Load，包括图片，音视频等异步资源。但是资源加载完之后，页面还没有完全稳定，完全稳定的时间由 finish 决定。
7. 服务端重要接口加载速度
8. 客户端启动容器（Webview）时间

获取相关指标代码：[preformace 指标时间](./src/performance.md)

## 优化方向

前端性能优化可以从 **加载**（项目架构、项目配置）、**代码细节** 两个纬度进行划分。

### 加载

配置相关：Gzip、CDN

项目架构：Webpack 配置、服务端 SSR，客户端渲染

1. 客户端 gzip 离线包，服务器资源 gzip 压缩包。[gzip related](./src/optimization-direction/gzip.md)
2. CDN 静态资源。[cdn related](./src/optimization-direction/cdn.md)
3. JS 代码压缩混淆，ES Module，动态 Import，CSS 代码压缩与无用代码移除。[webpack optimization Setting related](./src/optimization-direction/building-tools-optimization-setting.md)
4. 图片加载优化，是否可以使用 webp 图片格式文件。[image optimization related](./src/optimization-direction/image-optimization.md)
5. 服务端渲染 SSR，客户端渲染。[ssr related](./src/optimization-direction/ssr.md)
6. Webpack DLL，通用优先打包抽离，利用浏览器缓存。
7. Wbepack 本身提供的优化，Base64，资源压缩，Tree Shaking，拆包 chunk
8. 使用骨架图
9. 延迟加载不用长内容

### 代码细节

从 `html`, `css`, `assets`, `js` 方向分别描述

1. 使用 perfetch, preload 预加载等新特性
2. 合理使用 async (加载完当前 js 立即执行), defer (所有资源加载完之后执行 js)，避免阻塞 DOM 解析
3. 减少组件层级与复杂度
4. 图片优化，图片占位，图片懒加载，雪碧图

5. 优先使用 Flex 布局
6. 减少 DOM 操作，减少重绘重排，尽量使用 CSS3、transform，requestAnimationFrame

7. 首屏减少和客户端交互，并合并接口请求
8. 首页不加载不可视组件
9. 减少重定向
10. 防止渲染抖动，控制时序，避免重复渲染
11. 数据缓存，减少接口请求
12. 服务器合理设置缓存策略

### 页面卡顿问题

卡顿问题主要由于：动画、DOM 操作、异步、事件绑定、防抖或节流等原因导致。

1. 动画方面，尽量使用 CSS 动画，由于效率比 JS 高，而且 CSS 可以为 GPU 加速，3D 加速。如果非要使用 JS 动画，可以使用 requestAnimationFrame
2. 事件绑定，尽量使用事件委托，避免事件冒泡
3. 批量操作 DOM，尽量使用 DocumentFragment，若是图片则需要固定图片容器大小，避免屏幕抖动
4. 异步操作，尽量使用 Promise.all，避免多个异步操作导致页面卡顿。在实际对应场景中可以使用，IntersectionObserver，PostMessage，RequestIdleCallback 等 API
5. 节流和防抖
6. 减少重绘重排
7. 减少临时大对象的创建，避免内存泄漏，若一定要使用可以利用对象缓存，减少内存碎片

### 性能优化常用 API

1. IntersectionObserver，PostMessage，RequestIdleCallback
2. RequestFrameAnmation 和 RequestIdleCallback
3. Web Worker，耗时的任务可以放入 Web Worker 中执行，避免阻塞主线程
4. Img 的 onload 事件，监听首屏内的图片是否加载完成，判断首屏事件
5. window.addEventListener('load', () => {})，监听页面是否加载完成。 window.addEventListener('DOMContentLoaded', () => {})，监听页面 DOM 是否加载完成
6. Performance API，可以获取页面性能数据，如：重绘重排次数，页面加载时间，页面卡顿时间等。performance.now() 与 now Date() 区别，是高精度的并且是相对于时间，页面加载的那一刻。

## 工具

1. Chrome Dev Tools: `Network`、`Performance`、`Lighthouse`, `Coverage`
详情使用：[chrome-dev-tools](./src/chrome-dev-tools.md)
2. Page Speed
