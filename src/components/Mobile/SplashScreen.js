import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, CircularProgress, Box } from '@mui/material';

const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate('/login'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3">[Company Logo]</Typography>
      <Typography variant="h5">Your ride, your way</Typography>
      <CircularProgress sx={{ mt: 2 }} />
      <Typography variant="caption">Loading… Please wait | Secure: Data transmitted via AES-256</Typography>
    </Box>
  );
};

export default SplashScreen;
