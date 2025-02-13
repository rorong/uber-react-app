import React from 'react';
import { Container, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Box } from '@mui/material';

const NotificationManagement = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Notification Management</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date/Time</TableCell>
              <TableCell>Channel</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>N001</TableCell>
              <TableCell>2025-01-01 09:00</TableCell>
              <TableCell>Push</TableCell>
              <TableCell>System Update</TableCell>
              <TableCell>
                <Button variant="contained" size="small">Edit</Button>
                <Button variant="outlined" size="small" sx={{ ml: 1 }}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant="contained" sx={{ mt: 2 }}>Create New Notification</Button>
      </Box>
    </Container>
  );
};

export default NotificationManagement;
