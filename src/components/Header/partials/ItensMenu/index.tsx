import React from 'react';

import { LinkStyle } from './styles';

const basePath = '/static/images/icons';

const ItensMenu: React.FC = () => (
  <>
    <LinkStyle to="/">
      <img src={`${basePath}/home.svg`} alt="Home" />
      Home
    </LinkStyle>

    <LinkStyle to="/empresa">
      <img src={`${basePath}/company.svg`} alt="Empresa" />
      Empresa
    </LinkStyle>
    <LinkStyle to="/servicos">
      <img src={`${basePath}/services.svg`} alt="Serviços" />
      Serviços
    </LinkStyle>
    <LinkStyle to="/envelopamento">
      <img src={`${basePath}/envelope.svg`} alt="Envelopamento" />
      Envelopamento
    </LinkStyle>
    <LinkStyle to="/acessorios">
      <img src={`${basePath}/accessories.svg`} alt="Acessórios" />
      Acessórios
    </LinkStyle>
    <LinkStyle to="/contato">
      <img src={`${basePath}/contact.svg`} alt="Contato" />
      Contato
    </LinkStyle>
  </>
);

export default ItensMenu;
