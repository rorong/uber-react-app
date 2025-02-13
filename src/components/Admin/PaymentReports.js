import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';

const PaymentReports = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Payment & Financial Reports</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 2 }}>
          <Typography>Total Revenue: $10,000</Typography>
          <Typography>Pending Payouts: $1,500</Typography>
          <Typography>Transactions: 200</Typography>
        </Box>
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
            <TableRow>
              <TableCell>TXN001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>1001</TableCell>
              <TableCell>$20</TableCell>
              <TableCell>Card</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>01/01/2023</TableCell>
              <TableCell>
                <Button variant="contained" size="small">View</Button>
              </TableCell>
            </TableRow>
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
