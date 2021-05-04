import styled from 'styled-components';
import { container } from 'styles/mixins';

export const WrapperContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  p {
    font-family: ${({ theme }) => theme.fontFamilyJura};
    font-size: 23px;
    padding-top: 40px;
    line-height: 27px;
    text-align: center;
    max-width: 995px;
  }

  a {
    display: table;
    font-size: 20px;
    padding: 5px 20px;
    box-shadow: ${({ theme }) => theme.base.defaultShadow};
    transition: 0.2s opacity;
    margin-top: 40px;
    margin: 40px auto 0;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.base.radius}px;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 500px) {
    p {
      padding: 110px 0 0;
      font-size: 45px;
      line-height: 60px;
      text-align: left;
    }

    a {
      margin: 50px 0 0;
      font-size: 36px;
      padding: 5px 30px;
    }
  }
`;

export const Container = styled.div`
  ${container}
`;

export const WrapperImages = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;

  picture {
    &:first-child {
      z-index: 1;
      bottom: 60px;
      right: 20px;
    }
  }

  @media (min-width: 990px) {
    height: 350px;
    picture {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`;
