import React from 'react';

import ItensMenu from '../ItensMenu';

import { MenuDesktopStyles, ContainerMenuDesktop } from './styles';

const MenuDesktop: React.FC = () => {
  return (
    <MenuDesktopStyles>
      <ContainerMenuDesktop>
        <ItensMenu />
      </ContainerMenuDesktop>
    </MenuDesktopStyles>
  );
};

export default MenuDesktop;
