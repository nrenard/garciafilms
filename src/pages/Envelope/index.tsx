import TitlePages from 'components/TitlePages';
import React from 'react';

import { Container, SectionBlue, ContainerDefault } from './styles';

const basePath = '/static/images/services';

const Envelope: React.FC = () => {
  return (
    <>
      <Container>
        <TitlePages>Envelopamento</TitlePages>
        <p>
          Envelopamento automotivo, seja carro, moto e demais.
          <br />
          Solicite orçamento e marque seu horário!
        </p>
      </Container>

      <SectionBlue style={{ marginBottom: 30 }}>
        <ContainerDefault>
          <img src={`${basePath}/envelope1.png`} alt="envelope" />
          <img src={`${basePath}/envelope2.png`} alt="envelope" />
        </ContainerDefault>
      </SectionBlue>

      <Container>
        <TitlePages>ARQUITETÔNICO</TitlePages>
        <p>
          Envelopamento arquitetônico, seja moveis da cozinha, máquina de lavar
          / secar ou louça, geladeira, forno, microondas.
          <br />
          <br />
          Também trabalhamos com demais envelopamentos. ex.: elevador e box de
          banheiro.
          <br />
          <br />
          Solicite orçamento
        </p>
      </Container>

      <SectionBlue>
        <ContainerDefault>
          <img src={`${basePath}/arqui1.png`} alt="arqui" />
          <img src={`${basePath}/arqui2.png`} alt="arqui" />
          <img src={`${basePath}/arqui3.png`} alt="arqui" />
        </ContainerDefault>
      </SectionBlue>
    </>
  );
};

export default Envelope;
