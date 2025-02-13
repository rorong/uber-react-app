import React from 'react';
import { Container, TextField, Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Typography } from '@mui/material';

const SupportTicketManagement = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Support Ticket Management</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <TextField label="Search Ticket ID" variant="outlined" />
          <Select defaultValue="open" variant="outlined">
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
          </Select>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticket ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>T1001</TableCell>
              <TableCell>Jane Doe</TableCell>
              <TableCell>App Crash</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>01/01/2023</TableCell>
              <TableCell>
                <Button variant="contained" size="small">View</Button>
                <Button variant="outlined" size="small" sx={{ ml: 1 }}>Close</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default SupportTicketManagement;
