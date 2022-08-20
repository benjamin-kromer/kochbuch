import React, { useEffect, useState } from "react";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`name: ${name} descr: ${description}`)
    const postRecipeToDB = async () => {
      const res = await axios({
        method: "post",
        url: "/api/v1/recipes",
        data: { name, description },
      });
      if (res.data !== "undefined") {
        return res.data;
      }
    };
    postRecipeToDB()
  };
  useEffect(() => {
    const fetchLast10Recipes = async () => {
      const res = await axios({ method: "get", url: "/api/v1/recipes" });
      if (res.data !== "undefined") {
        console.log(`res.data ${JSON.stringify(res.data)}`);
        if (res.data.length === 0){
            setRecipes([])
        }else{
            setRecipes(res.data)
        }
        
      } else  setRecipes([]);
    };
    fetchLast10Recipes()
  }, []);
  const renderedRecipes = recipes.map((recipe, i) => {
    return (
      <div key={i} className="card">
        <div className="content">
          <div className="header">{recipe.name}</div>
          <div className="meta">{recipe.ingredients}</div>
          <div className="description">{recipe.description}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="ui container">
      <div className="ui segment">
        <h4>Die letzten 10 Rezepte</h4>
        <div className="ui cards">{renderedRecipes}</div>
      </div>
      <div className="ui attached segment">
        <label>Füge ein neues Rezept hinzu:</label>
        <div className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>Name des Rezeptes</label>
            <input
              type="text"
              placeholder="Zwiebelkuchen"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Beschreibung</label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}></textarea>
          </div>
        </div>
      </div>
      <div className="ui bottom attached button" tabIndex="0" onClick={onSubmit}>
        Rezept speichern
      </div>
    </div>
  );
};

export default Recipes;
