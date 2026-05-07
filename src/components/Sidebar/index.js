import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarRouterLink,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggleState }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleState}>
      <Icon onClick={toggleState}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggleState}>
            About
          </SidebarLink>
          <SidebarRouterLink to='/calendar' onClick={toggleState}>
            Calendar
          </SidebarRouterLink>
          <SidebarRouterLink to='/expansion' onClick={toggleState}>
            Expansion
          </SidebarRouterLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
