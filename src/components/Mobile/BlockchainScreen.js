import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const BlockchainScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');
  const driverId = 'driver_001';
  const payoutAmount = 50.0;

  const processPayout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTransactionHash('0xabc123');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4">Blockchain Payout</Typography>
        <Typography>Driver ID: {driverId}</Typography>
        <Typography>Payout Amount: ${payoutAmount.toFixed(2)}</Typography>
        {isLoading ? <Typography>Processing...</Typography> : <Button variant="contained" onClick={processPayout}>Process Payout</Button>}
        {transactionHash && <Typography sx={{ mt: 2 }}>Transaction Hash: {transactionHash}</Typography>}
      </Box>
    </Container>
  );
};

export default BlockchainScreen;
