import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const getProduct = async () => {
    const { data } = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    setProduct(data);
  };
  const changeQuantity = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };
  const nextImage = (e) => {
    e.preventDefault();
    if (currentImage < product.images.length - 1) {
      setCurrentImage(parseInt(currentImage) + 1);
    } else {
      setCurrentImage(0);
    }
  };
  const prevImage = (e) => {
    e.preventDefault();
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(product.images.length - 1);
    }
  };

  const changePhoto = (e) => {
    setCurrentImage(e.target.dataset.index);
  };

  const sendproduct = (e) => {
    e.preventDefault();
    const productToSend = {
      id: "",
      title: "",
      photo: "",
      quantity: "",
      price: "",
    };
    productToSend.id = product.id;
    productToSend.title = product.title;
    productToSend.quantity = quantity;
    productToSend.photo = product.images[0];
    productToSend.price = product.price;
    if (quantity && quantity > 0) {
      props.addProduct(productToSend);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please Type Quantity You Want To Buy!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container product-info">
      <div className="row">
        <div className="col-md-6">
          <div className="product-img">
            <img src={product.images && product.images[currentImage]} alt="" />
            <div className="w-100 d-flex justify-content-between mt-4">
              <Link className="d-flex align-items-center">
                <i
                  onClick={prevImage}
                  className="fa-solid fa-circle-left fs-2 secondary-color"
                ></i>
              </Link>
              {product.images &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    data-index={index}
                    onClick={changePhoto}
                    className="w-25"
                    src={product.images && product.images[index]}
                    alt=""
                  />
                ))}
              <Link className="d-flex align-items-center">
                <i
                  onClick={nextImage}
                  className="fa-solid fa-circle-right fs-2 secondary-color"
                ></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <h3 className="mb-4">{product.title}</h3>
            <p>
              <span className="type">Description: </span>
              <span>{product.description}</span>
            </p>
            <p>
              <span className="type">Category: </span>
              <span>{product.category && product.category.name}</span>
            </p>
            <p className="mt-4">
              <span className="fw-bold fs-3">{product.price}$</span>
            </p>

            <div className="quantity my-2">
              <h5 className="fw-bold my-3">Quantity</h5>
              <div className="quantity_total d-flex justify-content-between">
                <div className="d-flex">
                  <button
                    onClick={changeQuantity}
                    name="decrease"
                    className="btn btn-secondary fw-bold"
                  >
                    -
                  </button>
                  <input
                    onChange={(e) =>
                      setQuantity(parseInt(e.target.value ? e.target.value : 0))
                    }
                    className="form-control text-center w-101"
                    value={quantity}
                  />

                  <button
                    onClick={changeQuantity}
                    name="increase"
                    className="btn btn-secondary fw-bold"
                  >
                    +
                  </button>
                </div>
                <div>
                  <span className="fw-bold my-3 fs-5">
                    Total: {product.price * quantity}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex mt-4">
            <button onClick={sendproduct} className="btn btn-secondary me-3">
              Add to cart
            </button>
            <button className="btn btn-secondary mx-4">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
