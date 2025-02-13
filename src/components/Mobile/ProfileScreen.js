import React from 'react';
import { Container, Typography, Button, Avatar, Box } from '@mui/material';

const ProfileScreen = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    avatar: 'https://via.placeholder.com/150'
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Avatar src={user.avatar} sx={{ width: 100, height: 100, margin: 'auto' }} />
        <Typography variant="h4">{user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" sx={{ mr: 1 }}>Edit Profile</Button>
          <Button variant="outlined">Manage Addresses</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileScreen;
