import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function PriceSection({ price, name, id, sku }) {
  const theme = useTheme();
  const handleClick = event => {
    alert(
      `Added to cart:\n\nName: ${name}\nPrice: $${price}\nID: ${id}\nSKU: ${sku}`
    );
    event.stopPropagation();
  };
  return (
    <Box
      display="flex"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      justifyContent="space-between"
      padding="8px"
      borderRadius="8px"
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1rem', sm: '1.2rem' },
        }}
        variant="h6"
      >
        ${price}
      </Typography>
      <Button
        variant="contained"
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          minWidth: { xs: '20px', sm: '40px' },
          width: { xs: '30px', sm: '40px' },
          height: { xs: '30px', sm: '40px' },
        }}
        onClick={handleClick}
      >
        <AddIcon />
      </Button>
    </Box>
  );
}

export default PriceSection;
