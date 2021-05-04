import React from 'react';

import TitlePages from 'components/TitlePages';
import ServiceWrapper from 'components/ServiceWrapper';

import { Container, WrapperSerices } from './styles';

const Services: React.FC = () => {
  return (
    <Container>
      <TitlePages>Serviços</TitlePages>

      <WrapperSerices>
        <ServiceWrapper
          title="Conserto / venda de vidro eletrico"
          service="repair"
        />

        <ServiceWrapper
          title="Troca e Manutenção de Travas Eletricas"
          service="replacement"
        />

        <ServiceWrapper title="Instalação de alarmes" service="installation" />

        <ServiceWrapper
          title="Instalação / Manutenção de película"
          service="maintenance"
        />

        <ServiceWrapper
          title="Instalação de Central Multimídias"
          service="media-center"
        />

        <ServiceWrapper
          title="Venda e Instalação de Luz"
          service="sale-installation"
        />

        <ServiceWrapper
          title="Venda e Instalação Sensores de Ré"
          service="reverse-sensors"
        />

        <ServiceWrapper
          title="Venda e Instalação de Buzinas"
          service="installation-horns"
        />

        <ServiceWrapper
          title="Venda e instalação de rastreadores"
          service="installation-trackers"
        />

        <ServiceWrapper
          title="Venda e Instalação de som"
          service="sound-sale"
        />
      </WrapperSerices>
    </Container>
  );
};

export default Services;
