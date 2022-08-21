import React, { useState } from "react";
import Ingredients from "./components/Ingredients";
import Input from "./components/Input";
import Recipes from './components/Recipes';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const onAddIngredient = (ingredient) => {
    const actualIngredients = ingredients.concat(ingredient);
    setIngredients(actualIngredients);
  };
  const deleteIngredient = (i) => {
    setIngredients([...ingredients.slice(0, i), ...ingredients.slice(i + 1)]);
  };
  return (
    <div className="ui container">
      <h2>Kochbuch</h2>
      <Input addIngredient={onAddIngredient} />
      <Ingredients
        ingredients={ingredients}
        deleteIngredient={deleteIngredient}
      />
      <Recipes ingredients={ingredients} />
    </div>
  );
};

export default App;
