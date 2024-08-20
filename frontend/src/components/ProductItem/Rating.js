import React from "react";

import { Typography, Box } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";

function Rating({ rating }) {
  return (
    <Box style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <StarIcon
        sx={{
          marginRight: 0.5,
          fontSize: 20,
          color: (theme) => theme.palette.secondary.main,
        }}
      />
      <Typography variant="body2">
        {rating ? rating.toFixed(2) : "N/A"}
      </Typography>
    </Box>
  );
}

export default Rating;
