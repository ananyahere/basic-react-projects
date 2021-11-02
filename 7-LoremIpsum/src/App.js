import React, { useState } from 'react';
import data from './data';
import Form from './Form'
import Text from './Text'
function App() {
  const [textArr, setTextArr] = useState([])  

  const FormSubmitHandler = (count) => {
    // setTextArr([])
    // for(let i=0; i<count; i++){
    //   setTextArr(prevState => {
    //     const newState = [...prevState]
    //     newState.push(data[i])
    //     return newState
    //   })
    // }
    //      OR
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }    
    setTextArr(data.slice(0,amount))
  }
  
  return (
  <section className="section-center">
    <h3>tired of boring lorem lpsum?</h3>
    <Form onFormSubmit={FormSubmitHandler}/>
    <Text data={textArr} />
  </section>
    )
}

export default App;
