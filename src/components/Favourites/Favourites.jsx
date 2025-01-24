import React, { useEffect, useState } from 'react'
import Recipecard from '../Recipecard/Recipecard'
export default function Favourites() {
  const [favourites, setFavourites] = useState([])
  useEffect(()=>{
    const storedFav = JSON.parse(localStorage.getItem('favourites'))||[]
    setFavourites(storedFav)
  },[])
  const removeFromFavourite = (recipe)=>{
    const updateFavourites = favourites.filter((fav)=>fav.id!==recipe.id);
    setFavourites(updateFavourites);
    localStorage.setItem("favourites",JSON.stringify(updateFavourites));
  };
  return (
    <div className='container p-8'>
    <h1 className='text-center py-4 text-2xl font-bold dark:text-white'>your Favourites</h1>
    {favourites.length === 0?(<p className='dark:text-white'>No favourite recipe yet.</p>):
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favourites.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} 
             isFavourite={true}
             favFunction={()=>removeFromFavourite(recipe)}
             
             />
          ))}
        </div>
    }
    </div>
  )
}
