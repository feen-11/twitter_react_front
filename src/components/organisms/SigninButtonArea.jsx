import { Typography } from '@mui/material';
import React from 'react';
import OutlinedPrimaryButton from '../atoms/button/OutlinedPrimaryButton';

export default function SigninButtonArea() {
  return (
    <>
      <Typography sx={{ fontWeight: 'bold' }}>
        アカウントをお持ちの場合
      </Typography>
      <OutlinedPrimaryButton>ログイン</OutlinedPrimaryButton>
    </>
  );
}
