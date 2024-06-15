import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import _debounce from 'lodash.debounce';

import {
  Container,
  Title,
  SubTitle,
  Paragraph,
  Line,
  Underline,
} from '../../globalStyles';

import Interview from '../Common/Interview';
import Graph03 from './Graphs/Graph03';
import Graph04 from './Graphs/Graph04';
import { INTDataSangho } from '../../data/INTData';

import DefaultImage from './Graphs/DefaultImage';
import MentalHealthCenterMap from '../Ch1/Map/MentalHealthCenterMap/MentalHealthCenterMap';
import { Gap } from '../../globalStyles';
const Text = ({ background }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState(null);
  const [graph3, setGraph3] = useState(null);

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    width > 515
      ? setTitle(
          <>
            전문요원 없는 정신건강복지센터 15곳…
            <br />
            농어촌 정신건강 인력난
          </>
        )
      : setTitle(`전문요원 없는 정신건강복지센터 15곳… 농어촌 정신건강 인력난`);
  }, [width]);
  return (
    <Fragment background={background}>
      <Black>
        <Section>
          <Container>
            <TextWrapper>
              <Title>
                전문요원 없는 정신건강복지센터 15곳… <br />
                농어촌 정신건강 인력난
              </Title>
              <Paragraph>
                <Line>
                  정신건강 의료뿐 아니라 복지에서도 농어촌과 도시의 격차가
                  뚜렷합니다. 지역사회의 정신건강 및 자살예방 사업을 직접
                  수행하는 기초정신건강복지센터는 전국 시군구별로 모두 있었지만,
                  인력 구성에서 차이가 있었습니다.
                </Line>

                <Line>
                  정신건강복지센터의 지역별 인력 불균형을 알아보기 위해 올해 3월
                  기준 전국 기초정신건강복지센터 인력현황을
                  정보공개청구했습니다. 국립정신건강센터에 청구했을 때는{' '}
                  <Underline>‘부존재’</Underline> 통지를 받았습니다. 2022년 12월
                  기준으로 전수조사한 자료가 있지만{' '}
                  <Underline>
                    인력 확보 상황에 관해 지자체에서 공개를 꺼린다는 이유입니다.
                  </Underline>{' '}
                  그렇게 각 광역자치단체에 정보공개청구하고, 청구 내용이
                  기초자치단체로 이송되는 등의 과정을 거쳐{' '}
                  <Underline>
                    한 달만에 전국 244개 정신건강복지센터의 인력현황을
                    입수했습니다.{' '}
                  </Underline>
                </Line>
              </Paragraph>
              <Gap size="100px" />
              <MentalHealthCenterMap />

              <Paragraph style={{ marginBottom: 0 }}>
                <Line>
                  분석 결과 정신건강 전문인력이 한 명도 없는
                  기초정신건강복지센터는 전남 고흥군, 경남 함양군, 충남 보령시
                  등 15개. 한 명만 있는 곳도 21곳입니다.{' '}
                  <Underline>
                    농어촌 지역과 도시 지역의 평균 전문인력 비율은 2배 이상
                    차이났습니다.
                  </Underline>{' '}
                  농어촌 지역(군단위)의 정신건강복지센터에서는 전체 인력 중
                  전문인력이 평균 25.7%, 도시지역(시구단위)에서는 53.1%입니다.{' '}
                  <Underline>
                    수도권과 비수도권 간에도 격차가 있었습니다.
                  </Underline>{' '}
                  수도권의 전문인력 비율은 평균 60.9%, 비수도권은 36.8%입니다.{' '}
                </Line>
                <Line>
                  지역사회의 정신건강을 책임지는 기초정신건강복지센터가 인력
                  부족에 시달리고 있습니다.
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

const Black = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(transparent 70%, #000);
  padding-bottom: 150px;

  @media screen and (max-width: 425px) {
    padding: 100px 0;
  }
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
  padding: 280px 0 0;

  @media screen and (max-width: 425px) {
    padding: 200px 0 0;
  }
`;
