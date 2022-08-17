import React, {useRef} from 'react';

const Ingredients = ({name,amount,onIngredientDelete}) => {
    const ingredientRef = useRef();
    return (
        <div ref={ingredientRef} className="ui label">
    {`${name} ${amount}`}
    <i className="delete icon" onClick={onIngredientDelete}></i>
    </div>
    )
}

export default Ingredients;