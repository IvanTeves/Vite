

export const Cuadrado = ({color,size,clic}) => 
    <div 
        onClick={clic}            
        style={{  
        background: color,
        width: size,
        height: size
    }

    }
    />