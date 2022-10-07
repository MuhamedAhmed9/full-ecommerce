import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import { useState, useEffect, createContext } from "react";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProtectedLogin from "./Components/ProtectedLogin/ProtectedLogin";

export let StoreContext = createContext(0);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);
  const [cartProductsNum, setCartProductsNum] = useState(0);
  const addProduct = (product) => {
    let products = [...cartProducts];
    let storedProduct = products.find((p) => p.id === product.id);
    if (storedProduct) {
      storedProduct.quantity += product.quantity;
      localStorage.setItem("cartProducts", JSON.stringify(products));
      setCartProducts(products);
    } else {
      products.push(product);
      localStorage.setItem("cartProducts", JSON.stringify(products));
      setCartProducts(products);
    }
    updatingProductsNum(products.length);
  };

  const checkCart = () => {
    if (localStorage.getItem("cartProducts")) {
      let products = JSON.parse(localStorage.getItem("cartProducts"));
      setCartProducts(products);
      updatingProductsNum(products.length);
    }
  };

  const updatingProductsNum = (num) => {
    setCartProductsNum(num);
  };

  const changeStatus = (e) => {
    e.preventDefault();
    setCartStatus(!cartStatus);
  };

  const filterProducts = (id) => {
    let products = [...cartProducts];
    let filteredProducts = products.filter((p) => p.id !== id);
    setCartProducts(filteredProducts);
    localStorage.setItem("cartProducts", JSON.stringify(filteredProducts));
    checkCart();
  };

  const checkUser = () => {
    let token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkCart();
    checkUser();
  }, []);

  return (
    <div className="main">
      <StoreContext.Provider value={{ user, setUser }}>
        <Navbar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          cartProductsNum={cartProductsNum}
          changeStatus={changeStatus}
        />
      </StoreContext.Provider>
      {cartStatus && (
        <Cart
          checkCart={checkCart}
          filterProducts={filterProducts}
          products={cartProducts}
          setCartProductsNum={setCartProductsNum}
          changeStatus={changeStatus}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <StoreContext.Provider value={{ user, setUser }}>
                <Home />
              </StoreContext.Provider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <StoreContext.Provider value={{ user, setUser }}>
                <Home />
              </StoreContext.Provider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedLogin>
              <Register />
            </ProtectedLogin>
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedLogin>
              <Login setLoggedIn={setLoggedIn} />
            </ProtectedLogin>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails addProduct={addProduct} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={"not found 404"} />
      </Routes>
    </div>
  );
}

export default App;
