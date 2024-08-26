"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage/page"; // Adjust the import path as needed
import CustomToast from "./components/cutom"; // Adjust the import path as needed
import Phone from "./components/phone"; // Adjust the import path as needed

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Check if it's the user's first visit
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // If not visited before, show the toast
      setShowToast(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <>
      <LandingPage />
      {showToast && <CustomToast />}
      <div className="flex flex-col items-center justify-center p-2 pb-20">
        <div>
          <h2 className="text-4xl text-white py-7">Story of the day</h2>
        </div>
        <Phone />
      </div>
    </>
  );
}
