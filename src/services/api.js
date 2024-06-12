// src/services/api.js
import axios from 'axios';

const API_URL = 'http://your-backend-url/api';

export const fetchProducts = async (filters) => {
  const response = await axios.get(`${API_URL}/products`, { params: filters });
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};
