import React from "react";

const RecipeIngredients = ({ ingredients }) => {
  const renderedIngredients = ingredients.map((el, i) => {
    return (
      <div key={i} className="ui label">
      {`${el.name} ${el.amount}`}
      </div>
    );
  });
  return (
    <div>{renderedIngredients}</div>
  );
};

export default RecipeIngredients;
