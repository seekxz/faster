import reactLogo from './assets/react.svg'

import logopng from './assets/logo.png'
import logowebp from './assets/logo.webp'

import './App.css'
import Webp from './Webp'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* <img src={logopng} />
      <img src={logowebp} /> */}

      <Webp style={
        {
          width: '400px',
          height: '200px',
          backgroundSize: 'cover',
        }
      } target="div" originSrc={logopng} webpSrc={logowebp} />

      <Webp target='img' originSrc={logopng} webpSrc={logowebp} />
    </div>
  )
}

export default App
