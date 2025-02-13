import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Welcome, John Doe</Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={() => navigate('/rideBooking')}>Book a Ride</Button>
          <Button variant="outlined" fullWidth sx={{ mb: 2 }} onClick={() => navigate('/profile')}>Profile</Button>
          <Button variant="outlined" fullWidth onClick={() => navigate('/paymentReport')}>Payment Report</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeScreen;
