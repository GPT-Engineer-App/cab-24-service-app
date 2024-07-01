import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const JoinActivity = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <h1 className="text-3xl font-bold">Join CABs 24</h1>
      <div className="w-full max-w-md space-y-4">
        <div>
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" className="w-full" />
        </div>
        <Button variant="outline" className="w-full">
          Sign in with Google
        </Button>
        <div className="flex items-center space-x-2">
          <Label htmlFor="join">Join</Label>
          <Switch id="join" />
        </div>
      </div>
    </div>
  );
};

export default JoinActivity;