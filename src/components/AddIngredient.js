import React, { useState } from "react";

const AddIngredient = ({ onAddIngredient }) => {
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientAmount, setIngredientAmount] = useState(1);
    const onSubmit = (e) =>{
        e.preventDefault();
        onAddIngredient({name:ingredientName,amount:1})
    };
  return (
        <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                <label>Zutat:</label>
                <input type="text" name="name" placeholder="Zutat eingeben..."   value={ingredientName} onChange={(e) => {setIngredientName(e.target.value)}}></input>
            </div>
            <div className="field">
                <label>Menge:</label>
                <input type="number" name="amount" placeholder="1.5" value={ingredientAmount} onChange={(e) => {setIngredientAmount(e.target.value)}}></input>
            </div>
            <button className="ui button" type="submit">Zutat hinzufügen</button>
        </form>
      
  )
};

export default AddIngredient;
