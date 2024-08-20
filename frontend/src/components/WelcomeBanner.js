import React from 'react';
import { Typography } from '@mui/material';

function WelcomeBanner() {
  return (
    <>
      <Typography variant="h5" mt={2} gutterBottom>
        Hi!
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome Back!
      </Typography>
      <Typography variant="h6" mt={4} gutterBottom>
        Our Products
      </Typography>
    </>
  );
}

export default WelcomeBanner;
