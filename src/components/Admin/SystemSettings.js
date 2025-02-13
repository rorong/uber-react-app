import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [settings, setSettings] = useState({
    operationalHours: '08:00 - 22:00',
    contactEmail: 'admin@example.com',
    geoRadius: 10,
    googleMapsApi: '********',
    stripeApi: '********'
  });

  const saveSettings = () => {
    alert('Settings saved!');
  };

  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">System Settings & Geo-Fencing</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          {['General', 'Geo-Fencing', 'API Keys'].map(tab => (
            <Button key={tab} variant={activeTab === tab ? 'contained' : 'outlined'} onClick={() => setActiveTab(tab)}>
              {tab}
            </Button>
          ))}
        </Box>
        <Box>
          {activeTab === 'General' && (
            <>
              <TextField fullWidth label="Operational Hours" value={settings.operationalHours} onChange={e => setSettings({ ...settings, operationalHours: e.target.value })} margin="normal" />
              <TextField fullWidth label="Contact Email" value={settings.contactEmail} onChange={e => setSettings({ ...settings, contactEmail: e.target.value })} margin="normal" />
            </>
          )}
          {activeTab === 'Geo-Fencing' && (
            <>
              <TextField fullWidth label="Geo Radius (km)" type="number" value={settings.geoRadius} onChange={e => setSettings({ ...settings, geoRadius: e.target.value })} margin="normal" />
              <Typography>[Map Interface Here]</Typography>
            </>
          )}
          {activeTab === 'API Keys' && (
            <>
              <TextField fullWidth label="Google Maps API" value={settings.googleMapsApi} InputProps={{ readOnly: true }} margin="normal" />
              <TextField fullWidth label="Stripe API" value={settings.stripeApi} InputProps={{ readOnly: true }} margin="normal" />
            </>
          )}
        </Box>
        <Button variant="contained" onClick={saveSettings} sx={{ mt: 2 }}>Save Settings</Button>
      </Box>
    </Container>
  );
};

export default SystemSettings;
