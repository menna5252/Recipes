import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
export default function Layout({setQuerry}) {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
    <Navbar setQuerry={setQuerry}/>
    <div className="flex-grow">
    <Outlet/>
    </div>
   
    <Footer/>
    </div>
  )
}
