import React from "react";

export const GroceryList = ({
  handleToggle,
  handleDelete,
  data,
  showAll,
}) => {
  return (
    <>
      {data
        .filter((item) => (showAll ? true : item.status === false))
        .map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>{item.title}</h3>
            <h4> {item.status ? " - Completed" : " - Not Completed"} </h4>
            <br /> 
            <button onClick={() => handleToggle(item.id)}>
              {" "}
              {item.status ? "True" : "False"}{" "}
            </button>
            <button onClick={() => handleDelete(item.id)}> Delete </button>
          </div>
        ))}
    </>
  );
};
