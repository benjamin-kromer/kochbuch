import React,{useState} from 'react';
import Ingredients from './components/Ingredients';
import AddIngredient from './components/AddIngredient';

const App = () => {
  const [ingredients,setIngredients] = useState([{name:"Karotte",amount:1},{name:"Zwiebel",amount:1.5}]);

  const onAddIngredient = (ingredient) =>{
    console.log(`submitted ingredient: ${JSON.stringify(ingredient)}`)
    const actualIngredients = ingredients;
    actualIngredients.push(ingredient);
    console.log(`updated ingredients: ${JSON.stringify(ingredients)}`)
    setIngredients(actualIngredients)
  };
  return (
    <div className="ui container">
     <h2>Kochbuch</h2>
     <AddIngredient onAddIngredient={onAddIngredient} />
     <Ingredients ingredients={ingredients} />
    </div>
  );
}

export default App;
