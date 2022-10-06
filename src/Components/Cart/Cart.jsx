import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Cart(props) {
  const [productsFound, setProductsFound] = useState(true);
  const getTotalPrice = () => {
    let total = 0;
    props.products.forEach((p) => {
      total += p.price * p.quantity;
    });
    return total;
  };
  const completeCheckout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, complete checkout!",
    }).then((result) => {
      if (result.isConfirmed && props.products.length > 0) {
        Swal.fire("Completed!", "Your checkout has been completed.", "success");
        localStorage.setItem("cartProducts", JSON.stringify([]));
        props.checkCart();
        props.setCartProductsNum(0);
        setProductsFound(false);
      } else if (props.products.length === 0) {
        Swal.fire("Cancelled", "Your Cart is Empty", "error");
      }
    });
  };
  return (
    <div className="cart-container">
      <div className="sidebar-cart position-absolute end-0 bg-white  py-5 px-4">
        <div className="cart-header">
          <h3 className="text-center secondary-color">Shopping Cart</h3>
          <span onClick={props.changeStatus} className="close-cart">
            <i className="fas fa-window-close fs-2"></i>
          </span>
          <h5 className="my-4 fw-bold">Cart Summary</h5>
          <div className="cart-items">
            {productsFound ? (
              props.products.map((p, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex border border-3 position-relative"
                  >
                    <div className="w-25">
                      <img src={`${p.photo}`} className="w-100 p-1" alt="" />
                    </div>
                    <div className="w-75">
                      <span className="fw-bold d-block">
                        {p.title.slice(0, 50)}
                      </span>
                      <span className="text-muted d-block">{p.price}$</span>
                      <span className="fw-bold d-block">
                        Quantitfy : {p.quantity}
                      </span>
                    </div>
                    <span
                      className="removeItem bg-warning fw-bold d-inline-block rounded-pill position-absolute px-2 py-1 bottom-0 end-0"
                      onClick={() => props.filterProducts(p.id)}
                    >
                      Remove
                    </span>
                  </div>
                );
              })
            ) : (
              <h3 className="text-center">Your Cart is Empty</h3>
            )}
          </div>
          <div className="cart-total">
            <h5 className="fw-bold my-4">Cart Total</h5>
            <span className="fw-bold">Total Price :</span>
            <span className="fw-bold">{getTotalPrice()}$</span>
            <div className="cart d-flex my-3">
              <button
                onClick={completeCheckout}
                className="btn btn-secondary rounded-pill py-2 px-2 fw-bold me-2"
              >
                Complete Checkout
              </button>
              <button className="btn btn-secondary rounded-pill py-2 px-3 fw-bold">
                Review Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
