import styled from 'styled-components';
import { NavLink as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const TricolorStripe = styled.div`
  height: 3px;
  background: linear-gradient(to right, #D90012 33%, #0033A0 33% 66%, #F2A800 66%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
`;

export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 72px;
  margin-top: -72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 3px;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: #1e2a4a;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 24px;
  font-weight: 700;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.01em;

  img {
    height: 40px;
    width: 40px;
    object-fit: contain;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 55%);
    font-size: 1.6rem;
    cursor: pointer;
    color: #1e2a4a;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 72px;
`;

export const NavLinks = styled(LinkS)`
  color: #4a5568;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  transition: color 0.2s;

  &:hover {
    color: #c8963e;
  }

  &.active {
    color: #c8963e;
    border-bottom: 2px solid #c8963e;
  }
`;

export const NavRouterLink = styled(LinkR)`
  color: #4a5568;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  transition: color 0.2s;

  &:hover {
    color: #c8963e;
  }

  &.active {
    color: #c8963e;
    border-bottom: 2px solid #c8963e;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavBtnExternal = styled.a`
  border-radius: 8px;
  background: #c8963e;
  white-space: nowrap;
  padding: 9px 22px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  letter-spacing: 0.01em;

  &:hover {
    background: #b5842e;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(200, 150, 62, 0.3);
  }
`;
