import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';

const PaymentReports = () => {
  // Dummy data
  const payments = [
    { id: 'TXN001', user: 'John Doe', rideId: '1001', amount: 20, method: 'card', status: 'completed', date: '2023-01-01' }
  ];

  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Payment Reports</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Ride ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map(payment => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.user}</TableCell>
                <TableCell>{payment.rideId}</TableCell>
                <TableCell>${payment.amount}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" sx={{ mr: 1 }}>Export as CSV</Button>
          <Button variant="outlined">Export as PDF</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentReports;
