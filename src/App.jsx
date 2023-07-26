import { useState } from 'react'
import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainers/ItemListContainers"
import { CartWidget } from './components/CartWidget/CartWidget'
import {Cuadrado}     from './components/Cartas/Cartas'
import { Children } from 'react'
import { ItemCount } from './components/itemCount/ItemCount'
import { Home } from './pages/home'
import { Grid } from '@mui/material'
import { Item } from './components/Item/Item'



const MainPage = () => {
  return(
   <main> 

   </main>
  )
}

// const Contenedor = ({children}) => <div style={{width: "100%",display: "flex",gap:24}}>{children}</div>
function App() {
  // const [active, setActive] = useState(false)
  const handleCart = (qty)=>{
    console.log("La cantidad es " , qty)
  }
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
 
  
      <div className="page">

{/*       
        <NavBar />
        
        <CartWidget /> 
        <ItemCount stock={10} onAdd={handleCart}/> */}
       <Home/> 
       

      </div>

      
      

    </>
  )
}

export default App
