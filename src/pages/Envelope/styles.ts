import styled from 'styled-components';

import { container, simpleFlex } from 'styles/mixins';

export const ContainerDefault = styled.div`
  ${container};
`;

export const Container = styled(ContainerDefault)`
  ${container};
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

export const SectionBlue = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 65px 0;

  ${ContainerDefault} {
    ${simpleFlex};
    flex-direction: column;

    img {
      + img {
        margin-top: 20px;
      }
    }

    @media (min-width: 990px) {
      flex-direction: row;
      justify-content: space-around;

      img {
        + img {
          margin-top: 0;
        }
      }
    }
  }
`;
