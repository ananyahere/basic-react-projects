import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const getLocalStorage = () => {
    const items = localStorage.getItem('items')
    if(items){
      return JSON.parse(localStorage.getItem('items'))
    }else{
      return []
    }
  }
  const [name, setName] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      // empty submission => show alert
      showAlert(true, "please enter an item", "danger");
    } else if (name && isEditing) {
      // deal with edit
      // note: items.map returns a new array
      setItems(
        items.map((item) => {
          if (item.id === editID) {
            // change title => return updated object
            return { ...item, title: name };
          }
          // else just return item as it is
          return item;
        })
      );
      showAlert(true, "value changed", "success");
      setEditID(null);
      setIsEditing(false);
      setName("");
    } else if (name && !isEditing) {
      // add to items-list
      const newItem = { id: new Date().getTime().toString(), title: name };
      setItems([...items, newItem]);
      showAlert(true, "item added to the list", "success");
      setName("");
    }
  };

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const editHandler = (editid) => {
    setEditID(editid);
    setIsEditing(true);
    // find object with given id
    const desiredItem = items.find(({ id }) => id === editid);
    // display non-updated value in the form
    setName(desiredItem.title);
  };

  const deleteHandler = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
  };

  const showAlert = (show, msg, type) => {
    const alert = { show, msg, type };
    setAlert(alert);
  };

  const clearItemHandler = () => {
    setItems([]);
    showAlert(true, "empty list", "danger");
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, items)

  

  const groceryContainer = (
    <div className="grocery-container">
      <List
        items={items}
        onRemoveItem={deleteHandler}
        onEditItem={editHandler}
      />
      <button className="clear-btn" onClick={clearItemHandler}>
        clear items
      </button>
    </div>
  );

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert alert={alert} setAlert={setAlert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={name}
            onChange={changeHandler}
            placeholder="e.g. eggs"
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {items.length > 0 && groceryContainer}
    </section>
  );
}

export default App;
