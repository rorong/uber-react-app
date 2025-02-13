import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const AIFeaturesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [surgeMultiplier, setSurgeMultiplier] = useState('');

  const predictSurge = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSurgeMultiplier('1.5');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4">AI-Powered Surge Prediction</Typography>
        <Button variant="contained" onClick={predictSurge} sx={{ mt: 2 }}>
          Predict Surge Pricing
        </Button>
        {isLoading ? <Typography>Loading...</Typography> : <Typography variant="h6">Surge Multiplier: {surgeMultiplier}</Typography>}
      </Box>
    </Container>
  );
};

export default AIFeaturesScreen;
