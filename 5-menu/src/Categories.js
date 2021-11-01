import React from 'react';

const Categories = (props) => {

  return (
    <div className="btn-container">
      {props.categories.map(category => {
        return(
          <button className="filter-btn" onClick={() => { props.onFilter(category)} }>{category}</button>
        )
      })}
    </div>
  );
};

export default Categories;
