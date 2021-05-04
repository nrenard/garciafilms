import TitlePages from 'components/TitlePages';
import React from 'react';

import { Container, WrapperLeft, WrapperRight } from './styles';

const basePath = '/static/images/icons';

const About: React.FC = () => {
  return (
    <Container>
      <WrapperLeft>
        <TitlePages>Sobre nós</TitlePages>
        <p>
          Criada em 2015, nossa empresa é especializada em aplicação de
          películas automotiva e películas prediais. Também trabalhamos com
          instalação de central multi mídia, sensores de ré, buzinas, alarmes,
          sons automotivos e rastreadores.
          <br />
          <br />
          Equipe e mão de obra qualificada, temos total comprometimento com os
          clientes e garantia nos serviços prestados.
          <br />
          <br />
          Facilitamos seu pagamento.
          <br />
          Entre em contato e faça um orçamento.
        </p>
      </WrapperLeft>

      <WrapperRight>
        <p>
          <img src={`${basePath}/car.svg`} alt="car" />
          Serviço Completo
        </p>
        <p>
          <img src={`${basePath}/key.svg`} alt="key" />
          Qualidade Comprovada
        </p>
        <p>
          <img src={`${basePath}/users.svg`} alt="users" />
          Equipe Qualificada
        </p>
      </WrapperRight>
    </Container>
  );
};

export default About;
