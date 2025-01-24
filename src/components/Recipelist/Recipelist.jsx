import React from "react";
import Recipecard from "../Recipecard/Recipecard";

export default function Recipelist({ recipes, toggleFavourite, favourites }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <Recipecard key={recipe.id} recipe={recipe} 
        favFunction={toggleFavourite}
        isFavourite={favourites.some((fav)=>fav.id==recipe.id)}/>
      ))}
    </div>
  );
}
