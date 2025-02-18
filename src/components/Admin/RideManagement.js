import React from 'react';
import { Container, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Typography, TextField, Select, MenuItem } from '@mui/material';

const RideManagement = () => {
  // Dummy data
  const rides = [
    { id: '1001', user: 'John Doe', driver: 'Mike Smith', pickup: 'Location A', dropoff: 'Location B', fare: 20, status: 'in_progress', date: '2023-01-01' },
    { id: '1002', user: 'Jane Doe', driver: 'Mike Smith', pickup: 'Location C', dropoff: 'Location D', fare: 25, status: 'completed', date: '2023-01-02' },
  ];

  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Ride Management</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <TextField label="Search Ride ID" variant="outlined" />
          <Select defaultValue="all" variant="outlined">
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="requested">Requested</MenuItem>
            <MenuItem value="in_progress">In Progress</MenuItem>
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
            {rides.map(ride => (
              <TableRow key={ride.id}>
                <TableCell>{ride.id}</TableCell>
                <TableCell>{ride.user}</TableCell>
                <TableCell>{ride.driver}</TableCell>
                <TableCell>{ride.pickup}</TableCell>
                <TableCell>{ride.dropoff}</TableCell>
                <TableCell>${ride.fare}</TableCell>
                <TableCell>{ride.status}</TableCell>
                <TableCell>{ride.date}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">View</Button>
                  <Button variant="outlined" size="small" sx={{ ml: 1 }}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default RideManagement;
