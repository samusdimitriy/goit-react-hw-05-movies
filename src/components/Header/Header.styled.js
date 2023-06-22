import styled from '@emotion/styled';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const HeaderWrap = styled.header`
  padding: 20px;
  background-color: #2196f3;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(RouterNavLink)`
  display: inline-block;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: #000;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  &.active {
    color: #000;
    background-color: #fff;

    &:hover,
    &:focus {
      color: #000;
      background-color: #fff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
