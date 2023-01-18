import imgsrc1 from "../assets/1.png"
import imgsrc2 from "../assets/2.png"
import imgsrc3 from "../assets/3.png"
import imgsrc4 from "../assets/4.png"
import imgsrc5 from "../assets/5.png"

import LazyLoad from 'vanilla-lazyload'
const lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
  threshold: 10,
})
console.log('lazyLoadInstance: ', lazyLoadInstance)

const VanillaLazyload = () => {
  return (
    <div>
      <div><img src={imgsrc1} /></div>
      <div><img src={imgsrc2} /></div>
      <div><img src={imgsrc3} /></div>
      <div><img className="lazy" data-src={imgsrc4} /></div>
      <div><img className="lazy" data-src={imgsrc5} /></div>
    </div>
  )
}

export default VanillaLazyload
