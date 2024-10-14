import { Button } from '@mui/material';
import React from 'react';

export default function ContainerWhiteButton(props) {
  const { children } = props;
  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
      }}
    >
      {children}
    </Button>
  );
}
