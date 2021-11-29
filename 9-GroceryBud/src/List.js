import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, onRemoveItem, onEditItem}) => {


  return <div className="grocery-list">
    {items.map(item => 
      <article className="grocery-item" key={item.id}>
      <p className="title">
        {item.title}
      </p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={() => onEditItem(item.id)}><FaEdit /></button>
        <button type="button" className="delete-btn" onClick={() => onRemoveItem(item.id)}><FaTrash /></button>
      </div>
    </article>
    )}

  </div>
}

export default List
