import { useState } from 'react'
import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainers/ItemListContainers"
import { CartWidget } from './components/CartWidget/CartWidget'

const MainPage = () => {
  return(
   <main>

   </main>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <ItemListContainer greeting={"Buenas"}/>
        <NavBar />
        <MainPage />
        <CartWidget /> 
       
      </div>
      <main className='main'></main>
    </>
  )
}

export default App
