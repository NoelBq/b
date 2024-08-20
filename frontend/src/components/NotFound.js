import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Icon = styled("img")({
  width: "100px",
  height: "100px",
  marginBottom: "20px",
});

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f0f0f0"
      p={2}
    >
      <Icon src="/icons/beer.png" alt="Beer Icon" />
      <Typography variant="h1" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="primary"
        size="small"
        sx={{
          textDecoration: "none",
          backgroundColor: (theme) => theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: (theme) => theme.palette.secondary,
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
