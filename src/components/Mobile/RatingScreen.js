import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField } from '@mui/material';

const RatingScreen = ({ rideId, userId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitRating = () => {
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      alert('Rating submitted successfully!');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Rate Your Ride</Typography>
        <Box sx={{ mt: 2 }}>
          {[1, 2, 3, 4, 5].map(star => (
            <span key={star} onClick={() => setRating(star)} style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'grey', fontSize: '2rem' }}>
              ★
            </span>
          ))}
        </Box>
        <TextField fullWidth multiline rows={3} placeholder="Write your review (max 500 characters)" value={review} onChange={e => setReview(e.target.value)} sx={{ mt: 2 }} />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={submitRating}>
          {isLoading ? 'Submitting...' : 'Submit Review'}
        </Button>
      </Box>
    </Container>
  );
};

export default RatingScreen;
