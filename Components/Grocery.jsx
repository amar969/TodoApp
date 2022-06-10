import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";

export const Grocery = () => {
  const [data, setData] = React.useState([]);
  const [showAll, setShowAll] = React.useState(true);

  const handleAdd = (title) => {
    const payload = {
      title : title,
      status: false,
      id: uuid(),
    };
    setData([...data, payload]);
  };

  const handleDelete = (id) => {
    const Deleteitem = data.filter((todo) => todo.id !== id);
    setData(Deleteitem);
  };

  const handleToggle = (id) => {
    const updateToDo = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updateToDo);
  };

  return (
    <>
      <h1>Grocery List</h1>
      <GroceryInput handleAdd={handleAdd} />
        <GroceryList
          data = {data}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          showAll = {showAll}
        />
      
    </>
  );
};
