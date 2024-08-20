import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function ProductDetailAddSection({ handleAddToCart }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <IconButton
        onClick={handleAddToCart}
        sx={{
          border: '1px solid',
          borderColor: theme => theme.palette.secondary.main,
          color: theme => theme.palette.secondary.main,
          height: 40,
          width: 40,
          borderRadius: 2,
        }}
      >
        <ShoppingBagOutlinedIcon />
      </IconButton>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          flexGrow: 1,
          ml: 2,
          fontWeight: 700,
          borderRadius: '6px',
          backgroundColor: theme => theme.palette.secondary.main,
          color: 'white',
        }}
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>
    </Box>
  );
}

export default ProductDetailAddSection;
