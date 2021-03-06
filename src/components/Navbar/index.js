import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLogo>Caick Passarella</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="resume">Resume</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="made">How this site was made</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func,
};

export default Navbar;
