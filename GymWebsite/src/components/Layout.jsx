import Navbar from './Navbar_Folder/Navbar'
import { Outlet } from 'react-router-dom'
import Footer_section from './Footer/Footer_section'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="relative z-0 min-h-0 w-full">
        <Outlet />
      </main>
      <Footer_section />
    </>
  )
}
