import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if (data && data.statusCode === 401) {
      return props.logOut();
    } else {
      setUserData(data);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="container p-5">
      <div className="d-flex profile-container">
        <div className="w-30">
          <div className="profile-img">
            <div className="img-container mb-3">
              <img src={userData.avatar} alt="profile" />
            </div>
            <h3 className="text-white mb-3">John Doe</h3>
            <h5 className="text-white">Customer</h5>
          </div>
        </div>
        <div className="w-70">
          <div className="profile-details">
            <h2 className="border-bottom">Personal Information</h2>
            <div className="content-box">
              <div className="d-flex">
                <span className="title">Name: </span>
                <span className="info">{userData.name}</span>
              </div>
              <div className="d-flex">
                <span className="title">Email: </span>
                <span className="info">{userData.email}</span>
              </div>
              <div className="d-flex">
                <span className="title">Password: </span>
                <span className="info">{userData.password}</span>
              </div>
              <div className="d-flex">
                <span className="title">Role: </span>
                <span className="info">{userData.role}</span>
              </div>
              <div className="d-flex">
                <span className="me-3 secondary-color">
                  <i className="fab fa-facebook fs-4"></i>
                </span>
                <span className="me-3 secondary-color">
                  <i className="fab fa-twitter fs-4"></i>
                </span>
                <span className="me-3 secondary-color">
                  <i className="fab fa-instagram fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
