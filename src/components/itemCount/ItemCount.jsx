import { useState, useEffect } from "react";

export const ItemCount = ({stock,onAdd}) => {
    const [count, setCount] = useState(0) 
    const handleSum = () => {
        if(stock>count) 
        setCount( count +1 )
    }

    const handleRes = () => {
        if(count>1) 
        setCount( count -1 )
    }


    

    return (
        <div>
            <button onClick={()=>(handleRes ())}> - </button>
            <span style={{color:"black"}}>{count}</span> 
            <button onClick={()=>(handleSum ())}> + </button> 
            <button disabled={!stock} onClick={()=>onAdd(count)}>Agregar a carrito</button>
        </div>
    
    
    )
}