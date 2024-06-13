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
          Av. Baltazar de Oliveira Garcia, 754 - São Sebastião, Porto Alegre - RS, 91130-000
        </p>
      </WrapperLeft>
      <WrapperRight>
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.7171628619453!2d-51.139445615083304!3d-30.010024854068604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197655466d2af7%3A0xbd755623481330b2!2sAv.%20Baltazar%20de%20Oliveira%20Garcia%2C%20754%20-%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Porto%20Alegre%20-%20RS%2C%2091130-000!5e0!3m2!1spt-BR!2sbr!4v1718318716868!5m2!1spt-BR!2sbr"
        />
      </WrapperRight>
    </Container>
  );
};

export default Contact;
