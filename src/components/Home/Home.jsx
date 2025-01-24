import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipelist from "../Recipelist/Recipelist";
import GridLoader from "react-spinners/GridLoader";
export default function Home({ querry }) {
  const [recipes, setRrcipies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem('favourites'))||[]
    setFavourites(storedFav)
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${querry}`
        );
        console.log(data.data.recipes);
        setRrcipies(data.data.recipes);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [querry]);
  const toggleFavourite = (recipe) => {
    const isFavourite = favourites.some((fav) => fav.id === recipe.id);
    let updatedFavourite;
    if (isFavourite) {
      updatedFavourite = favourites.filter((fav) => fav.id !== recipe.id);
    } else {
      updatedFavourite = [...favourites, recipe];
    }
    setFavourites(updatedFavourite);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourite));
  };
  return (
    <main className="container p-8">
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <GridLoader color="#a0a0a0" />
        </div>
      ) : (
        <Recipelist recipes={recipes} 
        favFunction={toggleFavourite} 
        favourites={favourites} />
      )}
    </main>
  );
}
