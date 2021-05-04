import styled from 'styled-components';

export const Container = styled.div`
  max-width: 670px;
  width: 100%;
  margin-top: 35px;
  padding-bottom: 5px;

  h1 {
    font-family: ${({ theme }) => theme.fontFamilyJura};
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
  }

  &:after {
    box-shadow: ${({ theme }) => theme.base.defaultShadow};
    background-color: ${({ theme }) => theme.colors.primary};
    height: 2px;
    width: 100%;
    content: '';
    display: block;
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    h1 {
      text-align: left;
      font-size: 40px;
    }
  }
`;
