import { Button } from '@mui/material';
import React from 'react';

export default function ContainerPrimaryButton(props) {
  const { children } = props;
  return (
    <Button
      variant="contained"
      sx={{ fontWeight: 'bold', borderRadius: 10, width: '100%' }}
    >
      {children}
    </Button>
  );
}
