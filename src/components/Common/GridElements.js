import styled from 'styled-components/macro';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding-bottom: 3.438rem;

  @media screen and (max-width: 425px) {
    padding-bottom: 102px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 20px;
  color: #fff;
  line-height: 40px;
  white-space: pre-line;
  width: 600px;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    width: 75vw;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
    width: 75vw;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 375px) {
    font-size: 16px;
    line-height: 30px;
    width: 75vw;
    margin-bottom: 20px;
  }
`;

export const Line = styled.div`
  position: relative;
  font-size: 20px;
  line-height: 40px;
  text-align: justify;
  display: flex;
  z-index: 3;
  color: #fff;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 910px;
  height: 550px;
  margin-top: 40px;

  @media screen and (max-width: 1075px) {
    width: 83vw;
    min-width: 200px;
  }

  @media screen and (max-width: 375px) {
    // 모바일에서는 지도 제거
    display: none;
  }
`;

export const Reference = styled.div`
  text-align: left;
  font-size: 12px;
  line-height: 170%;
  margin: 10px;
`;

/**
 * export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 20px;
  color: #fff;
  line-height: 40px;
  white-space: pre-line;
  width: 600px;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    width: 75vw;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
    width: 75vw;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 375px) {
    font-size: 16px;
    line-height: 30px;
    width: 75vw;
    margin-bottom: 20px;
  }
`;

 */

export const ReferenceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: #aaaaaa;
  font-family: 'Pretendard-Regular';

  margin-bottom: 100px;
  border: 0.5px solid #aaaaaa;
  padding: 10px;
`;
export const HideOnLargeScreens = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  margin-top: 50px;
  @media (min-width: 375px) {
    display: none;
  }
`;
export const ReferenceWrapper = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  color: #aaaaaa;
  font-family: 'Noto Serif KR', serif;
  text-align: right;
  margin-top: 20.5px;

  span:nth-child(1) {
    font-size: 15px;
    line-height: 21.5px;
    margin-bottom: 2px;
  }

  span:nth-child(2) {
    font-size: 13px;
    line-height: 18.5px;
  }

  span:nth-child(3) {
    font-size: 11px;
    line-height: 21.5px;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 1075px) {
    width: 83vw;
  }
  @media screen and (max-width: 375px) {
    width: 80vw;
    span:nth-child(1) {
      font-size: 13px;
      line-height: 17px;
      margin-bottom: 2px;
    }

    span:nth-child(2) {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 425px) {
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 41px;
  text-align: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 375px) {
    font-size: 23px;
    max-width: 83vw;
    line-height: 25px;
    margin-bottom: 50px;
    overflow-wrap: break-word; /* 글자 줄바꿈 */
    word-break: break-word; /* 긴 단어 줄바꿈 */
    white-space: normal; /* 기본 줄바꿈 */
  }
`;

export const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  width: 650px;

  @media screen and (max-width: 620px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
  }

  @media screen and (max-width: 300px) {
    width: 80vw;
  }
`;

export const GuideLine = styled.h3`
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -1px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
    &:nth-child(2) {
      display: none;
    }
  }
`;
export const SearchBox = styled.div`
  display: grid;
  color: black;
  margin: 24px 0 0 0;
  column-gap: 20px;
  grid-template-columns: 200px 200px;

  @media screen and (max-width: 375px) {
    display: grid;
    row-gap: 8px;
    grid-template-columns: 80vw;
    margin: 20px 0 0 0;
  }
`;

export const ResultWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 40px 0 0 0;

  @media screen and (max-width: 375px) {
    margin: 25px 0 0 0;
  }

  @media screen and (max-width: px) {
    margin: 25px 0 0 0;
  }
`;

export const District = styled.span`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #aaaaaa;
  white-space: nowrap;
  margin-bottom: 5px;

  @media screen and (max-width: 425px) {
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 10px;
  }
`;

export const EmptyHouseResult = styled.div`
  margin: 0 40px;
  padding: 21px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaaaaa;
  width: 620px;

  @media screen and (max-width: 620px) {
    width: 83vw;
  }

  @media screen and (max-width: 425px) {
    width: 354px;
    margin: 0 30px;
    padding: 26px 0 13px;
  }

  @media screen and (max-width: 354px) {
    width: 83vw;
  }
`;

export const ExtinctResult = styled.div`
  margin: 0 40px;
  padding: 21px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaaaaa;
  width: 620px;

  @media screen and (max-width: 620px) {
    width: 83vw;
  }

  @media screen and (max-width: 425px) {
    width: 354px;
    margin: 0 30px;
    padding: 26px 0 25px;
  }

  @media screen and (max-width: 354px) {
    width: 83vw;
  }
`;

export const ExtinctIndex = styled.div`
  display: flex;
  color: ${(props) =>
    props.idx >= 1.5
      ? '#007200'
      : props.idx >= 1.0
      ? '#85bf4c'
      : props.idx >= 0.5
      ? '#ffff33'
      : props.idx >= 0.2
      ? '#ff8433'
      : '#e20707'};
  font-size: 45px;
  font-weight: 800;
  line-height: 61px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 425px) {
    font-size: 37px;
    font-weight: 800;
    line-height: 45px;
  }

  @media screen and (max-width: 375px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

export const EmptyIndex = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ color }) => color};
  width: 100%;

  font-size: ${({ size }) => (size ? size : '45px')};
  font-weight: 800;
  line-height: 61px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 425px) {
    font-size: 25px;
    line-height: 45px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    line-height: 40px;
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid #aaaaaa;
  opacity: 80%;
  margin: 19px 0;
  width: 91.5%;

  @media screen and (max-width: 425px) {
    margin: 24px 0 10px;
  }
`;

export const Divider2 = styled.div`
  border-bottom: 1px solid #aaaaaa;
  opacity: 80%;
  margin: 19px 0;
  width: 91.5%;

  @media screen and (max-width: 425px) {
    margin: 24px 0 25px;
  }
`;

export const Unit = styled.div`
  display: flex;
`;

export const Sentence = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  line-height: 22.7px;
  gap: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  white-space: nowrap;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    font-size: 16px;
    line-height: 25px;
  }
`;

export const ExtinctAlert = styled.span`
  font-size: 20px;
  line-height: 27.24px;
  text-align: center;
  color: ${(props) =>
    props.idx >= 1.5
      ? '#007200'
      : props.idx >= 1.0
      ? '#85bf4c'
      : props.idx >= 0.5
      ? '#ffff33'
      : props.idx >= 0.2
      ? '#ff8433'
      : '#e20707'};

  @media screen and (max-width: 355px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const HouseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  span {
    font-size: 20px;
    font-weight: 500;
    text-align: right;

    @media screen and (max-width: 425px) {
      font-size: 13px;
    }
  }
`;

// Legend

export const LegendContainer = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 990;
  width: fit-content;

  @media screen and (max-width: 768px) {
    left: 10px;
    bottom: 10px;
  }
`;

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  line-height: 17px;
  color: #333;
`;

export const LegendTitle = styled.div`
  margin: 6px 0;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.2px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const LegendContent = styled.span`
  position: relative;
  top: 0px;
  width: 100px;
  margin-left: 8px;
  font-size: 11px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
    top: -2px;
  }
`;

export const LegendColor = styled.div`
  width: 18px;
  height: 18px;
  float: left;
  opacity: 1;

  @media screen and (max-width: 768px) {
    width: 13px;
    height: 13px;
  }
`;

export const LegendEl = styled.div`
  margin-bottom: -1px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-bottom: -6px;
  }
`;

export const MarkerGuideWrapper = styled.div`
  padding: 8px 8px 0.5px 12px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  line-height: 17px;
  color: #555;
  margin-top: 7px;
`;
