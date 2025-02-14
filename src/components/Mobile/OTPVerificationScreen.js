import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import { apiVerifyOTP } from '../../api/api';

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
    try {
      await apiVerifyOTP(otp);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Verify Phone</Typography>
        <Typography>Enter the 6-digit OTP sent to your phone</Typography>
        <TextField fullWidth margin="normal" label="OTP" inputProps={{ maxLength: 6 }} onChange={e => setOtp(e.target.value)} />
        {error && <Typography color="error">{error}</Typography>}
        {isLoading ? <CircularProgress /> : <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={verifyOtp}>Verify</Button>}
        <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', color: 'blue' }} onClick={() => alert('Resend OTP logic')}>
          Resend OTP
        </Typography>
      </Box>
    </Container>
  );
};

export default OTPVerificationScreen;
