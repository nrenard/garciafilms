import React from 'react';
import { Link } from 'react-router-dom';

import { WrapperContainer, Container, WrapperImages } from './styles';

const Home: React.FC = () => {
  return (
    <WrapperContainer>
      <Container>
        <p>INSTALAÇÃO E MANUTENÇÃO DE PELÍCULAS AUTOMOTIVAS E ARQUITETÔNICA</p>
        <Link to="/servicos">Ver mais</Link>

        <WrapperImages>
          <picture>
            <img src="/static/images/new-cruze-desktop.png" alt="cruze" />
          </picture>
        </WrapperImages>
      </Container>
    </WrapperContainer>
  );
};

export default Home;
