import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";

const OTPActivity = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOTPChange = (value) => {
    setOtp(value);
  };

  const handleVerifyOTP = () => {
    if (otp === "123456") {
      toast.success("OTP Verified Successfully!");
      navigate("/success");
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const handleGenerateNewOTP = () => {
    toast("New OTP has been sent to your phone.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <h1 className="text-3xl font-bold">OTP Verification</h1>
      <InputOTP maxLength={6} onChange={handleOTPChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button variant="outline" onClick={handleVerifyOTP}>
        Verify OTP
      </Button>
      <Button variant="outline" onClick={handleGenerateNewOTP}>
        Generate New OTP
      </Button>
      <Button variant="outline" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default OTPActivity;