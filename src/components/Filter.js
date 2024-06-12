// src/components/Filter.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Box } from '@mui/material';

const Filter = ({ filters, onFilterChange, onApplyFilters }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select name="category" value={filters.category} onChange={onFilterChange}>
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Fashion">Fashion</MenuItem>
          <MenuItem value="Home">Home</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Company"
        name="company"
        value={filters.company}
        onChange={onFilterChange}
      />
      <TextField
        fullWidth
        label="Rating"
        name="rating"
        type="number"
        value={filters.rating}
        onChange={onFilterChange}
      />
      <TextField
        fullWidth
        label="Min Price"
        name="minPrice"
        type="number"
        value={filters.minPrice}
        onChange={onFilterChange}
      />
      <TextField
        fullWidth
        label="Max Price"
        name="maxPrice"
        type="number"
        value={filters.maxPrice}
        onChange={onFilterChange}
      />
      <FormControl fullWidth>
        <InputLabel>Availability</InputLabel>
        <Select name="availability" value={filters.availability} onChange={onFilterChange}>
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="true">In Stock</MenuItem>
          <MenuItem value="false">Out of Stock</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={onApplyFilters}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filter;
