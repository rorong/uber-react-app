import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { apiLogin } from '../../api/api';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await apiLogin(email, password);
      login(data.token);
      navigate('/otp');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Login</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField fullWidth margin="normal" label="Email" type="email" onChange={e => setEmail(e.target.value)} required />
          <TextField fullWidth margin="normal" label="Password" type="password" onChange={e => setPassword(e.target.value)} required />
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>Login</Button>
        </form>
        <Typography variant="caption">Data encrypted with AES-256</Typography>
        <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/register')}>
          Don't have an account? Register
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginScreen;
