//==========================================
//      DEPENDENCIES AND IMPORTS
//==========================================
const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const app = express();
//==========================================
//        GLOBAL VARIABLES
//==========================================
app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use(cors());
//==========================================

//==========================================
//           DATABASE CONNECTION
//==========================================
const url = process.env.MONGODB_CONNECTION_URL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to remote DB!");
  })
  .catch((err) => {
    console.log("An Error occured logging after this: ");
    console.log(err);
  });
//==========================================

//==========================================
//        MONGOOSE SCHEMAS
//==========================================
const recipeSchema = new mongoose.Schema({
  name:{
    type: String,
    unique: true,
  },
  ingredients: Array,
  description:String,
  data:Object
});
//==========================================

//==========================================
//          SCHEMA PLUGINS
//==========================================
recipeSchema.plugin(findOrCreate);
//==========================================

//==========================================
//          MONGOOSE MODELS
//==========================================
const Recipe = new mongoose.model(
  "Recipe",
  recipeSchema
);
//==========================================

//==========================================
//          APP API Endpoints
//==========================================
app.get("/api/v1/recipes", (req, res) => {
  console.log("DIE NEUSTEN 10 REZEPTE LADEN UND ZURÜCKGEBEN!");
  Recipe.find().sort({ createdAt: -1 }).limit(10).then((results)=>{
    res.json(results);
    console.log(`results: ${results}`)
  })
});
app.get("/api/v1/recipes/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Das Rezept mit der id: ${id} laden zun zurückgeben!`);
  res.json({"ok":id})
});
app.post("/api/v1/recipes", (req,res)=>{
    const {name, description, ingredients, data} = req.body;
    Recipe.findOneAndUpdate(
        { name },
        {
          name,
          description,
          ingredients,
          data
        },
        {
          upsert: true,
        }
      )
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
})
//==========================================

//==========================================
//               LISTENER
//==========================================
const listener = app.listen(process.env.PORT || 3080, function () {
  console.log("Server started on port " + listener.address().port);
});
//==========================================
