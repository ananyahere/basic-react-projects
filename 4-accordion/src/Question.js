import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [display, setDisplay] = useState(false)

  const displayHandler = () => {
    setDisplay((prevState) => {
      return !prevState
    })
  }


  return (
    <article className="question">
    <header>
      <h4>{props.title}</h4>
      <button className="btn" onClick={displayHandler}>
        {display? <AiOutlineMinus/> : <AiOutlinePlus/>}
      </button>
    </header>
    {display && <p>{props.info}</p>}
  </article>
  );
};

export default Question;
