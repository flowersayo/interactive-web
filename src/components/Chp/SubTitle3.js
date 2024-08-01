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
  Gulim,
} from '../../globalStyles';

import Interview from '../Common/Interview';
import Graph03 from './Graphs/Graph03';
import Graph04 from './Graphs/Graph04';
import { INTDataSangho } from '../../data/INTData';
import { Reference, ReferenceBox } from '../Common/GridElements';
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
                전문요원 없는 <br />
                정신건강복지센터 15곳… <br />
                농어촌 정신건강 인력난
              </Title>
              <Gap size="50px" />
              <Gulim>“시골이니까 일반 간호사 뽑기도 너무 힘들어요.”</Gulim>
              <Gap size="10px" />
              <Gulim>-고흥군 보건소 정신보건팀 김희정 주무관-</Gulim>
              <Gap size="100px" />
              <Paragraph>
                <Line>
                  정신건강 의료뿐 아니라 복지에서도 농어촌과 도시의 격차가
                  뚜렷합니다. 지역사회의 정신건강 및 자살예방 사업을 직접
                  수행하는 기초정신건강복지센터는 전국 시군구별로 모두 있었지만,
                  인력 구성에서 차이가 있었습니다.
                </Line>
                <br /> <br />
                <Line>
                  전남 고흥군정신건강복지센터는 지난해 11월과 올해 3월
                  육아휴직자가 생겨 기간제 직원을 2명 채용하려 했지만 녹록지
                  않았습니다. 4월5일에 냈던 채용공고에서는 지원자가 없어 4월19일
                  다시 공고를 올렸습니다. 5월에 한 명을 선발했지만, 1월에
                  합격했던 직원이 건강상의 이유로 두 달 만에 그만뒀습니다.
                  여전히 한 자리는 공석이지만, 몇 달 뒤면 돌아올 직원을 기다리고
                  있습니다. 그때까지의 사례관리와 업무는{' '}
                  <Underline>
                    현재 근무하는 요원들이 나눠서 맡고 있습니다.
                  </Underline>{' '}
                  고흥군정신건강복지센터는{' '}
                  <Underline>
                    개소 이후 근무했던 정신건강전문요원이 아무도 없었습니다.
                  </Underline>{' '}
                  일반인력을 채용하기도 어려웠습니다. 고흥군만의 상황이
                  아닙니다.
                </Line>
                <br /> <br />
                <Line>
                  정신건강복지센터의 지역별 인력 불균형을 알아보기 위해 올해 3월
                  기준 전국 기초정신건강복지센터 인력 현황을
                  정보공개청구했습니다. 국립정신건강센터에 청구했을 때는{' '}
                  <Underline>‘부존재’</Underline> 통지를 받았습니다. 2022년 12월
                  기준으로 전수조사한 자료가 있지만{' '}
                  <Underline>
                    인력 확보 상황에 관해 지자체에서 공개를 꺼린다는 이유입니다.
                  </Underline>{' '}
                  그렇게 각 광역자치단체에 정보공개청구하고, 청구 내용이
                  기초자치단체로 이송되는 등의 과정을 거쳐{' '}
                  <Underline>
                    한 달 만에 전국 244개 정신건강복지센터의 인력 현황을
                    입수했습니다.{' '}
                  </Underline>
                </Line>
              </Paragraph>
              <Gap size="100px" />
              <MentalHealthCenterMap />

              <Paragraph style={{ marginBottom: 0 }}>
                <ReferenceBox>
                  <Reference>
                    * 정신건강전문인력: 정신건강의학과 전문의, 정신건강 간호사,
                    정신건강 사회복지사,
                    <br /> 정신건강 임상심리사, 정신건강 작업치료사
                  </Reference>
                  <Reference>
                    * 정신건강일반인력: 간호사, 사회복지사, 임상심리사
                  </Reference>
                  <Reference>* 기타인력: 간호조무사, 기타 행정직</Reference>
                </ReferenceBox>
                <Line>
                  분석 결과 정신건강 전문인력이 한 명도 없는
                  기초정신건강복지센터는 전남 고흥군, 경남 함양군, 충남 보령시
                  등 15개. 한 명만 있는 곳도 21곳입니다.{' '}
                  <Underline>
                    농어촌 지역과 도시 지역의 평균 전문인력 비율은 2배 이상 차이
                    났습니다.
                  </Underline>{' '}
                  농어촌 지역(군 단위)의 정신건강복지센터에서는 전체 인력 중
                  전문인력이 평균 25.7%, 도시지역(시구 단위)에서는 53.1%입니다.{' '}
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
  padding: 200px 0;

  @media screen and (max-width: 425px) {
    padding: 50px 0 0;
  }
`;
