import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import menu from './data';

// get all the unique caterogies -> https://www.youtube.com/watch?v=yxT1lgupUrY
const allCaterories = ['all', ...new Set (menu.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(menu)
  const [menuCategories, setMenuCategories] = useState(allCaterories)

  const filterHandler = (category) => {
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
      <Categories onFilter={filterHandler} categories={menuCategories}/>
      <Menu items={menuItems}/>
    </main>
  );
}

export default App;
