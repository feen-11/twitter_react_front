import React from 'react';
import SignupButtonArea from '../organisms/SignupButtonArea';
import logo from '../../assets/logo/logo-black.png';
import { Box, Grid2 } from '@mui/material';
import SigninButtonArea from '../organisms/SigninButtonArea';

export default function AuthPage() {
  return (
    <Grid2
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        padding: '16px',
      }}
    >
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          component="img"
          src={logo}
          alt="X Logo"
          sx={{
            maxWidth: '300px',
            width: '100%',
            '@media (max-width:600px)': {
              maxWidth: '150px',
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4, maxWidth: '300px' }}>
        <SignupButtonArea />
        <SigninButtonArea />
      </Grid2>
    </Grid2>
  );
}
