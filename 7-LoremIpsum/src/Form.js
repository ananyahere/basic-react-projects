import React, { useState } from 'react';

const Form = (props) => {
  const [input, setInput] = useState(0)

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) =>  {
    e.preventDefault()
    props.onFormSubmit(input)
  }

    return (
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraphs: </label>
        <input type="number" id="amount" name="amount" value={input} onChange={changeHandler}/>
        <button className="btn" type="submit">Generate</button>
      </form>
    )
}

export default Form