
## 使用骨架图

原因：
骨架图是一种用于提高用户体验的技术，它可以在页面内容加载之前显示页面的大致布局。骨架图可以让用户在页面内容加载之前就能够知道页面的大致布局，从而让用户在等待页面内容加载的过程中不至于感到无聊。

实现方式：
1. 使用 CSS 实现骨架图，这种方式比较简单，但是只能实现简单的骨架图，而且不支持动画。
2. 使用 JavaScript 实现骨架图，这种方式比较复杂，但是可以实现复杂的骨架图，而且支持动画。
3. 使用第三方库实现骨架图。

### 使用 CSS 实现骨架图

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>骨架图</title>
  <style>
    .skeleton {
      background: #eee;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      animation: skeleton 1s linear infinite;
    }

    .skeleton .skeleton-item {
      background: #fff;
      margin: 10px;
      padding: 10px;
      border-radius: 5px;
    }

    .skeleton .skeleton-item .skeleton-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #eee;
    }

    .skeleton .skeleton-item .skeleton-title {
      width: 100%;
      height: 20px;
      background: #eee;
      margin-top: 10px;
    }

    .skeleton .skeleton-item .skeleton-content {
      width: 100%;
      height: 20px;
      background: #eee;
      margin-top: 10px;
    }

    @keyframes skeleton {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }
  </style>
  <script>
    window.onload = function () {
      var skeleton = document.querySelector('.skeleton');
      setTimeout(() => {
        skeleton.style.display = 'none';
      }, 3000)
    }
  </script>

</head>

<body>
  <div class="skeleton">
    <div class="skeleton-item">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-content"></div>
    </div>
    <div class="skeleton-item">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-content"></div>
    </div>
    <div class="skeleton-item">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-content"></div>
    </div>
  </div>
</body>

</html>
```

### 第三方库实现骨架图

功能区分：
1. SPA 中路由切换的 loading
  [react-content-loader](https://www.npmjs.com/package/react-content-loader)
  [vue-content-loader](https://www.npmjs.com/package/vue-content-loader)
2. 首屏渲染的优化
  [page-skeleton-webpack-plugin](https://github.com/ElemeFE/page-skeleton-webpack-plugin/blob/master/docs/i18n/zh_cn.md)
  [vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)
