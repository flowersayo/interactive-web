import React from 'react';
import styled, { css } from 'styled-components';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import KaKaoShareButton from './KaKao2';
import Footer from './Footer';

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
          </MsgWrapper>
          {/* SNS 섹션 */}
          <SNSWrapper>
            <KaKaoShareButton
              font={`95px`}
              background={`rgba(0, 0, 0, 0.6)`}
              radius={`50px`}
              padding={`30px 10px`}
            />
            <FacebookShareButton
              url={'https://infallible-montalcini-e57de1.netlify.app'}
              quote={'소멸의 땅, 지방은 어떻게 사라지나??'}
              hashtag="#지방소멸, #위기의전조, #KBS, #특집다큐"
              style={{ outline: 'none' }}
              image={bgImg}
            >
              <Facebook />
            </FacebookShareButton>
            <TwitterShareButton
              url={'https://infallible-montalcini-e57de1.netlify.app'}
              quote={'소멸의 땅, 지방은 어떻게 사라지나'}
              hashtag="#지방소멸 #위기의전조 #KBS #특집다큐"
              style={{ outline: 'none' }}
            >
              <Twitter />
            </TwitterShareButton>
          </SNSWrapper>
          <BtnWrapper>{children}</BtnWrapper>
          <BroadcastingGuideWrapper>
            <Light>보다 자세한 내용은&nbsp;</Light>
            <Bold>
              KBS 1TV {`<시사기획 창>`}, 소멸의 땅: 지방은 어떻게 사라지나
            </Bold>
            <Light>
              &nbsp;편 (4월 4일, 밤 9시 40분)에서 확인할 수 있습니다.
            </Light>
          </BroadcastingGuideWrapper>
          {/* 푸터 */}
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
