import React, { useState } from "react";
import { TextField, Button, ToggleButton, ToggleButtonGroup, MenuItem, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const FormSession = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [sessionMode, setSessionMode] = useState("online");
  const [otpSent, setOtpSent] = useState(false);

  const handleSessionChange = (event, newMode) => {
    if (newMode) setSessionMode(newMode);
  };

  const sendOTP = async (mobileNumber) => {
    if (!mobileNumber) {
      alert("Please enter a valid mobile number");
      return;
    }
    try {
      await axios.post("http://localhost:5173/api/send-otp", { mobile: mobileNumber });
      setOtpSent(true);
      alert("OTP sent successfully!");
    } catch (error) {
      alert("Failed to send OTP");
    }
  };

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2, textAlign: "center", boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h5" fontWeight="bold">Book Your Free Session</Typography>
      <Typography variant="body2" color="gray">Learn from India's best teachers</Typography>

      {/* Session Mode Selection */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Select the Session Mode</Typography>
      <ToggleButtonGroup value={sessionMode} exclusive onChange={handleSessionChange} fullWidth>
        <ToggleButton value="online">Online</ToggleButton>
        <ToggleButton value="offline">Offline</ToggleButton>
      </ToggleButtonGroup>

      {/* Form Fields */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Child Name */}
        <Controller
          name="childName"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => <TextField {...field} label="Enter Name of your Child" fullWidth required margin="normal" />}
        />

        {/* Mobile Number + OTP */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Controller
            name="mobile"
            control={control}
            rules={{ required: "Mobile number is required" }}
            render={({ field }) => <TextField {...field} label="Enter Mobile Number" fullWidth required />}
          />
          <Button variant="contained" color="primary" onClick={() => sendOTP()} sx={{ minWidth: 120 }}>
            {otpSent ? "Resend OTP" : "Send OTP"}
          </Button>
        </Box>

        {/* Email Address */}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => <TextField {...field} label="Email Address" fullWidth required margin="normal" />}
        />

        {/* State Dropdown */}
        <Controller
          name="state"
          control={control}
          rules={{ required: "State is required" }}
          render={({ field }) => (
            <TextField {...field} select label="State" fullWidth required margin="normal">
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <MenuItem value="Karnataka">Karnataka</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
            </TextField>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, background: "linear-gradient(to right, #FF512F, #DD2476)" }}>
          Continue to Schedule
        </Button>
      </form>
    </Box>
  );
};

export default FormSession;