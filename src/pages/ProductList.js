// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: [0, 1000],
    availability: ''
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    const response = await axios.get('/api/products', { params: filters });
    setProducts(response.data);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select name="category" value={filters.category} onChange={handleFilterChange}>
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Fashion">Fashion</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Company"
            name="company"
            value={filters.company}
            onChange={handleFilterChange}
          />
          <TextField
            fullWidth
            label="Rating"
            name="rating"
            type="number"
            value={filters.rating}
            onChange={handleFilterChange}
          />
          <TextField
            fullWidth
            label="Price Range"
            name="priceRange"
            type="number"
            value={filters.priceRange}
            onChange={handleFilterChange}
          />
          <FormControl fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select name="availability" value={filters.availability} onChange={handleFilterChange}>
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={true}>In Stock</MenuItem>
              <MenuItem value={false}>Out of Stock</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={fetchProducts}>
            Apply Filters
          </Button>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
    );
};

export default ProductList;
