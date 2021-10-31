import React from 'react';

const Categories = (props) => {

  const breakfastHandler = () => {
    props.onFilter("breakfast")
  }

  const allHandler = () => {
    props.onFilter("all")
  }

  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={breakfastHandler}>Breakfast</button>
      <button className="filter-btn" onClick={allHandler}>All</button>
    </div>
  );
};

export default Categories;
