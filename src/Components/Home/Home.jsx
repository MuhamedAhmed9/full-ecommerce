import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "./../Product/Product";
import { Link } from "react-router-dom";
import { StoreContext } from "./../../App";
import jwtDecode from "jwt-decode";

export default function Home() {
  const { setUser } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsNumForPage, setProductsNumForPage] = useState(21);
  const defaultNumOfPages = 10;
  const [numOfPages, setNumOfPages] = useState(defaultNumOfPages);
  const specifyNumOfPages = (numOfProducts, numOfPages) => {
    if (numOfPages <= 0) {
      setProductsNumForPage(Math.ceil(numOfProducts / 1));
      return setNumOfPages(1);
    }
    if (numOfProducts / numOfPages >= 10) {
      //10 == 10 products per page
      setProductsNumForPage(Math.ceil(numOfProducts / numOfPages));
      return setNumOfPages(numOfPages);
    } else {
      return specifyNumOfPages(numOfProducts, Math.floor(numOfPages / 2));
    }
  };
  const fetchCategories = async () => {
    const { data } = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    setCategories(data);
  };
  const fetchCategoryProducts = async (cateId) => {
    setLoading(true);
    if (cateId) {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${cateId}/products`
      );
      setAllProducts(data);
      setTotalProducts(data);
      setLoading(false);
    } else {
      getAllProducts();
    }
  };
  const filterCategory = () => {
    const cateId =
      document.querySelector(".cate-select").selectedOptions[0].dataset.id;
    fetchCategoryProducts(cateId);
    // console.log(target.selectedOptions[0].value);
    // console.log(target.selectedOptions[0].dataset.id);
  };
  const getAllProducts = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    setAllProducts(data);
    setTotalProducts(data);
    setLoading(false);
  };
  const filterPrice = async () => {
    setLoading(true);
    const minPrice = document.getElementById("minPrice").value || 0;
    const maxPrice = document.getElementById("maxPrice").value || 1000000;
    const filteredProducts = totalProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setAllProducts(filteredProducts);
    setLoading(false);
  };
  const FilterName = async () => {
    setLoading(true);
    const name = document.getElementById("searchName").value;
    const filteredProducts = totalProducts.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );
    if (filteredProducts.length > 0) {
      setAllProducts(filteredProducts);
    } else {
      setProducts("");
    }
    setLoading(false);
  };
  const resetFitlers = () => {
    document.querySelector(".cate-select").selectedIndex = 0;
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    getAllProducts();
  };
  const fetchUser = async () => {
    const fetchUser = async (id) => {
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/users/"
      );
      setUser(data[id - 1]);
    };
    let token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      fetchUser(decodedToken.sub);
    }
  };
  //componentDidMount
  useEffect(() => {
    fetchCategories();
    getAllProducts();
    fetchUser();
  }, []);
  //componentDidUpdate for products
  useEffect(() => {
    if (allProducts.length > 0) {
      specifyNumOfPages(allProducts.length, defaultNumOfPages);
      setProducts(allProducts.slice(0, productsNumForPage));
    }
  }, [allProducts]);
  return (
    // <!-- start sidebar section -->
    <div className="home d-flex position-relative">
      <div className="sidebar">
        <div className="categories">
          <h3>Categories</h3>
          <select className="btn bg-white cate-select">
            <option value="all">all</option>
            {categories &&
              categories.map((category) => {
                return (
                  <option
                    data-id={category.id}
                    key={category.id}
                    value={category.name}
                  >
                    {category.name.slice(0, 20)}
                  </option>
                );
              })}
          </select>

          <button
            onClick={filterCategory}
            className="btn btn-secondary w-100 my-3"
          >
            Filter
          </button>
        </div>
        <div className="price">
          <h3>Price</h3>
          <div className="d-flex">
            <span className="flex-basis fw-bold">min</span>
            <span className="flex-basis fw-bold">max</span>
          </div>
          <div className="priceRange d-flex">
            <input id="minPrice" type="number" className="form-control mx-1" />
            <input id="maxPrice" type="number" className="form-control mx-1" />
          </div>
          <button
            onClick={filterPrice}
            className="btn btn-secondary w-100 my-3"
          >
            Set Price
          </button>
        </div>
        <div className="reset text-center py-3">
          <button onClick={resetFitlers} className="btn btn-danger">
            Reset Filters
          </button>
        </div>
      </div>
      {/* <!-- end products section --> */}
      <div className="products-section">
        <input
          onChange={FilterName}
          id="searchName"
          className="form-control"
          type="text"
          name=""
          placeholder="&#xf002; Search"
        />
        <div className="products-container container">
          <div className="row gy-2 justify-content-center">
            {!loading ? (
              products &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <div className="spinner loader">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            )}
          </div>
        </div>
        <nav aria-label="..." className="d-flex">
          <ul className="pagination mb-0 mx-auto">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            {new Array(numOfPages).fill(1).map((array, index) => {
              return (
                <li
                  key={index}
                  className="page-item"
                  onClick={() =>
                    setProducts(
                      allProducts.slice(
                        index * productsNumForPage,
                        (index + 1) * productsNumForPage
                      )
                    )
                  }
                >
                  <span className="page-link">{index + 1}</span>
                </li>
              );
            })}
            <li className="page-item">
              <Link className="page-link">Next</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
