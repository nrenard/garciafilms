import styled from 'styled-components';

import { container, simpleFlex } from 'styles/mixins';

export const MenuDesktopStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 15px 0 12px;
  position: relative;
  margin-top: -60px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ContainerMenuDesktop = styled.div`
  ${container};
  ${simpleFlex};
  justify-content: flex-end;
  position: relative;
  z-index: 1;

  a {
    &:first-child {
      display: none;
    }

    img {
      display: none;
    }
  }
`;
