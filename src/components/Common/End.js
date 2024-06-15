import React from 'react';
import styled, { css } from 'styled-components';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

import Footer from './Footer';
import { Gap } from '../../globalStyles';

const End = ({ bgImg, children }) => {
  return (
    <Section background={bgImg}>
      <Container>
        <Wrapper>
          <MsgWrapper>
            <Message>
              지방 소멸은 이미 심각하게 진행됐습니다. 더 늦기 전에 이 사실을
              널리 알려주세요.
            </Message>
            <Gap size="100px" />
          </MsgWrapper>
          {/* SNS 섹션 */}
          <BtnWrapper>{children}</BtnWrapper>

          <Footer />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default End;

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// 타이틀 섹션
const Container = styled.div`
  position: relative;
  height: auto;
  display: flex;
  justify-content: center;
  background: linear-gradient(#000000, #00000070 90%);
`;

// 타이틀을 포함하고 있는 Wrapper
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 81px 0 0;

  @media screen and (max-width: 768px) {
    padding: 91px 0 0;
  }

  @media screen and (max-width: 425px) {
    padding: 112px 0 0;
  }
`;

// 메세지 섹션
const MsgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 700px;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    width: 88vw;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 50px;
  }
`;

// 메세지
const Message = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 65px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 425px) {
    font-size: 35px;
    line-height: 60px;
  }

  @media screen and (max-width: 425px) {
    font-size: 30px;
    line-height: 50px;
  }
`;

// SNS 섹션
const SNSWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 160px;
  width: 445px;

  @media screen and (max-width: 768px) {
    margin: 0 auto 140px;
    width: 445px;
  }

  @media screen and (max-width: 425px) {
    margin: 0 auto 180px;
    width: 345px;
  }

  @media screen and (max-width: 355px) {
    margin: 0 auto 180px;
    width: 82vw;
  }
`;

// SNS 아이콘
const Icons = css`
  font-size: 95px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  padding: 30px 10px;
  cursor: pointer;

  @media screen and (max-width: 355px) {
    font-size: 70px;
    padding: 20px 10px;
  }
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

const Twitter = styled(FaTwitter)`
  ${Icons}
`;

// 페이지 이동 버튼 섹션
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 102.85px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 115px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 98.37px;
  }
`;

const BroadcastingGuideWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 87vw;
`;

const BroadcastingGuide = css`
  font-family: 'Noto Serif KR', serif;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }

  @media screen and (max-width: 425px) {
    font-size: 13px;
    line-height: 26px;
  }
`;

const Light = styled.span`
  ${BroadcastingGuide}
`;

const Bold = styled.span`
  ${BroadcastingGuide}
  font-weight: 800;
`;
