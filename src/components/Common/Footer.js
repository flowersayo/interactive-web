import React from 'react';
import styled, { css } from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <Divider />
      <CreditContainer>
        <CreditUnitWrapper>
          <Name>하영은&nbsp; </Name>
          <Role>기획 디자인 데이터시각화</Role>
        </CreditUnitWrapper>
        <CreditUnitWrapper>
          <Name>김서연&nbsp; </Name>
          <Role>개발</Role>
        </CreditUnitWrapper>
      </CreditContainer>
    </Container>
  );
}

// Footer
const Container = styled.div`
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;

// 구분선
const Divider = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #c4c4c4;
  width: 90vw;
`;

const CreditContainer = styled.div`
  position: relative;
  padding: 20px 0 22.15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 88vw;

  @media screen and (max-width: 768px) {
    padding: 20px 0 23px;
  }

  @media screen and (max-width: 425px) {
    padding: 15px 4%;
    width: 90vw;
  }
`;

const CreditUnitWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
  @media screen and (max-width: 425px) {
    margin: 0 7px;
  }
`;

const Credit = css`
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #aaaaaa;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media screen and (max-width: 425px) {
    font-size: 11px;
    line-height: 19px;
  }
`;

const Role = styled.p`
  ${Credit}
  margin-right: 3px;
`;

const Name = styled.p`
  ${Credit}
  font-weight: 800;
`;
