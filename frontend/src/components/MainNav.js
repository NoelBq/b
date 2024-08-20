import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Avatar,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
function MainNav() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
          onClick={redirectToHome}
        >
          <Avatar
            src="./icons/beer.png"
            sx={{
              width: {
                xs: '30px',
                sm: '40px',
              },
              height: {
                xs: '30px',
                sm: '40px',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '20px', sm: '30px' },
              cursor: 'pointer',
            }}
            variant="h6"
            marginLeft={1}
            fontWeight="bold"
          >
            Beer Commerce
          </Typography>
        </Box>

        {!isMobile && (
          <Box display="flex" alignItems="center">
            <Avatar
              src="./avatar.jpg"
              style={{ width: '40px', height: '40px' }}
            />
          </Box>
        )}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar src="./avatar.jpg" />
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default MainNav;
