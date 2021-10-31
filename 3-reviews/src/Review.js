import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const indexIncrementHandler = () => {

    setIndex((prevState) => {
      // if Array ran out of index
      if(prevState+1 > people.length - 1){
        return 0;
      }
      return prevState+1
    })
  }

  const indexDecrementHandler = () => {

    setIndex((prevState) => {
      // if Array ran out of index
      if(prevState - 1 <0){
        return people.length-1
      }
      return prevState-1
    })
  }

  const supriseHandler = () => {
    var randomIndex = Math.floor(Math.random()*people.length) 
    if(randomIndex === index){
      randomIndex = randomIndex + 1
    }
      // if Array ran out of index    
    if(randomIndex > people.length-1){
      randomIndex = 0;
    }
    console.log("suprise me!",randomIndex)
    setIndex(randomIndex)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={people[index].image} alt={people[index].name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[index].name}</h4>
      <p className="job">{people[index].job}</p>
      <p className="info">{people[index].text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={indexDecrementHandler}/>
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={indexIncrementHandler}/>
        </button>
      </div>
      <button className="random-btn" onClick={supriseHandler}>Suprise Me</button>
    </article>
  );
};

export default Review;
