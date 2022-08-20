import React from "react";

const Ingredients = ({ ingredients, deleteIngredient }) => {
  const renderedIngredients = ingredients.map((el, i) => {
    return (
      <div key={i} className="ui label">
      {`${el.name} ${el.amount}`}
      <i  className="delete icon" onClick={()=>{deleteIngredient(i)}}></i>
      </div>
    );
  });
  return (
    <div className="ui container ingridientsList">{renderedIngredients}</div>
  );
};

export default Ingredients;
