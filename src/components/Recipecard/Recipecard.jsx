import React, { useState } from 'react'

export default function Recipecard({recipe,favFunction,isFavourite}) {
    const [showModal,setShowModal] = useState(false)
  return (
   <>
    <div className='bg-gray-100 dark:bg-gray-500 shadow-md rounded-md  relative'>
    <img src={recipe.image_url} alt={recipe.title} className='w-full cursor-pointer h-40 object-cover'
    onClick={() => setShowModal(true)}/>
    <div className="p-4">
        <h2>{recipe.title}</h2>
        <button className='absolute bottom-2 right-2' onClick={()=>{favFunction(recipe)}}>
            <i className={`${isFavourite?'text-red-500':''} fas fa-heart`}></i>
        </button>
    </div>
    </div>
   {showModal&&
   <div className='z-[999] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
<div className='bg-white dark:bg-gray-500 p-6 rounded-md  max-w-md w-full'>
    <h3 className='text-xl font-bold mb-4'>{recipe.title}</h3>
    <img src={recipe.image_url} alt="" className='w-full object-cover mb-4 h-40'/>
    <p>publisher:{recipe.publisher}</p>
    <button className='mt-4 px-4 py-2 bg-gray-800 text-white rounded-md' onClick={()=>{setShowModal(false)}}>close</button>
</div>
   </div>
   }
   </>
  )
}
