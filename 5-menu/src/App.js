import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import menu from './data';

function App() {
  const [menuItems, setMenuItems] = useState(menu)
  const [menuCategories, setMenuCategories] = useState([])


  const filterHandle = (category) => {
    if(category == "all" ){
      return setMenuItems(menu)
    }
    const newItems = menu.filter(menuItem => menuItem.category === category) 
    setMenuItems(newItems)
  }


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories onFilter={filterHandle}/>
      <Menu items={menuItems}/>
    </main>
  );
}

export default App;
