import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validationOnTyping = (e) => {
    let input = e.target;
    let value = input.value;
    let parent = input.parentElement;
    let error = parent.querySelector(".error");
    // let success = parent.querySelector(".success");
    let inputName = e.target.id;
    let regEx;
    switch (inputName) {
      case "email":
        regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        break;
      case "password":
        regEx = /^([a-zA-Z0-9@*#]{8,30})$/;
        break;
      default:
    }
    if (regEx.test(value)) {
      //   success.classList.add("d-block");
      error.classList.remove("d-block");
    } else {
      //   success.classList.remove("d-block");
      error.classList.add("d-block");
    }
  };

  const validationOnSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    let noerrors = true;
    let inputs = document.querySelectorAll("input");
    let errors = document.querySelectorAll(".error");
    // let success = document.querySelectorAll(".success");
    // let form = document.querySelector("form");
    let regEx;
    let value;
    let inputName;
    for (let i = 0; i < inputs.length; i++) {
      value = inputs[i].value;
      inputName = inputs[i].id;
      switch (inputName) {
        case "email":
          regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
          break;
        case "password":
          regEx = /^([a-zA-Z0-9@*#]{8,30})$/;
          break;

        default:
      }
      if (regEx.test(value)) {
        errors[i].classList.remove("d-block");
        // success[i].classList.add("d-block");
      } else {
        errors[i].classList.add("d-block");
        // success[i].classList.remove("d-block");
        noerrors = false;
      }
    }
    if (noerrors) {
      postData(data);
      //   form.submit();
    }
  };
  const postData = async (userData) => {
    setLoading(true);
    const { data } = await axios.post(
      "https://api.escuelajs.co/api/v1/users/is-available",
      userData
    );
    if (!data.isAvailable) {
      await axios
        .post("https://api.escuelajs.co/api/v1/auth/login", userData)
        .then((res) => {
          //   console.log(res.data.access_token);
          localStorage.setItem("token", res.data.access_token);
          props.setLoggedIn(true);
          navigate("/home");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Password is Not Correct!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Email is Not Registered!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    setLoading(false);
  };
  return (
    <div className="container p-5 border my-4 rounded">
      <h1 className="secondary-color">Login</h1>
      <form onSubmit={validationOnSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={validationOnTyping}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div className="error">email must be for ex : email@example.com</div>
          <div className="success">success</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={validationOnTyping}
            type="password"
            className="form-control"
            id="password"
          />
          <div className="error">
            password must be between 8 to 30 characters
          </div>
          <div className="success">success</div>
        </div>

        <button type="submit" className="btn btn-secondary mt-3">
          {loading ? (
            <i className="fa-solid fa-spinner fa-spin"></i>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
}
