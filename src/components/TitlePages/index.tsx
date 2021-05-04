// eslint-disable

import React from 'react';

import { Container } from './styles';

interface IProps {
  children: any;
}

const TitlePages: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default TitlePages;
