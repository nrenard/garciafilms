import styled from 'styled-components';
import { container } from 'styles/mixins';

export const Container = styled.div`
  ${container};
  flex: 1;
  margin: 0 auto 60px;

  > p {
    margin-top: 20px;
    display: block;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  @media (min-width: 990px) {
    > p {
      margin-top: 45px;
      font-size: 40px;
      line-height: 60px;
      text-align: left;
    }
  }
`;
