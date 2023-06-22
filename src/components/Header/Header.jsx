import { NavLink as RouterNavLink } from 'react-router-dom';
import { Nav, HeaderWrap } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <Nav>
        <RouterNavLink exact="true" to="/">
          Home
        </RouterNavLink>
        <RouterNavLink to="/movies">Movies</RouterNavLink>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;
