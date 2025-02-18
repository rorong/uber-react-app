import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
          <Button variant="contained" onClick={() => navigate('/admin/users')}>User Management</Button>
          <Button variant="contained" onClick={() => navigate('/admin/rides')}>Ride Management</Button>
          <Button variant="contained" onClick={() => navigate('/admin/paymentReports')}>Payment Reports</Button>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => navigate('/admin/systemSettings')}>System Settings</Button>
          <Button variant="outlined" sx={{ ml: 2 }} onClick={() => navigate('/admin/analytics')}>Analytics Reports</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
