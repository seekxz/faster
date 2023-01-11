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

前端性能优化可以从**加载**（项目架构、项目配置）、**渲染**（代码细节）两个纬度进行划分。

### 加载

配置相关：Gzip、CDN
项目架构：Webpack 处理、服务端 SSR， 客户端 SSR

1. 客户端 gzip 离线包，服务器资源 gzip 压缩包。[gzip relevant](./src/optimization-direction/gzip.md)
2. CDN 静态资源。[CDN relevant](./src/optimization-direction/cdn.md)
3. JS 代码压缩混淆，ES Module，动态 Import，CSS 代码压缩与无用代码移除。[Webpack optimization Setting relevant](./src/optimization-direction/webpack-optimization-setting.md)

## 工具

1. Chrome Dev Tools: `Network`、`Performance`、`Lighthouse`, `Coverage`
详情使用：[chrome-dev-tools](./src/chrome-dev-tools.md)
2. Page Speed
