import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { apiGetPaymentDetails } from '../../api/api';

const PaymentReportScreen = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await apiGetPaymentDetails();
        setPayments(data.payments);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPayments();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Payment Report</Typography>
        {payments.length ? (
          <Box>
            {payments.map(payment => (
              <Box key={payment.id} sx={{ borderBottom: '1px solid #ccc', py: 1 }}>
                <Typography>Transaction ID: {payment.transactionId}</Typography>
                <Typography>Amount: ${parseFloat(payment.amount).toFixed(2)}</Typography>
                <Typography>Method: {payment.method}</Typography>
                <Typography>Status: {payment.status}</Typography>
              </Box>
            ))}
            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" sx={{ mr: 1 }}>Export as CSV</Button>
              <Button variant="outlined">Export as PDF</Button>
            </Box>
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Typography>Loading payment details...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default PaymentReportScreen;
