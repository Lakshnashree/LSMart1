// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={product.image || "https://via.placeholder.com/150"}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.company}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Category: {product.category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: ${product.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Rating: {product.rating}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Discount: {product.discount}%
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Availability: {product.availability ? "In Stock" : "Out of Stock"}
      </Typography>
      <Button size="small" href={`/product/${product.id}`}>
        Learn More
      </Button>
    </CardContent>
    </Card>
);

export default ProductCard;
