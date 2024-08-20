import React from "react";
import { Container } from "@mui/material";

import ProductsContent from "../components/ProductsContent";
import WelcomeBanner from "../components/WelcomeBanner";
function Products() {
  return (
    <>
      <Container>
        <WelcomeBanner />
        <ProductsContent />
      </Container>
    </>
  );
}

export default Products;
