import React from 'react';
import { Container, TextField, Select, MenuItem, Typography, Button, Box } from '@mui/material';

const AnalyticsReports = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Analytics & Reports</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <TextField type="date" />
          <Select defaultValue="rides">
            <MenuItem value="rides">Rides</MenuItem>
            <MenuItem value="revenue">Revenue</MenuItem>
            <MenuItem value="users">User Growth</MenuItem>
          </Select>
        </Box>
        <Box sx={{ height: 200, backgroundColor: '#f0f0f0', mb: 2 }}>
          <Typography variant="h6">Graph Placeholder</Typography>
        </Box>
        <Button variant="contained">Download Report</Button>
      </Box>
    </Container>
  );
};

export default AnalyticsReports;
