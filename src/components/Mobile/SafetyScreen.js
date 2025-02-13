import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const SafetyScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const triggerSOS = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMessage('SOS alert sent successfully!');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4">Safety & SOS</Typography>
        <Typography>Press the button below to trigger an SOS alert.</Typography>
        {isLoading ? <Typography>Sending SOS...</Typography> : <Button variant="contained" onClick={triggerSOS}>Trigger SOS</Button>}
        {message && <Typography color="success.main" sx={{ mt: 2 }}>{message}</Typography>}
      </Box>
    </Container>
  );
};

export default SafetyScreen;
