import React from 'react';

import { LinkStyle } from './styles';

const basePath = '/static/images/icons';

interface IProps {
  onCloseMenu?: () => void;
}

const ItensMenu: React.FC<IProps> = ({ onCloseMenu }: IProps) => (
  <>
    <LinkStyle to="/" onClick={onCloseMenu}>
      <img src={`${basePath}/home.svg`} alt="Home" />
      Home
    </LinkStyle>

    <LinkStyle to="/empresa" onClick={onCloseMenu}>
      <img src={`${basePath}/company.svg`} alt="Empresa" />
      Empresa
    </LinkStyle>
    <LinkStyle to="/servicos" onClick={onCloseMenu}>
      <img src={`${basePath}/services.svg`} alt="Serviços" />
      Serviços
    </LinkStyle>
    <LinkStyle to="/envelopamento" onClick={onCloseMenu}>
      <img src={`${basePath}/envelope.svg`} alt="Envelopamento" />
      Envelopamento
    </LinkStyle>
    <LinkStyle to="/acessorios" onClick={onCloseMenu}>
      <img src={`${basePath}/accessories.svg`} alt="Acessórios" />
      Acessórios
    </LinkStyle>
    <LinkStyle to="/contato" onClick={onCloseMenu}>
      <img src={`${basePath}/contact.svg`} alt="Contato" />
      Contato
    </LinkStyle>
  </>
);

ItensMenu.defaultProps = { onCloseMenu: () => {} };

export default ItensMenu;
