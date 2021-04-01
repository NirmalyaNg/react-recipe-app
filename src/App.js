import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Recipe from "./components/Recipe";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [buttonSearch, setButtonSearch] = useState("");
  const APP_ID = "67475a3c";
  const APP_KEY = "42f212403c7516ce09ac5212fe17a92b";

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const buttonSearchHandler = (e) => {
    e.preventDefault();
    setButtonSearch(search);
  };

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    //   )
    //   .then((res) => {
    //     setRecipes(res.data.hits);
    //     console.log(res.data.hits);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    getRecipes();
  }, [buttonSearch]);

  return (
    <div className="App">
      <SearchBar
        buttonSearchHandler={buttonSearchHandler}
        searchHandler={searchHandler}
        search={search}
      />
      <Grid container>
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
