import React, { createContext, useState, useEffect, useContext } from 'react';

export const StockPriceContext = createContext();

export const StockPriceProvider = ({ children }) => {
  const [stockPrice, setStockPrice] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStockPrice = async sku => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/stock-price/${sku}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setStockPrice(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StockPriceContext.Provider
      value={{ stockPrice, loading, error, fetchStockPrice }}
    >
      {children}
    </StockPriceContext.Provider>
  );
};

export const useStockPrice = sku => {
  const context = useContext(StockPriceContext);
  if (context === undefined) {
    throw new Error('useStockPrice must be used within a StockPriceProvider');
  }

  useEffect(() => {
    if (sku) {
      context.fetchStockPrice(sku);
      const interval = setInterval(() => {
        context.fetchStockPrice(sku);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [sku]);

  return context;
};
