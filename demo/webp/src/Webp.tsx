
import React from "react"
import useWebp from "./hooks/use-webp"

type WebpPorps = {
  target: string;
  originSrc: string;
  webpSrc: string;
  style?: React.CSSProperties;
}

const Webp = ({target, originSrc, webpSrc, style = {}}: WebpPorps) => {
  if (target === 'img') {
    return <img style={style} src={useWebp() ? webpSrc : originSrc} />
  }

  const dom = React.createElement(target, {
    style: {
      backgroundImage: `url(${useWebp() ? webpSrc : originSrc})`,
      ...style
    }
  })

  return dom
}

export default Webp
