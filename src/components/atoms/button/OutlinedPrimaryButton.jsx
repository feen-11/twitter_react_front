import { Button } from '@mui/material';
import React from 'react';

export default function OutlinedPrimaryButton(props) {
  const { children } = props;
  return (
    <Button
      variant="outlined"
      sx={{ fontWeight: 'bold', borderRadius: 10, width: '100%' }}
    >
      {children}
    </Button>
  );
}
