import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { apiBookRide } from '../../api/api';

const RideBookingScreen = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [error, setError] = useState('');
  const [advancedOptions, setAdvancedOptions] = useState({
    quietRide: false,
    petFriendly: false,
    femaleDriver: false
  });

  const confirmRide = async () => {
    if (!pickup || !dropoff) {
      setError('Both pickup and dropoff addresses are required.');
      return;
    }
    try {
      const rideData = { pickupLocation: pickup, dropoffLocation: dropoff, scheduledAt: scheduledTime, advancedOptions };
      await apiBookRide(rideData);
      navigate('/rideTracking');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Book a Ride</Typography>
        <TextField fullWidth margin="normal" label="Pickup Address" value={pickup} onChange={e => setPickup(e.target.value)} />
        <TextField fullWidth margin="normal" label="Dropoff Address" value={dropoff} onChange={e => setDropoff(e.target.value)} />
        <TextField fullWidth margin="normal" label="Scheduled Time" type="datetime-local" value={scheduledTime} onChange={e => setScheduledTime(e.target.value)} />
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Button variant="outlined" onClick={() => setAdvancedOptions(prev => ({ ...prev, quietRide: !prev.quietRide }))}>
            {advancedOptions.quietRide ? 'Quiet Ride: ON' : 'Quiet Ride: OFF'}
          </Button>
          <Button variant="outlined" onClick={() => setAdvancedOptions(prev => ({ ...prev, petFriendly: !prev.petFriendly }))}>
            {advancedOptions.petFriendly ? 'Pet Friendly: ON' : 'Pet Friendly: OFF'}
          </Button>
          <Button variant="outlined" onClick={() => setAdvancedOptions(prev => ({ ...prev, femaleDriver: !prev.femaleDriver }))}>
            {advancedOptions.femaleDriver ? 'Female Driver: ON' : 'Female Driver: OFF'}
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={confirmRide}>Confirm Ride</Button>
      </Box>
    </Container>
  );
};

export default RideBookingScreen;
