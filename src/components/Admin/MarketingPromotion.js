import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const MarketingPromotion = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Marketing & Promotion</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <Button variant="contained">Coupons</Button>
          <Button variant="contained">Referrals</Button>
          <Button variant="contained">Loyalty Programs</Button>
        </Box>
        <Typography>[List of Promotions]</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Create New Promotion</Button>
      </Box>
    </Container>
  );
};

export default MarketingPromotion;
