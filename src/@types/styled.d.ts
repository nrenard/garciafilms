import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      [propName: string]: string;
    };

    fontFamilyJura: string;
    fontFamilyRoboto: string;

    base: {
      margin: number;
      padding: number;
      radius: number;
      defaultShadow: string;
    };
  }
}
