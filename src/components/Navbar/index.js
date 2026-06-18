import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  TricolorStripe,
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavRouterLink,
  NavBtn,
  NavBtnExternal,
} from './NavbarElements';

const Navbar = ({ toggleState }) => {
  return (
    <>
      <TricolorStripe />
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img src='/images/logo.png' alt='Seattle Armenian School logo' />
            Seattle Armenian School
          </NavLogo>
          <MobileIcon onClick={toggleState}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavRouterLink to='/#about' end>About</NavRouterLink>
            </NavItem>
            <NavItem>
              <NavRouterLink to='/calendar'>Calendar</NavRouterLink>
            </NavItem>
            <NavItem>
              <NavRouterLink to='/expansion'>Expansion</NavRouterLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnExternal href='https://armenianchurchwa.org/armenian-school/' target='_blank' rel='noreferrer'>Donate</NavBtnExternal>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
