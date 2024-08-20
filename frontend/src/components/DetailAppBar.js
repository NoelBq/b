import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function DetailAppBar() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
      };
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow:'none' }}>
    <Toolbar>
      <IconButton 
        edge="start" 
        color="inherit" 
        onClick={handleGoBack} 
        aria-label="back"
        sx={{ 
            boxShadow: 2, 
            color: 'black',
            width: 40,    
            height: 40,   
            borderRadius: 2 
          }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'black', fontWeight: 700 }}>
        Detail
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default DetailAppBar