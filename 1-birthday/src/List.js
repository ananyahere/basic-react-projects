import React from 'react';

const List = (props) => {
  return (
    <>
   
      {props.persons.map(person => 
        <li className="person">
          <img src={person.image} alt="profile-pic" />
          <h4>{person.name}</h4>
          <p>{person.age} years old</p>
        </li>
      )}
     
    </>
  );
};

export default List;
