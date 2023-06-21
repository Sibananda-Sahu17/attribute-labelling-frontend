import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'

const TopSearch = () => {
  const [family, setFamily] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFamily(event.target.value);
    setBrand(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ m: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">Family</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={family}
          label="Family"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Family 1</MenuItem>
          <MenuItem value={2}>Family 2</MenuItem>
          <MenuItem value={3}>Family 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={brand}
          label="Brand"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Brand 1</MenuItem>
          <MenuItem value={2}>Brand 2</MenuItem>
          <MenuItem value={3}>Brand 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Category 1</MenuItem>
          <MenuItem value={2}>Category 2</MenuItem>
          <MenuItem value={3}>Category 3</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{ m: 2, ml: 5, display: {md: 'flex'}, minWidth: 150}} variant="contained" endIcon={<SearchIcon />} >Search</Button>
    </Box >
  )
}

export default TopSearch