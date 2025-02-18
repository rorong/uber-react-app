import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Avatar, Box } from '@mui/material';
import { apiGetProfile, apiUpdateProfile } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', newPassword: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await apiGetProfile();
        setProfile(data);
        setForm({ name: data.name || '', email: data.email, phone: data.phone, password: '', newPassword: '' });
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await apiUpdateProfile(form);
      alert('Profile updated successfully');
      setEditing(false);
      const data = await apiGetProfile();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!profile) {
    return (
      <Container maxWidth="sm">
        <Typography>Loading profile...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Avatar src={profile.profilePicture || 'https://via.placeholder.com/150'} sx={{ width: 100, height: 100, margin: 'auto' }} />
        {editing ? (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Current Password"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="New Password"
              type="password"
              value={form.newPassword}
              onChange={e => setForm({ ...form, newPassword: e.target.value })}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleUpdate}>
              Save Changes
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h4">{profile.name || 'User'}</Typography>
            <Typography>Email: {profile.email}</Typography>
            <Typography>Phone: {profile.phone}</Typography>
            <Typography>Addresses: {profile.addresses.length} saved</Typography>
            <Button variant="contained" sx={{ mt: 2, mr: 1 }} onClick={() => setEditing(true)}>
              Edit Profile
            </Button>
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate('/addresses')}>
              Manage Addresses
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ProfileScreen;
