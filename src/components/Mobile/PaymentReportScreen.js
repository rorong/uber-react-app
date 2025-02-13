import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const PaymentReportScreen = () => {
  const [report, setReport] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReport({ totalRevenue: 10000, totalTransactions: 200, pendingPayouts: 1500 });
    }, 2000);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Payment Report</Typography>
        {report ? (
          <Box>
            <Typography>Total Revenue: ${report.totalRevenue}</Typography>
            <Typography>Total Transactions: {report.totalTransactions}</Typography>
            <Typography>Pending Payouts: ${report.pendingPayouts}</Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" sx={{ mr: 1 }}>Export as CSV</Button>
              <Button variant="outlined">Export as PDF</Button>
            </Box>
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Typography>Loading report...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default PaymentReportScreen;
