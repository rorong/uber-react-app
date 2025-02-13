import React, { useState } from 'react';
import { Container, Typography, Button, Box, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdvancedCustomizationScreen = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    quietRide: false,
    petFriendly: false,
    femaleDriver: false
  });

  const savePreferences = () => {
    alert('Preferences saved!');
    navigate(-1);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Advanced Ride Customization</Typography>
        <FormControlLabel
          control={<Checkbox checked={preferences.quietRide} onChange={() => setPreferences({ ...preferences, quietRide: !preferences.quietRide })} />}
          label="Quiet Ride"
        />
        <FormControlLabel
          control={<Checkbox checked={preferences.petFriendly} onChange={() => setPreferences({ ...preferences, petFriendly: !preferences.petFriendly })} />}
          label="Pet Friendly"
        />
        <FormControlLabel
          control={<Checkbox checked={preferences.femaleDriver} onChange={() => setPreferences({ ...preferences, femaleDriver: !preferences.femaleDriver })} />}
          label="Female Driver"
        />
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={savePreferences}>
          Save Preferences
        </Button>
      </Box>
    </Container>
  );
};

export default AdvancedCustomizationScreen;
