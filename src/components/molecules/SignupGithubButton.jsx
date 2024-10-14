import React from 'react';
import ContainerWhiteButton from '../atoms/button/ContainerWhiteButton';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function SignupGithubButton() {
  return (
    <ContainerWhiteButton>
      <GitHubIcon sx={{ mr: 1 }} />
      Githubで登録
    </ContainerWhiteButton>
  );
}
