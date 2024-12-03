import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navbar from "./Header/Navbar"
import { ToastContainer } from "react-toastify"







function App() {

 
  

  return (
  
  <>
  <Navbar/>

  <Outlet/>

  <ToastContainer />
  <Footer/>

  
  
  
  
  </>

  
  )
}

export default App
