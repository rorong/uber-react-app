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
          <Box>
            <Typography variant="h6">Active Rides</Typography>
            <Typography>10</Typography>
          </Box>
          <Box>
            <Typography variant="h6">New Registrations</Typography>
            <Typography>5</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Total Revenue</Typography>
            <Typography>$10,000</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Performance Trends (Graph Placeholder)</Typography>
          <Box sx={{ height: '200px', backgroundColor: '#f0f0f0', mt: 2 }}></Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Recent Activity</Typography>
          <ul>
            <li>Ride #1001 updated at 10:00 AM</li>
            <li>New registration: Jane Doe</li>
            <li>Document pending verification</li>
          </ul>
        </Box>
        <Button variant="contained" sx={{ mt: 4 }} onClick={() => navigate('/admin/users')}>Manage Users</Button>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
