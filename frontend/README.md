# 🍺 React Beer E-Commerce Challenge

Welcome to the React Beer E-Commerce Challenge! 🎉

## 🛠️ Project Setup

### Frontend

1. **Install dependencies**:

   ```bash
   yarn install
   ```

2. **Run the app**:
   The app will run on [http://localhost:3000](http://localhost:3000) by default. Since the local backend has a CORS policy that only allows port 3000, make sure to keep this port for the frontend.

   ```bash
   yarn start
   ```

3. **Build the app**:

   ```bash
   yarn build
   ```

4. **Format code**:
   ```bash
   yarn prettier
   ```

### Backend Endpoints

- **API Endpoints**:
  - `/products`: Provides a list of all products and their details.
  - `/product/:productId-:productBrand`: Provides detailed information for each product, including price and inventory information.

## 📁 File Structure

- **`/src`**: Contains the React components and application logic.
- **`/public`**: Contains static assets like `index.html`.

## 📜 Technical Requirements

- **PLP (Product Listing Page)**:

  - Served at the URL `/`.

- **PDP (Product Details Page)**:

  - Served at the URL `/product/:productId-:productBrand`.
  - Updates stock and price information every 5 seconds.

- **Error Handling**:
  - Use `Window.alert()` for all error messages and CTA interactions.

## 💡 Notes

- **Dependencies**:

  - We use `yarn` for package management.
  - Key dependencies include `react`, `@mui/material`, `axios`, and `react-router-dom`.

- **CORS Configuration**:
  - The app is configured to run on port 3000 to match the CORS settings of the local backend.

## 📜 Visual Specification

Check the visual specifications for the pages in the Figma link:
[Web Developer Challenge 2 - Figma](https://www.figma.com/design/7YLJQSm9fBWzqbs9UqzPnO/Web-developer-Challenge-2?node-id=0-135)
