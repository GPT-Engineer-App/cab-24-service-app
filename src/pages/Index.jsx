import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <h1 className="text-3xl font-bold">Welcome to CABs 24</h1>
      <p className="text-lg">Your reliable cab service</p>
      <div className="space-x-4">
        <Link to="/join">
          <Button variant="outline">Join as Passenger</Button>
        </Link>
        <Link to="/driver">
          <Button variant="outline">Join as Driver</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;