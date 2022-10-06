import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="product col-md-3">
      <div className="product-item h-100">
        <div className="product-img">
          <img src={props.product.images[0]} alt="" className="w-100" />
          <span>{props.product.category.name}</span>
        </div>
        <div className="product-info">
          <h5 className="fw-bold title">{props.product.title.slice(0, 30)}</h5>
          <div className="add d-flex justify-content-between">
            <p className="fw-bold">
              <span className="d-block">Price:</span>$ {props.product.price}
            </p>
            <Link to={`/product/${props.product.id}`}>
              <button className="btn">Get It</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
