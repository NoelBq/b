# Express API Server 🚀

## Prerequisites 📋

- Node.js
- npm (usually comes with Node.js)

## Install dependencies 📦:

```
npm install
```

## Running the Server 🏃‍♂️

1. Start the server:

```
node index.js
```

2. The server will start running on `http://localhost:8000`

## Available Routes 🛣️

- `GET /`: Returns a "Hello World!" message to check the app is running
- `GET /api/products`: Returns a list of all products
- `GET /api/stock-price/:sku`: Returns stock price information for a given SKU

## CORS Configuration ⚙️

The server is configured to accept requests from `http://localhost:3000`. If you need to change this, update the `corsOptions` in the main server file.
