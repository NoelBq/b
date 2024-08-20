import React from 'react';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem/ProductItem';
import { useProducts } from '../context/ProductsProvider';

function ProductsContent() {
  const { products, loading } = useProducts();
  return (
    <Grid container spacing={3}>
      {!loading &&
        products.map((product, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <ProductItem
              sku={product.skus[0].code}
              name={product.brand}
              image={product.image}
              rating={product.rating}
              id={product.id}
              brandId={product.brandId}
              price={product.prices[0].price}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default ProductsContent;
