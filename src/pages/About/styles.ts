import styled from 'styled-components';
import { container, simpleFlex } from 'styles/mixins';

export const Container = styled.div`
  ${container};
  flex: 1;
  margin: 0 auto 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`;

export const WrapperLeft = styled.div`
  p {
    margin-top: 40px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  @media (min-width: 990px) {
    p {
      display: block;
      max-width: 680px;
      margin-top: 15px;
      font-size: 30px;
      line-height: 45px;
      text-align: left;
    }
  }
`;

export const WrapperRight = styled.div`
  margin-top: 45px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  img {
    width: 30px;
    margin-right: 15px;
  }

  p {
    ${simpleFlex};
    font-size: 20px;

    + p {
      margin-top: 30px;
    }
  }

  @media (min-width: 990px) {
    margin-top: 0;
    text-align: left;

    img {
      width: 40px;
    }

    p {
      font-size: 30px;
    }
  }
`;
