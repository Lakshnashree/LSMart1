// src/components/Pagination.js
import React from 'react';
import { Pagination as MuiPagination, Box } from '@mui/material';

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onPageChange(value)}
        color="primary"
      />
    </Box>
  );
};

export default Pagination;
