
import imgsrc from '../assets/1.png'

const Srcset = () => {
  return (
    <div>
      <img srcset={`${imgsrc}?f1 50w, ${imgsrc}?f1 51w`} sizes='1vw' />
      <img srcset={`${imgsrc}?f2 50w, ${imgsrc}?f2 51w`} sizes='' />
      <img srcset={`${imgsrc}?f3 50w, ${imgsrc}?f3 51w`} sizes=',' />
      <img srcset={`${imgsrc}?f4 50w, ${imgsrc}?f4 51w`} sizes='-1px' />
      <img srcset={`${imgsrc}?f5 50w, ${imgsrc}?f5 51w`} sizes='1' />
      <img srcset={`${imgsrc}?f5 50w, ${imgsrc}?f5 51w`} sizes='100px' />
    </div>
  )
}

export default Srcset
