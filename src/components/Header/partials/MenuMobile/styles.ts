import styled, { css } from 'styled-components';
import { simpleFlex } from 'styles/mixins';

import { LinkStyle } from '../ItensMenu/styles';

export const MenuMobileStyles = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.white};
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: 0.2s visibility, 0.2s opacity;
  padding-top: 20px;
  overflow: auto;

  > img {
    margin-left: 30px;
    position: relative;
    z-index: 1;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export const TopMenu = styled.div`
  ${simpleFlex};
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: -22px;

  img {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: -5px;
    left: 0;
    border-radius: 40px 40px 0px 0px;
  }
`;

export const ContentHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
  padding-top: 40px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;

  ${LinkStyle} {
    box-shadow: ${({ theme }) => theme.base.defaultShadow};
    width: 245px;
    margin-left: 0;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 7px 0px 0px 7px;

    + ${LinkStyle} {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`;

export const Bottom = styled.div`
  ${simpleFlex};
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 40px 40px 0px 0px;
  justify-content: center;
  margin-top: 61px;

  a {
    ${simpleFlex};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;

    img {
      margin-right: 10px;
    }

    + a {
      margin-top: 25px;
    }
  }
`;
