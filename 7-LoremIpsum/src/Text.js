import React from 'react';

const Text = (props) => {

  return(
    <article className="lorem-text">
      {props.data.map((item,index) => <p key={index}>{item}</p>)}
    </article>
  )
}
export default Text