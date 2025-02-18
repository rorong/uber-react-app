import React from 'react';
import { Container, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Typography } from '@mui/material';

const FleetManagement = () => {
  const vehicles = [
    { id: 'V001', driver: 'Mike Smith', lastMaintenance: '2024-01-15', nextMaintenance: '2024-07-15', status: 'Active' }
  ];

  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Fleet Management</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vehicle ID</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Last Maintenance</TableCell>
              <TableCell>Next Maintenance</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map(vehicle => (
              <TableRow key={vehicle.id}>
                <TableCell>{vehicle.id}</TableCell>
                <TableCell>{vehicle.driver}</TableCell>
                <TableCell>{vehicle.lastMaintenance}</TableCell>
                <TableCell>{vehicle.nextMaintenance}</TableCell>
                <TableCell>{vehicle.status}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default FleetManagement;
