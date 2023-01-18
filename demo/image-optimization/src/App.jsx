import { useState } from 'react'
import OriginalImage from './image-lazy/original-image'
import VanillaLazyload from './image-lazy/vanilla-lazyload'
import Srcset from './components/srcset'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <OriginalImage /> */}
      {/* <VanillaLazyload /> */}
      <Srcset />
    </div>
  )
}

export default App
