import React from 'react'
import  './app.css'
import FormText from './component/FormText'
import Navbar from './component/Navbar'
function App() {
  return (
    <> 
    <Navbar title ="NavBar"/>
    <div className="container">
    <FormText heading = "Enter your mail"/>
    </div>
   
    </>
  )
}

export default App
  