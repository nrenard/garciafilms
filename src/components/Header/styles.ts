import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { simpleFlex } from 'styles/mixins';

import { MenuMobileStyles } from './partials/MenuMobile/styles';
import { MenuDesktopStyles } from './partials/MenuDesktop/styles';

export const HeaderStyles = styled.header``;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  width: 100%;

  @media (min-width: 1100px) {
    padding-top: 5px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Burguer = styled.div`
  width: 35px;
  margin-right: 30px;
  cursor: pointer;
  padding: 5px;
  position: relative;
  top: 15px;

  span {
    width: 100%;
    border-radius: 10px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.black};
    display: block;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    + span {
      margin-top: 3px;
    }
  }
`;

export const HeaderContainer = styled.div`
  ${simpleFlex};
  flex-direction: column;

  ${MenuDesktopStyles} {
    display: none;
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    ${MenuDesktopStyles} {
      ${simpleFlex};
    }

    ${MenuMobileStyles}, ${Burguer} {
      display: none;
    }
  }
`;

export const Logo = styled(Link)`
  padding-left: 40px;
  position: relative;
  width: 100%;

  img {
    width: 215px;
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 40px 40px 0px 0px;
  }

  @media (min-width: 1100px) {
    width: auto;

    img {
      width: 415px;
    }

    &:after {
      display: none;
    }
  }
`;

export const LinkStyle = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s background-color;

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }

  & + & {
    margin-left: 20px;
  }
`;
