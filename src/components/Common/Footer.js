import React from 'react';
import styled, { css } from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <Divider />
      <CreditContainer>
        <CreditUnitWrapper>
          <Role>기획&nbsp;</Role>
          <Name>KBS창원 심층기획팀</Name>
        </CreditUnitWrapper>
        <CreditUnitWrapper>
          <Role>디자인&nbsp;</Role>
          <Name>OOO</Name>
        </CreditUnitWrapper>

        <CreditUnitWrapper>
          <Role>개발&nbsp;</Role>
          <Name>김서연</Name>
        </CreditUnitWrapper>
        <CreditUnitWrapper>
          <Role>데이터 시각화&nbsp;</Role>
          <Name>OOO</Name>
        </CreditUnitWrapper>
        <CreditUnitWrapper>
          <Role>리서처&nbsp;</Role>
          <Name>OOO&nbsp;</Name>
        </CreditUnitWrapper>
        <CreditUnitWrapper>
          <Role>제작&nbsp;</Role>
          <Name>이화여자대학교 도전학기</Name>
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
