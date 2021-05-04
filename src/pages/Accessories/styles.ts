import styled from 'styled-components';
import { container } from 'styles/mixins';

export const Container = styled.div`
  ${container};
  flex: 1;

  @media (min-width: 990px) {
    margin: 0 auto 40px;
  }
`;

export const WrapperSerices = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 990px) {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
`;
