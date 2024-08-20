import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme } from './theme';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import RootLayout from './pages/Root';
import NotFound from './components/NotFound';
import { ProductsProvider } from './context/ProductsProvider';
import { StockPriceProvider } from './context/StockPriceProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: 'product/:productId', // productId is :id-:brandId
        element: <ProductDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <StockPriceProvider>
          <RouterProvider router={router} />
        </StockPriceProvider>
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
