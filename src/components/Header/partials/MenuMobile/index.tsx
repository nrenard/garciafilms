/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import ItensMenu from '../ItensMenu';

import {
  MenuMobileStyles,
  TopMenu,
  ContentHeader,
  Menu,
  Bottom,
} from './styles';

const basePath = '/static/images/icons';

interface IProps {
  isOpenModalMenu: boolean;
  closeMenu: () => void;
}

const MenuMobile: React.FC<IProps> = ({
  isOpenModalMenu,
  closeMenu,
}: IProps) => {
  return (
    <MenuMobileStyles isOpen={isOpenModalMenu}>
      <img
        src="/static/images/icons/x.svg"
        alt="close"
        width="28px"
        onClick={closeMenu}
      />

      <TopMenu>
        <img src="/static/images/logo.png" alt="Garcia Films" width="215px" />
      </TopMenu>

      <ContentHeader>
        <Menu>
          <ItensMenu onCloseMenu={closeMenu} />
        </Menu>

        <Bottom>
          <a
            href="https://www.facebook.com/Garciafilms"
            target="_blank"
            rel="noreferrer"
          >
            <img src={`${basePath}/facebook.svg`} alt="facebook" />
            Garcia Films
          </a>

          <a
            href="https://www.instagram.com/garcia_films/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={`${basePath}/instagram.svg`} alt="instagram" />
            @garcia_films
          </a>

          <a href="tel: 5551991510468" target="_blank" rel="noreferrer">
            <img src={`${basePath}/phone.svg`} alt="telefone" />
            (51) 99151-0468
          </a>

          <a
            href="mailto: garciafilms.gf@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={`${basePath}/mail.svg`} alt="telefone" />
            garciafilms.gf@gmail.com
          </a>
        </Bottom>
      </ContentHeader>
      {/* <ItensMenu /> */}
    </MenuMobileStyles>
  );
};

export default MenuMobile;
