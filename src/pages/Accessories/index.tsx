import React from 'react';

import TitlePages from 'components/TitlePages';
import ServiceWrapper from 'components/ServiceWrapper';

import { Container, WrapperSerices } from './styles';

const Accessories: React.FC = () => {
  return (
    <Container>
      <TitlePages>Acessórios</TitlePages>

      <WrapperSerices>
        <ServiceWrapper title="Rádio" service="radio" withBackground />

        <ServiceWrapper
          title="Painel multi mídia"
          service="multi-media-panel"
          withBackground
        />

        <ServiceWrapper
          title="Calhas de Chuva Automotiva"
          service="rain-gutters"
          withBackground
        />

        <ServiceWrapper
          title="Palhetas Automotivas"
          service="automotive-reeds"
          withBackground
        />

        <ServiceWrapper
          title="Lâmpadas Automotivas"
          service="automotive-bulbs"
          withBackground
        />

        <ServiceWrapper
          title="Farol de Milha ( Faroletes )"
          service="mile-lighthouse"
          withBackground
        />

        <ServiceWrapper
          title="Alto Falantes"
          service="loudspeakers"
          withBackground
        />

        <ServiceWrapper
          title="Rastreadores"
          service="trackers"
          withBackground
        />

        <ServiceWrapper title="Alarme" service="alarm" withBackground />
      </WrapperSerices>
    </Container>
  );
};

export default Accessories;
