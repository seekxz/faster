
## Network 面板解释

请求 Requset 后分析 HTTP 请求后得到的各个请求资源信息

1. request 总请求数
2. tranferred 总传输量
3. resources 总资源数
4. Finish 总加载时间
5. DOMContentLoaded HTML 文件加载并解析完毕
6. Load 所有资源加载完毕，与 DOMContentLoaded 的区别是，需要等待图片、Script、Css 等资源全部加载完毕。

## Preformance 面板解释

用来衡量页面运行时的性能，分析 Response，Animation 等 

1. Frames，测试期间的帧率
2. Experience，主要衡量 Layout Shift，会影响到用户体验
3. Main，主线程这段时间所处理的任务，以及所花费的时间比重，空闲时间等等。

## Lighthouse 面板解释

检测网站的性能，并给出相应的修改建议

1. Performance 相关指标
2. Accessibility 可访问性：包括导航、对比度、国际化和本地化、标签语义化
3. Base Practice 最佳实践：包括安全、用户体验以及一般性建议
4. SEO 与 PWA

## Coverage 面板

展示代码覆盖率
