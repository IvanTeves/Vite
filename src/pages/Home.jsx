import { useState, useEffect } from "react";
import {getBooks} from "../lib/books.requests"
import { ItemListContainer } from "../components/ItemListContainers/ItemListContainers";
import { Grid } from "@mui/material";
export const Home = () => {
    const [products,setProducts] = useState([]) ;

    useEffect(()=>{
        getBooks()
         .then (res => setProducts(res))
    }, []);
    
    useEffect(()=>{
      console.log(products)
    }, [products]);


    return (
        <div>
            Pagina Principal
            <Grid container spacing={0.5}>
            <div>
                    
                                 <ItemListContainer products= {products} greeting={"hola"}/>
                   
            </div>
            </Grid>



        </div>
    )}