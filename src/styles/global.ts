import styled, { createGlobalStyle } from 'styled-components';

import { container } from './mixins';

export const Container = styled.div`
  ${container};
  margin-top: 50px;
`;

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline-color:  ${({ theme }) => theme.colors.secondary};
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    font-family: ${({ theme }) => theme.fontFamilyRoboto};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`;
