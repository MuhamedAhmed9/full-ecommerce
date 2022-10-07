import "./App.css";
import { useState, useEffect, createContext, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProtectedLogin from "./Components/ProtectedLogin/ProtectedLogin";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
// import Navbar from "./Components/Navbar/Navbar";
const Home = lazy(() => import("./Components/Home/Home"));
// import Home from "./Components/Home/Home";
const Profile = lazy(() => import("./Components/Profile/Profile"));
// import Profile from "./Components/Profile/Profile";
const ProductDetails = lazy(() =>
  import("./Components/ProductDetails/ProductDetails")
);
// import ProductDetails from "./Components/ProductDetails/ProductDetails";
const Cart = lazy(() => import("./Components/Cart/Cart"));
// import Cart from "./Components/Cart/Cart";
const Register = lazy(() => import("./Components/Register/Register"));
// import Register from "./Components/Register/Register";
const Login = lazy(() => import("./Components/Login/Login"));
// import Login from "./Components/Login/Login";

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
    <Suspense
      fallback={
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      }
    >
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
        <Suspense
          fallback={
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          }
        >
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
        </Suspense>
      </div>
    </Suspense>
  );
}

export default App;
