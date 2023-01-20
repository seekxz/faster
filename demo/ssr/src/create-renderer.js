import { createRenderer as serverCreateRenderer } from 'vue-server-renderer'

const renderer = serverCreateRenderer()

const createRenderer = (app) => {
  return renderer.renderToString(app)
}

export default createRenderer
