import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoaderSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #f44336;
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;
`;
