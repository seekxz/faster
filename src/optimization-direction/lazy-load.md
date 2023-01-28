
## 延迟加载不用的长内容

原因：延迟加载可以减少页面的初始加载时间，提高用户体验。

解决方案：使用 [IntersectionObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 来延迟加载不在视口中的内容。
  
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.srcset = lazyImage.dataset.srcset;
      lazyImage.classList.remove('lazy');
      observer.unobserve(lazyImage);
    }
  });
});

document.querySelectorAll('.lazy').forEach((image) => {
  observer.observe(image);
});
```  
