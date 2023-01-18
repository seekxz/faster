import imgsrc1 from "../assets/1.png"
import imgsrc2 from "../assets/2.png"
import imgsrc3 from "../assets/3.png"
import imgsrc4 from "../assets/4.png"
import imgsrc5 from "../assets/5.png"
import './style.css'

const isSupportLazy = 'loading' in HTMLImageElement.prototype
console.log('isSupportLazy: ', isSupportLazy);

// 原生图片懒加载
// 1. 没有缓冲
// 2. 跟屏幕，网速，数量无线性关系

const OriginalImage = ({ ...props }) => (
  <div className="container">
    <div><img src={imgsrc1} /></div>
    <div><img src={imgsrc2} /></div>
    <div><img src={imgsrc3} /></div>

    设置延迟加载属性
    <div><img src={imgsrc4} loading="lazy" alt="4" /></div>
    <div><img src={imgsrc5} loading="lazy" alt="5" /></div>
  </div>
)

export default OriginalImage
