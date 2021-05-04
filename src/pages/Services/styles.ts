import styled from 'styled-components';
import { container } from 'styles/mixins';

import { ServicesStyles } from 'components/ServiceWrapper/styles';

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
  ${ServicesStyles} {
    margin-bottom: 40px;
  }

  @media (min-width: 990px) {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    ${ServicesStyles} {
      margin-bottom: 0;
    }
  }
`;
