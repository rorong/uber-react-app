import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';

const DisputeDocumentVerification = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Dispute & Document Verification</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Disputes</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dispute ID</TableCell>
              <TableCell>User/Driver</TableCell>
              <TableCell>Ride ID</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>D1001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>1001</TableCell>
              <TableCell>Payment Issue</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>
                <Button variant="contained" size="small">View</Button>
                <Button variant="outlined" size="small" sx={{ ml: 1 }}>Resolve</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="h6" sx={{ mt: 4 }}>Document Verification</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doc ID</TableCell>
              <TableCell>Driver Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Expiry</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>DOC001</TableCell>
              <TableCell>Mike Smith</TableCell>
              <TableCell>License</TableCell>
              <TableCell>2024-12-31</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>
                <Button variant="contained" size="small">Approve</Button>
                <Button variant="outlined" size="small" sx={{ ml: 1 }}>Reject</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default DisputeDocumentVerification;
