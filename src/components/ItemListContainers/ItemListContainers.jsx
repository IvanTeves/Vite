import { Item } from "../Item/Item";
import { Grid } from "@mui/material";
import '../Item/Item.css'

export const ItemListContainer =({products,greeting}) =>{
return (

<div className="items" key={products.key}>
    {/* <h1 className="letra">{greeting} </h1> */}

    {products.map((product)=>(

    <div >
      
       

          <Item id={product.id} key={product.id} category={product.category} price={product.price} img={product.img} stock={products.stock}/>  
        
    </div>
  
    ))}


</div>

)};
