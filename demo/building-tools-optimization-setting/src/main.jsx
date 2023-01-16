import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { treeShaking } from './tree-shaking'
console.log('treeShaking: ', treeShaking);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
