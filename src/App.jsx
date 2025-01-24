import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Favourites from './components/Favourites/Favourites'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'



function App() {
const [querry,setQuerry] = useState('pasta')
let router = createHashRouter ([{
  path:'',element:<Layout setQuerry={setQuerry}/>,children:[
    {index:true,element:<Home querry={querry}/>},
    {path:'/favourites',element:<Favourites/>},
    {path:'*',element:<Notfound/>}
  ]
}])
  return (
  <>
  <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
