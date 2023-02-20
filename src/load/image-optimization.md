
## image optimization

> 图片优化

1. 使用合适的图片格式
2. 适配不同屏幕的尺寸
3. 图片压缩比例
4. 图片加载优先级
5. 非首屏图片使用懒加载

> Webp

优点：体积小，支持透明，支持动画
缺点：兼容性差，不支持 IE

[caniuse Webp](https://caniuse.com/?search=webp)

1. 提前加载一张合适大小的图片，嗅探是否支持 webp
```js
const supportsWebp = ({createImageBitmap, Image}) => {
  if (!createImageBitmap || !Image) {
    return Promise.resolve(false)
  } 

  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      createImageBitmap(image).then(() => {
        resolve(true)
      }, () => {
        resolve(false)
      })
    }
    image.onerror = () => {
      resolve(false)
    }

    image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IC4AAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8B+wMf4CJbIJp5Jp5oqOj'
  })
}
```

2. 通过 canvas 的 toDataURL 方法来判断是否支持 webp
```js
const supportsWebp = () => {
  try {
    return (
      document
        .createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0
    )
  } catch (err) {
    return false
  }
}
```

> 图片懒加载

使用第三方库懒加载方案 [vanilla-lazyload](https://github.com/verlok/vanilla-lazyload)

> 渐进式图片

渐进式图片是 JPG 格式图片的另外一种形式，一般使用的 BaseLine JPG 形式，渐进式图片则是从上到下，从左到右，从模糊到清晰的加载方式，这样可以让图片在加载过程中更加的自然，更加的流畅。

优点：
用户体验更好，更加流畅。等待时间更短。

缺点：
图片体积更大，加载时间更长。
渐进式图片需要设计人员生成。

使用第三方库来实现：
[ImageMagick](https://github.com/ImageMagick/ImageMagick)

> 响应式图片

响应式图片是指图片的尺寸和分辨率能够根据屏幕的大小和分辨率自动调整，从而达到最佳的显示效果。

通过 img 的属性 srcset 来实现响应式图片，sizes 属性来控制图片的大小。

```html
<img src="https://example.com/image.jpg" srcset="https://example.com/image.jpg 800w, https://example.com/image.jpg 1600w" sizes="(max-width: 800px) 100vw, 800px" alt="A giant stone face">
```
