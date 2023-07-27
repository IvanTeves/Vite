import { useState } from 'react'
import './App.css'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainers/ItemListContainers"
import { CartWidget } from './components/CartWidget/CartWidget'
import { Cuadrado } from './components/Cartas/Cartas'
import { Children } from 'react'
import { ItemCount } from './components/itemCount/ItemCount'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Grid } from '@mui/material'
import { Item } from './components/Item/Item'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


 const router = createBrowserRouter(createRoutesFromElements(
   <>
     <Route path="/" element={<Home />} />
     <Route path="/item/:id" element={<Detail />} />
   </>
 ))

function App() {
  return (
    <>
      <div className="page">
        <NavBar />
        <CartWidget />
      </div>
     
       <RouterProvider router={router} />
      
     </>
  )
 }

export default App
