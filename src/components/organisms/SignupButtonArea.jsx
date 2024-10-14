import React from 'react';
import SignupGithubButton from '../molecules/SignupGithubButton';
import ContainerPrimaryButton from '../atoms/button/ContainerPrimaryButton';
import { Box, Typography } from '@mui/material';

export default function SignupButtonArea() {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontWeight: 'bold', my: 4 }}
      >
        すべての話題が、ここに。
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: 'bold', mb: 2 }}
      >
        今すぐ参加しましょう。
      </Typography>
      <SignupGithubButton />
      <Typography variant="body1" sx={{ textAlign: 'center', py: '4px' }}>
        または
      </Typography>
      <ContainerPrimaryButton>アカウントを作成</ContainerPrimaryButton>
      <Typography variant="body2" sx={{ mb: 2 }}>
        アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したとみなされます。
      </Typography>
    </>
  );
}
