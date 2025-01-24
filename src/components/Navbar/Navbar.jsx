import React, { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";

export default function Navbar({ setQuerry }) {
  const location = useLocation();
  const savedDarkMode = localStorage.getItem("darkMode") === "true"; 
 
  const [darkmode,setDarkmode] =useState(savedDarkMode)
  useEffect(()=>{

    if(darkmode){
     document.documentElement.classList.add('dark');
     localStorage.setItem("darkMode", "true");
    }
    else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "false");
    }
   
    
  },[darkmode])
 
  return (
    <div className="flex justify-between items-center  px-4 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black">
      <Link to="/" className="text-2xl font-bold">
        Forkify
      </Link>
      {location.pathname !== "/favourites" && (
      <input
        type="text"
        placeholder="search recipes"
        className=" rounded-md px-4 py-2 w-[200px] md:w-[500px] text-black"
        onChange={(e) => setQuerry(e.target.value)}
      />)}
      <div className="icons flex gap-2">
        <Link to="/favourites">
          <i className="fas fa-heart text-xl"></i>
        </Link>
        <button onClick={()=>setDarkmode(!darkmode)}>
          {darkmode?(<i className="fas fa-sun text-xl"></i>): (<i className="fas fa-moon text-xl"></i>)}
        </button>
      </div>
    </div>
  );
}
