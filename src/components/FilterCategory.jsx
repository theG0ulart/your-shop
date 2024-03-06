import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SelectedCategoryList({ category, onSelectCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    onSelectCategory(category)
  };



  return (
    <Box 
    sx={{bgcolor: 'background.paper', m: 2, flexGrow: 1 }}>
      <List component="nav">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => {handleListItemClick(event, 0); onSelectCategory('')}}
        >
          <ListItemText primary="All" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => {handleListItemClick(event, 1); onSelectCategory("men's clothing")}}
        >
          <ListItemText primary="Men's Clothing" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => {handleListItemClick(event, 2); onSelectCategory("women's clothing")}}
          >
          <ListItemText primary="Women's Clothing" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => {handleListItemClick(event, 3); onSelectCategory("jewelery")}}
        >
          <ListItemText primary="Jewelery" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => {handleListItemClick(event, 4); onSelectCategory("electronics")}}
        >
          <ListItemText primary="Electronics" />
        </ListItemButton>
          </List>
    </Box>
  );
}