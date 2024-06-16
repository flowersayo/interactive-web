import React from 'react';
import styled, { keyframes } from 'styled-components';
import LoadingSrc from '../assets/images/loading.gif';

const Loading = () => {
  return (
    <Section>
      <Logo src={LoadingSrc} />
    </Section>
  );
};

export default Loading;

const Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Gooey = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 40px;
  margin: -20px 0 0 -71px;
  background: black;
  filter: contrast(20);
`;
const dot = keyframes`
    50% {
        transform: translateX(96px);
    }
`;

const dots = keyframes`
    50% {
        transform: translateX(-31px);
    }
`;

const Dot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;
  filter: blur(4px);
  background: white;
  border-radius: 50%;
  transform: translateX(0);
  animation: ${dot} 2.8s infinite;
`;

const Dots = styled.div`
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: ${dots} 2.8s infinite;

  span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    filter: blur(4px);
    background: white;
    border-radius: 50%;
  }
`;
