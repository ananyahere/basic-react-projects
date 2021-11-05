import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color, index}) => {
  const [alert, setAlert] = useState(false)
  const bcg = color.rgb.join(',')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(color.hex)
    }}>
      <p className="percent-value">{`${color.weight}%`}</p>
      <p className="color-value">{color.hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
