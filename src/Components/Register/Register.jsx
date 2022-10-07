import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Register() {
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
      case "name":
        regEx = /^[a-zA-Z0-9]{5,25}$/;
        break;
      case "email":
        regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        break;
      case "password":
        regEx = /^([a-zA-Z0-9@*#]{8,30})$/;
        break;
      case "confirmPassword":
        regEx = /^([a-zA-Z0-9@*#]{8,30})$/;
        break;
      case "avatar":
        regEx = /https?:\/\/.*\.(?:jpg|jpeg|png|webp|avif|gif|svg)/;
        break;
      default:
    }
    if (regEx.test(value)) {
      if (inputName === "confirmPassword") {
        let password = document.querySelector("#password");
        if (password.value === value) {
          error.classList.remove("d-block");
        } else {
          error.classList.add("d-block");
        }
      } else {
        //   success.classList.add("d-block");
        error.classList.remove("d-block");
      }
    } else {
      //   success.classList.remove("d-block");
      error.classList.add("d-block");
    }
  };

  const validationOnSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      avatar: document.querySelector("#avatar").value,
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
        case "name":
          regEx = /^[a-zA-Z0-9]{5,25}$/;
          break;
        case "email":
          regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
          break;
        case "password":
          regEx = /^([a-zA-Z0-9@*#]{8,30})$/;
          break;
        case "confirmPassword":
          regEx = /^([a-zA-Z0-9@*#]{8,30})$/;
          break;
        case "avatar":
          regEx = /https?:\/\/.*\.(?:jpg|jpeg|png|webp|avif|gif|svg)/;
          break;
        default:
      }
      if (regEx.test(value)) {
        if (inputName === "confirmPassword") {
          if (value === inputs[2].value) {
            errors[i].classList.remove("d-block");
          } else {
            errors[i].classList.add("d-block");
            noerrors = false;
          }
        } else {
          errors[i].classList.remove("d-block");
        }
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
    if (data.isAvailable) {
      await axios.post("https://api.escuelajs.co/api/v1/users/", userData);
      // console.log(response);
      navigate("/login");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Email is Already Registered!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    setLoading(false);
  };
  return (
    <div className="container p-5 border my-4 rounded">
      <h1 className="secondary-color">Register</h1>
      <form onSubmit={validationOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={validationOnTyping}
            type="text"
            className="form-control"
            id="name"
          />
          <div className="error">name must be between 5 to 25 character</div>
          <div className="success">success</div>
        </div>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            onChange={validationOnTyping}
            type="password"
            className="form-control"
            id="confirmPassword"
          />
          <div className="error">
            password confirmation must be the same as password input
          </div>
          <div className="success">success</div>
        </div>
        <div className="avatar">
          <label htmlFor="avatar" className="form-label">
            Profile Image Link
          </label>
          <input
            type="text"
            className="form-control"
            id="avatar"
            onChange={validationOnTyping}
          />
          <div className="error">
            profile image url must be like https://www.site.com/photo.jpg
          </div>
          <div className="success">success</div>
        </div>
        <button type="submit" className="btn btn-secondary mt-3">
          {loading ? (
            <i className="fa-solid fa-spinner fa-spin"></i>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
}
