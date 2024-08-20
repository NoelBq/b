import { useState } from 'react';
import { Typography, Link, Box } from '@mui/material';

function ProductDetailInfo({ product, stockPrice }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 250;

  const toggleExpand = () => setExpanded(!expanded);

  const truncatedInfo =
    product.information.length > maxLength
      ? `${product.information.slice(0, maxLength)}...`
      : product.information;

  const Separator = ({ children }) => (
    <Box component="span" sx={{ mx: 1 }}>
      {children}
    </Box>
  );

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
          }}
          variant="h5"
          component="h2"
          gutterBottom
        >
          {product.brand}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: theme => theme.palette.secondary.main,
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', sm: '2rem' },
          }}
        >
          ${stockPrice}
        </Typography>
      </Box>
      <Box
        sx={{
          py: 1,
          fontSize: { xs: '0.7rem', sm: '1rem' },
          color: theme => theme.palette.primary.light,
          fontWeight: 500,
          mb: 1,
        }}
        display="flex"
        alignItems="center"
      >
        <Box component="span">Origin: {product.origin}</Box>
        <Separator>|</Separator>
        <Box component="span">Style: {product.style}</Box>
        <Separator>|</Separator>
        <Box component="span">ABV: {product.abv}</Box>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: '0.7rem', sm: '1rem' },
          color: theme => theme.palette.primary.light,
          mb: 1,
        }}
        variant="body1"
      >
        {expanded || product.information.length <= maxLength ? (
          product.information
        ) : (
          <>
            {truncatedInfo}
            <Link
              component="button"
              onClick={toggleExpand}
              sx={{
                fontWeight: 700,
                textDecoration: 'none',
                color: theme => theme.palette.secondary.main,
                display: 'inline',
              }}
            >
              {'Read More'}
            </Link>
          </>
        )}
        {expanded && (
          <Link
            component="button"
            onClick={toggleExpand}
            sx={{
              fontWeight: 700,
              display: 'block',
              mt: 1,
              textDecoration: 'none',
              color: theme => theme.palette.secondary.main,
            }}
          >
            {'Read Less'}
          </Link>
        )}
      </Typography>
    </>
  );
}

export default ProductDetailInfo;
