import React from 'react'
import Navbar from './Navbar_Folder/Navbar'
import { Outlet } from 'react-router-dom'
import Footer_section from './Footer/Footer_section'

//This components allows other specific components to be displayed across all routes //
export default function Layout() {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer_section/>
    </>
  )
}
