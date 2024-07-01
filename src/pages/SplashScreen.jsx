import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/join");
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <h1 className="text-5xl font-bold text-white">CABs 24</h1>
    </div>
  );
};

export default SplashScreen;