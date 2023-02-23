const canUseWebp = () => {
  // 通过 canvas 来判断浏览器是否支持 webp 格式 和
  // const canvas = document.createElement('canvas')
  // if (canvas.getContext && canvas.getContext('2d')) {
  //   return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  // }

  // return false

  // 通过 base64 格式的图片来判断浏览器是否支持 webp 格式
  // const img = new Image()
  // img.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4IC4AAACyAgCdASoBAAEAL'
  // img.onload = img.onerror = () => {
  //   return img.height === 2
  // }

  // return false

  // 通过 base64 格式的图片来判断浏览器是否支持 webp 格式，并且使用 createImageBitmap 写法
  if (!window.createImageBitmap) return false

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  const blob = fetch(webpData).then(r => r.blob())
  return createImageBitmap(blob).then(
    () => true,
    () => false
  )
}

const updateAttr = (el, attr, value) => {
  let webpUrl = value

  if (canUseWebp()) {
    webpUrl = value.replace(/(\.\w+)$/, '.webp')

    imgOnError(el, attr, value)
  }

  if (attr === 'bgi') {
    el.style.backgroundImage = `url(${webpUrl})`
  } else {
    el.setAttribute(attr, webpUrl)
  }
}

const imgOnError = (el, attr, value) => {
  let img = new Image()
  img.src = value
  img.onerror = () => {
    updateAttr(el, attr, value)
    img = null
  }
}

const updateWebp = (el, binding) => {
  const attr = binding.arg || 'src'
  const value = binding.value

  if (value.indexOf('data:image') === 0) return
  updateAttr(el, attr, value)
}


// Vue 通过指令的方式来使用
const vueWebp = {
  install(Vue) {
    Vue.directive('webp', {
      inserted(el, binding) {
        updateWebp(el, binding)
      },
      componentUpdated(el, binding) {
        if (binding.oldValue !== binding.value) {
          updateWebp(el, binding)
        }
      },
    })
  },
}
