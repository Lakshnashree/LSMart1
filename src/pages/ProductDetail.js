// src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await axios.get(`/api/products/${id}`);
    setProduct(response.data);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={product.image || "https://via.placeholder.com/500"}
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
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetail;

