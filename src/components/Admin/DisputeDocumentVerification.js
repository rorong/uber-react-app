import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';

const DisputeDocumentVerification = () => {
  // Dummy data for disputes and document verification
  const disputes = [
    { id: 'D1001', user: 'John Doe', rideId: '1001', issue: 'Payment Issue', status: 'pending' }
  ];
  const documents = [
    { id: 'DOC001', driverName: 'Mike Smith', type: 'License', expiry: '2024-12-31', status: 'pending' }
  ];

  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Dispute & Document Verification</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Disputes</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dispute ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Ride ID</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {disputes.map(dispute => (
              <TableRow key={dispute.id}>
                <TableCell>{dispute.id}</TableCell>
                <TableCell>{dispute.user}</TableCell>
                <TableCell>{dispute.rideId}</TableCell>
                <TableCell>{dispute.issue}</TableCell>
                <TableCell>{dispute.status}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">View</Button>
                  <Button variant="outlined" size="small" sx={{ ml: 1 }}>Resolve</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="h6" sx={{ mt: 4 }}>Document Verification</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Document ID</TableCell>
              <TableCell>Driver Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Expiry</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map(doc => (
              <TableRow key={doc.id}>
                <TableCell>{doc.id}</TableCell>
                <TableCell>{doc.driverName}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.expiry}</TableCell>
                <TableCell>{doc.status}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">Approve</Button>
                  <Button variant="outlined" size="small" sx={{ ml: 1 }}>Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default DisputeDocumentVerification;
