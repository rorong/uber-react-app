import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Admin Login</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField fullWidth margin="normal" label="Username/Email" onChange={e => setUsername(e.target.value)} required />
          <TextField fullWidth margin="normal" label="Password" type="password" onChange={e => setPassword(e.target.value)} required />
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>Login</Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>Forgot Password?</Typography>
        <Typography variant="caption">Note: MFA enabled</Typography>
      </Box>
    </Container>
  );
};

export default AdminLoginScreen;
