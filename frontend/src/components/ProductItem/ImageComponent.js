import React, { useMemo } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

function ImageComponent({ name, image }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const maxHeight = useMemo(() => {
    return isSmallScreen ? '160px' : '100px';
  }, [isSmallScreen]);
  return (
    <Box
      component="img"
      src={image}
      alt={name}
      sx={{
        width: '100%',
        maxHeight,
        height: { xs: '120px', sm: '160px' },
        objectFit: 'contain',
        pb: 1,
      }}
    />
  );
}

export default ImageComponent;
