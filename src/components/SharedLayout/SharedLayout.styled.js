import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Link = styled.nav`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  margin-right: 20px;
  &.active {
    color: #f44336;
  }
`;
