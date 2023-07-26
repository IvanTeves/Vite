import React from 'react';

export const Item = ({ id, title, category, price, img, stock }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{category}</p>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <span className="card-text">{stock}</span>
        <span className="card-text">{price}</span>
        <a href="#" className="btn btn-primary">Detalles</a>
      </div>
    </div>
  );
};