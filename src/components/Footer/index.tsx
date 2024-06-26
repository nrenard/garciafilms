import React from 'react';

import { BottomStyles, BottomContainer } from './styles';

const basePath = '/static/images/icons';

const Footer: React.FC = () => (
  <BottomStyles>
    <BottomContainer>
      <p>
        <img src={`${basePath}/pin.svg`} alt="pin" />
        Av. Baltazar de Oliveira Garcia, 754 - São Sebastião, Porto Alegre - RS, 91130-000
      </p>

      <p>
        <img src={`${basePath}/phone.svg`} alt="phone" />
        (51) 99151-0468
      </p>

      <p>
        <img src={`${basePath}/mail.svg`} alt="mail" />
        garciafilms.gf@gmail.com
      </p>
    </BottomContainer>
  </BottomStyles>
);

export default Footer;
