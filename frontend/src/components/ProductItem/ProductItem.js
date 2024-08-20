import React from 'react';
import PriceSection from './PriceSection';
import Rating from './Rating';
import ImageComponent from './ImageComponent';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, styled } from '@mui/material';
import { centsToDollars } from '../../utils/centsToDollars';

function ProductItem({ name, image, rating, brandId, id, sku, price }) {
  const navigate = useNavigate();

  const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    transition: 'box-shadow 0.3s ease',
    textDecoration: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows[6],
    },
  }));

  const handleClick = () => {
    navigate(`/product/${id}-${brandId}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <CardContent
        sx={{
          padding: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          sx={{
            pb: 1,
            fontSize: { xs: '0.8rem', sm: '1.2rem' },
          }}
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
        >
          {name}
        </Typography>
        <ImageComponent name={name} image={image} />
        <Rating rating={rating} />
      </CardContent>
      <PriceSection
        price={centsToDollars(price)}
        id={id}
        sku={sku}
        name={name}
      />
    </StyledCard>
  );
}

export default ProductItem;
