import React from 'react';

const Button = (props) => {

  const clickHandler = () => {
    props.onButtonClick()
  }

    return (
      <button onClick={clickHandler}>Clear All</button>
    )
}

export default Button;