import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{textAlign: 'left' }}>
            Your Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
