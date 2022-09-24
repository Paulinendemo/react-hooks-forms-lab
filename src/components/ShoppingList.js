import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import ShoppingList from "./ShoppingList"

function Shopping({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    setSearchTerm(event.target.value)
  }

  const itemsToDisplay = items
    .Filter((item) => selectedCategory === "All" || item.category === selectedCategory
    )

    .Filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} searchTerm={searchTerm} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
