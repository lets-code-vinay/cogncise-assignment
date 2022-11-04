import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const token = localStorage.getItem("token");
  return token ? <Component {...props} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
