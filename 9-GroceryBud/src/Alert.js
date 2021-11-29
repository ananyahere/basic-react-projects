import React, { useEffect } from 'react'

const Alert = ({alert, setAlert}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      // after 3000ms setAlert to the following value
      const alert = {
        show: false,
        msg: '',
        type: ''
      }
      setAlert(alert)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
}

export default Alert
