import React, { useState } from 'react';
import List from '../List';
import Button from './Button';

const Container = (props) => {
  const [data, setData] = useState(props.data)
  const buttonClickHandler = () => {
    console.log("clicked")
    setData([])
  }

 return (
   <div className="container">
     <h3>{data.length} birthdays Today</h3>
     <ul><List persons={data}/></ul>
     <Button onButtonClick={buttonClickHandler}/>
   </div>
 )
}

export default Container;