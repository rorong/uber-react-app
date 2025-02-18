import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRide } from '../../contexts/RideContext';
import { apiCancelRide } from '../../api/api';

const RideTrackingScreen = () => {
  const navigate = useNavigate();
  const { ride, resetRide } = useRide();
  const [driverLocation, setDriverLocation] = useState('37.773972, -122.431297');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDriverLocation('37.7750, -122.4240'), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCancelRide = async () => {
    try {
      await apiCancelRide(ride.rideId);
      resetRide();
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Ride Tracking</Typography>
        <Typography>Live map view would be here (with real-time updates)</Typography>
        <Typography>Driver Location: {driverLocation}</Typography>
        <Typography>Driver: John Doe | Car: Toyota Camry</Typography>
        <Typography>ETA: 5 min | Fare: $20.00</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleCancelRide}>
          Cancel Ride
        </Button>
      </Box>
    </Container>
  );
};

export default RideTrackingScreen;
