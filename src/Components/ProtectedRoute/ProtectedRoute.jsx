import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  try {
    const decodedToken = token && jwtDecode(token);
    if (decodedToken) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    return <Navigate to="/login" />;
  }
}
