import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Driver = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <h1 className="text-3xl font-bold">Join as Driver</h1>
      <p className="text-lg">Please verify your phone number to continue</p>
      <Link to="/otp">
        <Button variant="outline">Verify Phone Number</Button>
      </Link>
    </div>
  );
};

export default Driver;