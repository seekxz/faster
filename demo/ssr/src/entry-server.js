import Vue from 'vue'
import createRenderer from './create-renderer.js'

import express from 'express'

const serverApp = express()

serverApp.get('/', (req, res) => {
  const app = new Vue({
    render: h => h('div', 'hello world')
  })

  createRenderer(app).then(html => {
    res.send(html)
  }).catch(err => {
    res.status(500).send('Internal Server Error')
  })
})

serverApp.listen(8080)
