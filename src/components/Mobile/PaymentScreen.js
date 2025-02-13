import React, { useState } from 'react';
import { Container, Typography, Button, Select, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentScreen = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');
  const [error, setError] = useState('');
  const rideId = 'ride_1234';
  const fare = 20.00;

  const processPayment = () => {
    if (method === 'card' && fare > 1000) {
      setError('Card Declined – Please try another card.');
    } else {
      navigate('/home');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Payment</Typography>
        <Typography>Ride ID: {rideId}</Typography>
        <Typography>Fare: ${fare.toFixed(2)}</Typography>
        <Select value={method} onChange={e => setMethod(e.target.value)} fullWidth sx={{ mt: 2 }}>
          <MenuItem value="card">Card</MenuItem>
          <MenuItem value="wallet">Wallet</MenuItem>
          <MenuItem value="cash">Cash</MenuItem>
        </Select>
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={processPayment}>Pay Now</Button>
      </Box>
    </Container>
  );
};

export default PaymentScreen;
