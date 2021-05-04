import React, { useState } from 'react';

import MenuMobile from './partials/MenuMobile';
import MenuDesktop from './partials/MenuDesktop';

import {
  HeaderStyles,
  HeaderContainer,
  Logo,
  Burguer,
  TopWrapper,
} from './styles';

const Header: React.FC = () => {
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);

  const openMenu = () => {
    setIsOpenModalMenu(true);
  };

  const closeMenu = () => {
    setIsOpenModalMenu(false);
  };

  return (
    <HeaderStyles>
      <HeaderContainer>
        <TopWrapper>
          <Logo to="/">
            <img src="/static/images/logo.png" alt="Garcia Films" />
          </Logo>

          <MenuDesktop />

          <Burguer onClick={openMenu}>
            <span />
            <span />
            <span />
          </Burguer>
        </TopWrapper>

        <MenuMobile isOpenModalMenu={isOpenModalMenu} closeMenu={closeMenu} />
      </HeaderContainer>
    </HeaderStyles>
  );
};

export default Header;
