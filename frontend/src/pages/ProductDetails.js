import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { extractIdFromUrl } from '../utils/extractIdFromUrl';
import DetailAppBar from '../components/DetailAppBar';

import { Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ProductDetailSkeleton from '../components/ProductDetailSkeleton';
import ProductDetailInfo from '../components/ProductDetailInfo';
import ProductDetailSize from '../components/ProductDetailSize';
import ProductDetailAddSection from '../components/ProductDetailAddSection';
import { useProducts } from '../context/ProductsProvider';
import { useStockPrice } from '../context/StockPriceProvider';
import { centsToDollars } from '../utils/centsToDollars';

const ProductDetails = () => {
  const location = useLocation();
  const id = useMemo(
    () => extractIdFromUrl(location.pathname),
    [location.pathname]
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [product, setProduct] = useState(null);
  const { products, loading } = useProducts();

  useEffect(() => {
    if (products.length > 0) {
      const productSelected = products.find(
        product => product.id.toString() === id
      );
      setProduct(productSelected);
      setSelectedSize(productSelected.skus[0].code);
    }
  }, [products, id]);

  const { stockPrice } = useStockPrice(selectedSize);

  const handleAddToCart = event => {
    alert(
      `Added to cart:\n\nName: ${product.brand}\nPrice: $${centsToDollars(stockPrice)}\nID: ${product.id}\nSize: ${selectedSize}`
    );
    event.stopPropagation();
  };

  return (
    <Container maxWidth="md">
      {!product || loading ? (
        <ProductDetailSkeleton />
      ) : (
        <>
          <DetailAppBar />
          <Container maxWidth="md" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card elevation={0}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.brand}
                    sx={{
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                    }}
                  />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <ProductDetailInfo
                    product={product}
                    stockPrice={centsToDollars(stockPrice.price)}
                  />
                  <ProductDetailSize
                    product={product}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                  <ProductDetailAddSection handleAddToCart={handleAddToCart} />
                </CardContent>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
