import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // Replace with API call
    if (email && phone && password.length >= 8) {
      navigate('/login');
    } else {
      setError('Registration failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Register</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleRegister}>
          <TextField fullWidth margin="normal" label="Email" onChange={e => setEmail(e.target.value)} required />
          <TextField fullWidth margin="normal" label="Phone" onChange={e => setPhone(e.target.value)} required />
          <TextField fullWidth margin="normal" label="Password" type="password" onChange={e => setPassword(e.target.value)} required />
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>Register</Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/login')}>
          Already have an account? Login
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterScreen;
