import TitlePages from 'components/TitlePages';
import React from 'react';

import { Container } from './styles';

const Envelope: React.FC = () => {
  return (
    <Container>
      <TitlePages>Envelopamento</TitlePages>
      <p>
        Envelopamento automotivo, seja carro, moto e demais.
        <br />
        Solicite orçamento e marque seu horário!
      </p>
    </Container>
  );
};

export default Envelope;
