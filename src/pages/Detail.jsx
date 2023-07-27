import { useEffect, useState } from "react";
import { ItemCount } from "../components/itemCount/ItemCount";
import { getBooks } from "../lib/books.requests";

export const Detail = () => {
  const [books, setBooks] = useState([]); 

  useEffect(() => {
    getBooks()
      .then((res) => setBooks(res))
      .catch((error) => console.log(error)); 
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  if (books.length === 0) {
 
    return <p>Cargando libros...</p>;
  }

 
  const book = books[0];

  return (
    <div className="Detalles_Card">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={book.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">{book.price}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Quedan solo {book.stock}!!
                </small>
              </p>
            </div>
          </div>
        </div>
        <ItemCount stock={book.stock} />
      </div>
    </div>
  );
};
