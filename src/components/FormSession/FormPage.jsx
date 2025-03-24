import React, { useState } from "react";
import { Button, TextField, MenuItem, ToggleButton, ToggleButtonGroup, Box, Typography } from "@mui/material";

const FormPage = () => {
  const [sessionMode, setSessionMode] = useState("online");
  const [formData, setFormData] = useState({
    childName: "",
    mobileNumber: "",
    email: "",
    state: "",
  });

  const handleSessionChange = (event, newMode) => {
    if (newMode !== null) setSessionMode(newMode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOTP = () => {
    alert("OTP Sent to " + formData.mobileNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted: " + JSON.stringify(formData));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 2, textAlign: "center" }}>
      <Typography variant="h5" fontWeight="bold">
        Book your Free Session
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Learn from India's best teachers
      </Typography>

      {/* Session Mode Selection */}
      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
        Select the Session Mode
      </Typography>
      <ToggleButtonGroup
        value={sessionMode}
        exclusive
        onChange={handleSessionChange}
        sx={{ mt: 1, mb: 2 }}
      >
        <ToggleButton value="online">Online</ToggleButton>
        <ToggleButton value="offline">Offline</ToggleButton>
      </ToggleButtonGroup>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Enter Name of your Child"
          name="childName"
          value={formData.childName}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            fullWidth
            label="Enter your Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <Button variant="contained" color="primary" onClick={handleOTP}>
            Send OTP
          </Button>
        </Box>
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ my: 2 }}
        />
        <TextField
          fullWidth
          select
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Bangalore">Bangalore</MenuItem>
        </TextField>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            background: "linear-gradient(to right, #FF5733, #FF8C00)",
            color: "#fff",
          }}
        >
          Continue to Schedule
        </Button>
      </form>
    </Box>
  );
};

export default FormPage;