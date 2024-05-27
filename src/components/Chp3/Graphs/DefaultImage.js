import React from 'react';
import styled from 'styled-components';
import DefaultImageSrc from '../../../assets/images/default-img.jpeg';

const DefaultImage = () => {
  return <Img src={DefaultImageSrc} onerror="this.style.display='none';"></Img>;
};

const Img = styled.img`
  width: 600px;
  height: 390px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export default DefaultImage;
