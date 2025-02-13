import React from 'react';
import { Container, TextField, Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Typography } from '@mui/material';

const RideManagement = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Ride Management</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <TextField label="Search Ride ID" variant="outlined" />
          <Select defaultValue="all" variant="outlined">
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="requested">Requested</MenuItem>
            <MenuItem value="in_progress">In-Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="cancelled">Cancelled</MenuItem>
          </Select>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ride ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Pickup</TableCell>
              <TableCell>Dropoff</TableCell>
              <TableCell>Fare</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Mike Smith</TableCell>
              <TableCell>A</TableCell>
              <TableCell>B</TableCell>
              <TableCell>$20</TableCell>
              <TableCell>In-Progress</TableCell>
              <TableCell>01/01/2023</TableCell>
              <TableCell>
                <Button variant="contained" size="small">View</Button>
                <Button variant="outlined" size="small" sx={{ ml: 1 }}>Edit</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default RideManagement;
