# faster
Front End Performance Optimization

在设计时和编写之前考虑。性能优化是一个持续的过程，不是一蹴而就的。

## 性能指标

性能多快才算快呢？不能凭感觉，要有数据支撑，指标进行客观的衡量。

网络加载可以从 Chrome Dev Tools 中的 Network、Lighthouse 相关的指标来分析。

RAIL 模型，加载完成后的交互响应参考的是：
1. 响应，在 100ms 内响应用户输入
2. 动画，画面帧率要到达 60 FPS
3. 异步请求的完成时间最好不超过 1s，如果超过最好做一个 loading 状态的提示。

相关的指标有：
1. FP， First Print，白屏时间，首次渲染的时间点
2. FCP， First Contentful Paint，首屏时间，首次内容绘制的时间
3. FMP， First Meaningful Paint，首次有意义的绘制，比如首屏的图片加载完毕
4. ATF， Above the Fold，首屏时间，首屏内容加载完毕的时间
5. TTI， Time to Interactive，首次可交互时间，可以用 DomReady 时间。合理值 5s 以内
6. 资源总下载时间。Load 时间 >= DomContentLoaded 时间
  Dom 加载完时间，DomContentLoaded
  页面资源加载完时间，Load，包括图片，音视频等异步资源。但是资源加载完之后，页面还没有完全稳定，完全稳定的时间由 finish 决定。
7. 服务端重要接口加载速度
8. 客户端启动容器（Webview）时间

```js
export function performance() {
  // 页面加载时间
  const timing = performance.timing
  const performanceObj = {
    // DNS 解析时间
    dns: timing.domainLookupEnd - timing.domainLookupStart,
    // TCP 建立时间
    tcp: timing.connectEnd - timing.connectStart,
    // 白屏时间
    whiteScreen: timing.responseStart - timing.navigationStart,
    // dom 渲染完成时间
    domReady: timing.domComplete - timing.responseStart,
    // onload 时间
    onload: timing.loadEventEnd - timing.navigationStart,
    // ATF 时间
    atf: timing.domContentLoadedEventEnd - timing.responseStart,
    // TTI 时间
    tti: timing.domContentLoadedEventEnd - timing.navigationStart,

    // FCP 时间
    fcp:  performance.getEntriesByName("first-contentful-paint")[0].startTime,
    // FP 时间
    fp: performance.getEntriesByName("first-paint")[0].startTime,
  }
  return performanceObj
}
```

## 优化方向

前端性能优化分两个方向：工程化方向和代码细节方向。（这个概念来自于知乎 Lucas HC）


### 工程化方向

### 代码细节方向

## 卡顿问题解决

## Web 标准 APIs

## 工具
