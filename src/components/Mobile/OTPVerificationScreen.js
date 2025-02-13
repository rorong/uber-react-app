import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';

const OTPVerificationScreen = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      if (otp === '123456') {
        navigate('/home');
      } else {
        setError('Incorrect OTP. Please try again.');
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Verify Phone</Typography>
        <Typography>Enter the 6-digit OTP sent to your phone</Typography>
        <TextField fullWidth margin="normal" label="OTP" inputProps={{ maxLength: 6 }} onChange={e => setOtp(e.target.value)} />
        {error && <Typography color="error">{error}</Typography>}
        {isLoading ? <CircularProgress /> : <Button variant="contained" onClick={verifyOtp} fullWidth sx={{ mt: 2 }}>Verify</Button>}
        <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', color: 'blue' }} onClick={() => alert('Resend OTP logic')}>
          Resend OTP
        </Typography>
      </Box>
    </Container>
  );
};

export default OTPVerificationScreen;
