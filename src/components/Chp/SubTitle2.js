import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import _debounce from 'lodash.debounce';
import {
  Container,
  Title,
  Paragraph,
  Line,
  Underline,
} from '../../globalStyles';
import { Gap } from '../../globalStyles';
import DefaultImage from './Graphs/DefaultImage';
import MentalHospitaMap from '../Ch1/Map/MentalHospitaMap/MentalHospitaMap';

const Text = ({ background }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment background={background}>
      <Section>
        <Container>
          <TextWrapper>
            <Title>
              {' '}
              농어촌 3곳 중 1곳이 <br />
              ‘정신건강 의료 공백’
            </Title>
            <MentalHospitaMap />
            <Paragraph>
              <Line>
                올해 1월 기준 250개 기초자치단체 중 정신건강 의료기관이 없는{' '}
                <Underline> ‘정신건강 무의촌’</Underline>이 30곳에 달합니다.
                충남 계룡시를 제외하고는 모두 군 단위 지역입니다. 그중 강원
                고성군, 화천군, 인제군 등 11곳은 노인자살률 상위 30위에 드는
                곳입니다. 강원도를 통틀어 정신건강 의료기관은 총 50개. 그마저도
                39개가 춘천시(17개), 원주시(14개), 강릉시(8개) 같은 도시에 몰려
                있습니다.{' '}
                <Underline>
                  강원도 18개 시군 중 9곳, 절반이 ‘정신건강 무의촌’인 것입니다.
                </Underline>{' '}
                반면 강남구는 113곳, 서초구는 60곳이나 있었습니다.
              </Line>
              <Gap size="50px" />

              <Line>
                인구 비례로 살펴봐도 마찬가지입니다. 올해 기준 인구 10만 명당
                정신건강 의료기관이 없거나 2개 미만인 곳은 52개.{' '}
                <Underline>
                  기초자치단체 5곳 중 1곳이 정신건강 의료 사각지대인 셈입니다.
                  수도권도 예외는 아닙니다.
                </Underline>{' '}
                경기 수원시 권선구, 인천 옹진군 등 수도권 8곳에서 정신건강
                의료기관이 인구 10만 명당 2개 미만이었습니다. 반면 서울은
                종로구, 중구 등 5개 자치구에서 인구 10만 명당 정신건강
                의료기관이 10개 이상이었습니다. 강남구는 20개에 달했습니다.{' '}
              </Line>
            </Paragraph>
          </TextWrapper>
        </Container>
      </Section>
    </Fragment>
  );
};

export default React.memo(Text);

const Fragment = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;

  @media screen and (max-width: 425px) {
    padding-top: 50px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0 0;

  @media screen and (max-width: 425px) {
    padding: 100px 0 0;
  }
`;

const RetouchedImage = styled.img`
  width: 620px;
  height: auto;
  padding-bottom: 20px;
  z-index: 1;
  position: relative;

  @media screen and (max-width: 625px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    width: 350px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 350px) {
    width: 80vw;
  }
`;
