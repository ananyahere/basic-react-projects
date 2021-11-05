import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values('#f15025').all(10))

  const submitHandler = (e) => {
    e.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setColorList(colors)
    }catch(e){
      setError(true)
      console.log(e)
    }
  }

  const changeHandler = (e) => {
    setColor(e.target.value)
  }

  return (
    <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={submitHandler}>
        <input type="text" value={color} onChange={changeHandler} 
        placeholder="#f15025" className={`${error? "error":null}`}/>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>

    <section className="colors">
      {colorList.map((color,index) => <SingleColor key={index} color={color} index={index}/> )}
    </section>
    </>
  )
}

export default App
