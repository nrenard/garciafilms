import styled, { css } from 'styled-components';
import { simpleFlex } from 'styles/mixins';

export const ServicesStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px 4px 4px;
  border-radius: 10px;
  max-width: 370px;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 990px) {
    max-width: 400px;
    margin-bottom: 0;
  }
`;

export const TitleService = styled.p`
  padding-bottom: 15px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 20px;
`;

export const ImageWrapper = styled.div<{ withBackground?: boolean }>`
  ${simpleFlex};
  justify-content: center;
  min-height: 235px;
  border-radius: 10px;
  background-color: ${({ theme, withBackground }) =>
    withBackground && theme.colors.white};
  padding: 5px 0;

  ${({ theme, withBackground }) =>
    withBackground &&
    css`
      background-color: ${theme.colors.white};
      padding: 5px 0;
    `}
`;

export const ImageService = styled.img`
  max-height: 235px;
`;
