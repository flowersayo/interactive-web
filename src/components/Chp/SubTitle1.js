import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import _debounce from 'lodash.debounce';
import {
  Black,
  Container,
  Title,
  Paragraph,
  Line,
  Underline,
  SubTitle,
} from '../../globalStyles';

// 컴포넌트
import Interview from '../Common/Interview';
import Graph01 from './Graphs/Graph01';
import Graph02 from './Graphs/Graph02';
// 인터뷰 데이터
import { INTDataDooyoung } from '../../data/INTData';

import DefaultImage from './Graphs/DefaultImage';
import { Gap } from '../../globalStyles';
import SeniorSuicideMap from '../Ch1/Map/SeniorSuicideMap/SeniorSuicideMap';

const Text = ({ background }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState(null);
  const [subGraph1, setGraph1] = useState(null);
  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    width > 510
      ? setGraph1(`수도권 출근시간 지역 간 평균 이동시간`)
      : setGraph1(
          <>
            수도권 출근시간
            <br />
            지역 간 평균 이동시간
          </>
        );

    width > 480
      ? setTitle(<>농어촌 덮친 노인자살</>)
      : setTitle(`농어촌 덮친 노인자살`);
  }, [width]);
  return (
    <Fragment background={background}>
      <Black>
        <Section>
          <Container>
            <TextWrapper>
              <Title>{title}</Title>
              <Paragraph>
                <Line>
                  하루 평균 10명, 2시간마다 한 명의 노인이 스스로 생을
                  마감했습니다. 약 20년간 OECD 노인자살률 1위의 오명을 벗지
                  못하고 있는 대한민국의 이야기입니다. 2018~2022년 총 1만
                  7,799명. 노인자살률은 2018년 인구 10만명 당 48.2명에서 2022년
                  39.3명으로 큰 폭으로 감소하기는 했지만 여전히 OECD 평균
                  17.2명(인구 10만명 당)에 비해서는 높은 수치입니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>
                  대한민국은 이미 초고령사회를 바라보고 있습니다.{' '}
                  <Underline>
                    {' '}
                    2024년 대한민국 인구 중 65세 이상은 19.2%. 통계청은 노인
                    인구가 10년 뒤 29.9%까지 늘어날 거라고 전망했습니다. 3명 중
                    1명이 노인이 될 나라에서 ‘잘 늙는 것’에 관해 고민해야 할
                    시기입니다.
                  </Underline>{' '}
                  노인자살률이 높다는 것은 ‘노인이 살기 좋은 나라’가 아니라는
                  의미입니다.
                </Line>
              </Paragraph>
              <Gap size="100px" />
              <SeniorSuicideMap />
              <Paragraph>
                <Line>
                  분석 결과 농어촌 지역이 도시보다 노인자살률이 높았습니다.
                  농어촌(군단위)의 평균 노인자살률은 인구 10만명 당 46.7명,
                  도시지역(시구단위)은 42.7명입니다. 노인자살률이 가장 높았던
                  지역은 충남 홍성군(88.3명)으로 도시지역 평균보다 2배가
                  넘었습니다. 자살자 수만 보더라도 3년동안 61명으로 전국 4위
                  수준입니다. 노인자살률 2~5위는 모두 강원도였으며,
                  고성군(83.2명), 화천군(75.4명), 영월군(73.3명), 인제군(71.8명)
                  순입니다.{' '}
                  <Underline>
                    상위 10곳 중 1곳을 제외하고는 전부 농어촌(군단위)
                    지역이었습니다. 유일한 시 지역인 보령시도 도농복합시입니다.
                    상위 30곳까지 확대해봐도 농어촌 21곳, 도시지역 9곳입니다.
                  </Underline>
                  <br /> <br />
                  농어촌 노인들의 심리적 고립감을 해소해 줄 자원도 부족한
                  상태입니다. 정신건강 의료와 복지를 채워 줄 ‘사람’이 없습니다.
                  농어촌 노인의 정신건강에 적신호가 켜졌습니다.
                </Line>
              </Paragraph>
            </TextWrapper>
          </Container>
        </Section>
      </Black>
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
  padding: 150px 0;

  @media screen and (max-width: 425px) {
    padding: 146px 0 103px;
  }
`;
