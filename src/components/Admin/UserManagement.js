import React from 'react';
import { Container, TextField, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Button, Box, Typography } from '@mui/material';

const UserManagement = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">User Management</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <TextField label="Search Users" variant="outlined" />
          <Select defaultValue="all" variant="outlined">
            <MenuItem value="all">All Roles</MenuItem>
            <MenuItem value="driver">Driver</MenuItem>
            <MenuItem value="rider">Rider</MenuItem>
          </Select>
          <Select defaultValue="all" variant="outlined">
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="verified">Verified</MenuItem>
          </Select>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>
                <Button variant="contained" size="small">Edit</Button>
                <Button variant="outlined" size="small" sx={{ ml: 1 }}>Verify</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default UserManagement;
