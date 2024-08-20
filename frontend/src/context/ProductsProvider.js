import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the products
export const ProductsContext = createContext();

// Create a provider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        window.alert('Failed to fetch products');
        console.error(
          'There has been a problem with your axios request:',
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
