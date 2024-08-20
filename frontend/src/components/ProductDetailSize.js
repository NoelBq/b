import React, { useMemo } from 'react';
import { Chip, Typography, Box, useTheme } from '@mui/material';

function ProductDetailSize({ product, selectedSize, setSelectedSize }) {
  const theme = useTheme();
  const selectedColor = useMemo(
    () => theme.palette.secondary.main,
    [theme.palette.secondary.main]
  );
  return (
    <>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1rem', sm: '1.2rem' },
        }}
      >
        Size
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
        }}
      >
        {product.skus.map(sku => (
          <Chip
            key={sku.code}
            label={sku.name}
            onClick={() => setSelectedSize(sku.code)}
            sx={{
              fontSize: { xs: '0.5rem', sm: '1rem' },
              color: selectedSize === sku.code ? selectedColor : 'default',
              backgroundColor: 'none',
              borderColor:
                selectedSize === sku.code ? selectedColor : 'default',
            }}
            variant="outlined"
            aria-label={sku.name}
          />
        ))}
      </Box>
    </>
  );
}

export default ProductDetailSize;
