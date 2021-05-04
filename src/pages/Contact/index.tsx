/* eslint-disable jsx-a11y/iframe-has-title */
import TitlePages from 'components/TitlePages';
import React from 'react';

import { Container, WrapperLeft, WrapperRight } from './styles';

const basePath = '/static/images/icons';

const Contact: React.FC = () => {
  return (
    <Container>
      <WrapperLeft>
        <TitlePages>Contato</TitlePages>

        <p>
          <img src={`${basePath}/phone-black.svg`} alt="phone" />
          (51) 99151-0468
        </p>

        <p>
          <img src={`${basePath}/mail-black.svg`} alt="mail" />
          garciafilms.gf@gmail.com
        </p>

        <p>
          <img src={`${basePath}/timer.svg`} alt="timer" />
          Segunda a Sexta das 8:00 às 18:30 Sábado das 8:00 às 16:00
        </p>

        <p>
          <img src={`${basePath}/pin-black.svg`} alt="pin" />
          Av. Baltazar de Oliveira Garcia, 451 São Sebastião, Porto Alegre - RS,
          91130-001
        </p>
      </WrapperLeft>
      <WrapperRight>
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Av.%20Baltazar%20de%20Oliveira%20Garcia,%20451%20S%C3%A3o%20Sebasti%C3%A3o,%20Porto%20Alegre%20-%20RS,%2091130-001&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </WrapperRight>
    </Container>
  );
};

export default Contact;
