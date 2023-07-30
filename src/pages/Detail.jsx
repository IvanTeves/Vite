import { useEffect, useState } from "react";
import { ItemCount } from "../components/itemCount/ItemCount";
import { getBook } from "../lib/books.requests";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const {id}=useParams();
  const [books, setBooks] = useState([]); 
 
  useEffect(() => {
    getBook(+id)
      .then((res) => setBooks(res))
      .catch((error) => console.log(error)); 
  }, []);
  console.log(books)


  
  return (
    <div className="Detalles_Card">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={books.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{books.title}</h5>
              <p className="card-text">{books.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">{books.price}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Quedan solo {books.stock}!!
                </small>
              </p>
            </div>
          </div>
        </div>
        <ItemCount stock={books.stock} />
      </div>
    </div>
  );
};
