import React from 'react';
import { Detail } from '../../pages/Detail';
import { Navigate, useNavigate } from 'react-router-dom';
export const Item = ({ id, title, category, price, img, stock }) => {
  const navigate= useNavigate()

  return (
    <div className="card tarjeta" style={{ width: '14rem' }} onClick={()=> navigate(`/item/${id}`)}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{category}</p>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <span className="card-text">{stock}</span>
        <span className="card-text">{price}</span>
        <a onClick={<Detail/> } className="btn btn-primary">Detalles</a>
      </div>
    </div>
  );
};