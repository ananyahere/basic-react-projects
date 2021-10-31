import React from 'react';
import Tour from './Tour';
const Tours = (props) => {

  const removeTourHandler = (id) => {
    props.onRemoveTour(id)
  }

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
      {props.tours.map(tour => <Tour name={tour.name} info={tour.info} image={tour.image} price={tour.price} id={tour.id} key={tour.id} onTourDelete={removeTourHandler}/>)}
    </div>
    </section>

  )
};

export default Tours;
