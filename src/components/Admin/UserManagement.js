import React from 'react';
import { Container, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Typography, TextField, Select, MenuItem } from '@mui/material';

const UserManagement = () => {
  // Dummy data
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'driver', status: 'pending' },
    { id: '2', name: 'Jane Small', email: 'jane@example.com', role: 'rider', status: 'verified' },
  ];

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
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">Edit</Button>
                  <Button variant="outlined" size="small" sx={{ ml: 1 }}>Verify</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default UserManagement;