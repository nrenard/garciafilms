import React from 'react';

import {
  ServicesStyles,
  TitleService,
  ImageService,
  ImageWrapper,
} from './styles';

const basePath = '/static/images/services';

interface IProps {
  service: string;
  title: string;
  withBackground?: boolean;
}

const ServiceWrapper: React.FC<IProps> = ({
  service,
  title,
  withBackground,
}: IProps) => (
  <ServicesStyles>
    <TitleService>{title}</TitleService>
    <ImageWrapper withBackground={withBackground}>
      <ImageService src={`${basePath}/${service}.png`} alt={service} />
    </ImageWrapper>
  </ServicesStyles>
);

ServiceWrapper.defaultProps = {
  withBackground: false,
};

export default ServiceWrapper;
