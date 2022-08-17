import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ ingredients }) => {
  const onIngredientDelete = (ingredient) => {
    console.log(`want to delete ${ingredient}`);
  };
  const renderedIngredients = ingredients.map((el, i) => {
    return (
      <Ingredient
        key={i}
        name={el.name}
        amount={el.amount}
        onIngridientDelete={onIngredientDelete}></Ingredient>
    );
  });
  return (
    <div className="ui container ingridientsList">{renderedIngredients}</div>
  );
};

export default Ingredients;
