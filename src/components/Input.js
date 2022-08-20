import React, { useState } from "react";

const Input = ({ addIngredient }) => {
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientAmount, setIngredientAmount] = useState(1);
    const onSubmit = (e) =>{
        e.preventDefault();
        addIngredient({name:ingredientName,amount:ingredientAmount})
    };
  return (
        <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                <label>Zutat:</label>
                <input type="text" name="name" placeholder="Zutat eingeben..."   value={ingredientName} onChange={(e) => {setIngredientName(e.target.value)}}></input>
            </div>
            <div className="field">
                <label>Menge:</label>
                <input type="number" min="0.1" max="31" step="0.01" name="amount" placeholder="1.5" value={ingredientAmount} onChange={(e) => {setIngredientAmount(Number(e.target.value))}}></input>
            </div>
            <button className="ui button" type="submit">Zutat hinzufügen</button>
        </form>
      
  )
};

export default Input;
