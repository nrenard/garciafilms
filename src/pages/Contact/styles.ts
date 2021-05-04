import styled from 'styled-components';

import { container, simpleFlex } from 'styles/mixins';

export const Container = styled.div`
  ${container};
  display: flex;
  flex: 1;
  margin: 0 auto 60px;
  flex-direction: column;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`;

export const WrapperLeft = styled.div`
  max-width: 550px;

  p {
    ${simpleFlex};
    font-size: 20px;
    margin-top: 40px;

    img {
      margin-right: 10px;
    }
  }

  @media (min-width: 990px) {
    p {
      font-size: 26px;
    }
  }
`;

export const WrapperRight = styled.div`
  margin-top: 30px;
  height: 300px;

  @media (min-width: 990px) {
    margin-top: 0;
    flex: 1;
    padding-top: 90px;
    padding-left: 80px;
    height: 440px;
  }
`;
