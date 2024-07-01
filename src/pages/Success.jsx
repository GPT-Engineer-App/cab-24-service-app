import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <h1 className="text-3xl font-bold">Success</h1>
      <p className="text-lg">Your phone number has been verified successfully!</p>
      <Link to="/">
        <Button variant="outline">Go to Home</Button>
      </Link>
    </div>
  );
};

export default Success;