"use client";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = () => {
  useEffect(() => {
    toast(
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images.jpg"
          alt="SMS notification"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <div>Welcome to Coffee For You!</div>
      </div>
    );
  }, []);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default CustomToast;
