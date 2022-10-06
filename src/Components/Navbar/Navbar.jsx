import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "./../../App";

export default function Navbar(props) {
  const { user } = useContext(StoreContext);
  const navigate = useNavigate();
  const dropdownClick = (e) => {
    e.preventDefault();
    document.querySelector(".dropdown").classList.toggle("d-block");
  };
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setLoggedIn(false);
    return navigate("/login");
  };
  const closeDropDown = (e) => {
    e.preventDefault();
    document.querySelector(".dropdown").classList.remove("d-block");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand secondary-color" to={"/"}>
          <i className="fa-sharp fa-solid fa-shop mx-1 fs-3"></i>
          <span className="fs-3">Egoan</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {props.loggedIn ? (
              <li className="nav-item position-relative">
                <Link
                  onClick={props.changeStatus}
                  className="nav-link active"
                  aria-current="page"
                >
                  <i className="fa-sharp fa-solid fa-cart-arrow-down fs-4"></i>
                  <span className="c-badge">{props.cartProductsNum}</span>
                </Link>
              </li>
            ) : null}
            {props.loggedIn ? (
              <li className="nav-item parent-dropdown-item position-relative">
                <i
                  onClick={dropdownClick}
                  className="fa-solid fa-user-large fs-4 p-2"
                ></i>
                <ul className="list-unstyled dropdown">
                  <li onClick={closeDropDown}>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link onClick={logOut}>Logout</Link>
                  </li>
                </ul>
              </li>
            ) : null}
            {props.loggedIn ? (
              <li className="signedUser">
                <span className="fw-bold">Hello, {user && user.name}</span>
              </li>
            ) : null}
            {!props.loggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
