import {useEffect, useState} from 'react'

const useWebp = () => {
  const [webp, setWebp] = useState(false)

  useEffect(() => {
    const canvas = document.createElement('canvas')

    if (canvas.getContext && canvas.getContext('2d')) {
      const isWebp = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
      setWebp(isWebp)
    }
  }, [])

  return webp 
}

export default useWebp
