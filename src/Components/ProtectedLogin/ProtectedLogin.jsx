import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function ProtectedLogin({ children }) {
  const token = localStorage.getItem("token");
  try {
    const decodedToken = token && jwtDecode(token);
    if (decodedToken) {
      return <Navigate to="/home" />;
    } else {
      return children;
    }
  } catch (error) {
    return children;
  }
}
