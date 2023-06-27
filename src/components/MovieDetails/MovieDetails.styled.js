import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-bottom: 20px;
  max-width: 960px;
`;

export const Poster = styled.img`
  max-width: 300px;
  margin-bottom: 10px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin-bottom: 10px;
  }

  & > p {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  margin-bottom: 20px;
  text-decoration: none;
  color: #212121;
  font-weight: 500;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const WrapperLink = styled.div`
  display: flex;
`;

export const StyledLink = styled(RouterLink)`
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  margin: 0 10px 20px;
  text-decoration: none;
  color: #212121;
  font-weight: 500;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
