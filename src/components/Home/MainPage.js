import React from 'react'
import { Grid, Card, CardContent, TextField, Button, responsiveFontSizes } from '@mui/material';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function MainPage() {

return (
  <Grid container spacing={2} sx={{ p: 2 }}>
    <Grid item xs={12} sm={5} md={4} lg={3}>
      <Card>
        <CardContent>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ fontSize: 25, fontWeight: 'regular', textTransform: 'capitalize', m: 1 }}>Product 1 title</Box>
          <Box sx={{ fontSize: 25, fontWeight: 'regular', textTransform: 'capitalize', m: 1 }}>Product 2 title</Box>
          <Box sx={{ fontSize: 25, fontWeight: 'regular', textTransform: 'capitalize', m: 1 }}>Product 3 title</Box>
          <Box sx={{ fontSize: 25, fontWeight: 'regular', textTransform: 'capitalize', m: 1 }}>Product 4 title</Box>
          <Box sx={{ fontSize: 25, fontWeight: 'regular', textTransform: 'capitalize', m: 1 }}>Product 5 title</Box>
          <Box sx={{ fontSize: 25, fontWeight: 'regular', textTransform: 'capitalize', m: 1 }}>Product 5 title</Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={7} md={8} lg={9} sx={{ display: { md: 'flex' }, justifyContent: 'center' }}>
      <Box sx={{ maxWidth: 800 }}>
        <Box sx={{ fontSize: 25, fontWeight: 'bold', textTransform: 'capitalize', m: 1 }}>Product Description</Box>
        <form>
          <TextField label="OS" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="RRP" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="Weight" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="ID" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="article desc" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="article_id" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="attribute_4" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="brand" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="brick" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="category" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="created_at" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="family" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="launch_date" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="sd" sx={{ minWidth: 250, m: 1 }} />
          <TextField label="type" sx={{ minWidth: 250, m: 1 }} />
          <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-between', m: 1 }}>
            Missing_attributes <Switch {...label} />
            Boolean <Switch {...label} />
            Boolean <Switch {...label} />
          </Box>
          <Button variant="contained" color="primary" sx={{ m: 2, minWidth: 150, display: { md: 'flex' }, justifyContent: 'center' }}>Update</Button>
        </form>
      </Box>
    </Grid>
  </Grid>
)
}

export default MainPage