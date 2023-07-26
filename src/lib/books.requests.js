const BOOKS = [
    {
        id: 1,
        title: "Los tres mosqueteros",
        category: "Aventura",
        price: 550,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ba/6a/ba6aa7885fba12057064610475c9bd41.jpg",
        stock: 10,
    },
    {
        id: 2,
        title: "El conde de montecristo",
        category: "Aventura",
        price: 805,
        img: "https://imagessl4.casadellibro.com/a/l/t5/64/9788497408264.jpg",
        stock: 10,
    },
    {
        id: 3,
        title: "El exorcista",
        category: "Terror",
        price: 299,
        stock: 5,
        img: "https://resources.claroshop.com/imagenes-sanborns-ii/1200/9786073178228.jpg",
    },
    {
        id: 4,
        title: "El señor de los anillos",
        category: "Fantasia",
        price: 450,
        img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
        stock: 6,
    }
];

export const getBooks = () => {
    return new Promise ((res)=>{
        setTimeout(()=>{res(BOOKS)},2000)
    }
    )

}


