import React from 'react';
import { Container, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Typography } from '@mui/material';

const FleetManagement = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Fleet Management</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vehicle ID</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Last Maint.</TableCell>
              <TableCell>Next Maint.</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>V001</TableCell>
              <TableCell>Mike Smith</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell>2024-07-15</TableCell>
              <TableCell>Active</TableCell>
              <TableCell><Button variant="contained" size="small">View</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default FleetManagement;
