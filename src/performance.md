
## performance 相关指标

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
