import styled from 'styled-components';

import { container, simpleFlex } from 'styles/mixins';

export const BottomStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.base.padding / 2}px 0;
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  display: none;

  @media (min-width: 1100px) {
    display: flex;
  }
`;

export const BottomContainer = styled.div`
  ${container};
  ${simpleFlex};
  text-align: center;
  justify-content: space-between;

  p {
    ${simpleFlex};

    img {
      margin-right: 8px;
    }
  }
`;
