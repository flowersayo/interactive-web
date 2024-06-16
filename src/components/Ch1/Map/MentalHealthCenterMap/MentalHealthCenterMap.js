import React, { useState, useEffect, useCallback } from 'react';
import {
  MapContainer,
  GeoJSON,
  ZoomControl,
  Marker,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import AnimatedNumber from 'react-animated-numbers';
import Select from 'react-select';
import {
  Section,
  TitleSection,
  Title,
  Paragraph,
  Line,
  InfoWrapper,
  ResultWrapper,
  InfoRow,
  Column1,
  GuideWrapper,
  GuideLine,
  SearchBox,
  EmptyHouseResult,
  EmptyIndex,
  Divider,
  Sentence,
  District,
  MapWrapper,
  ReferenceWrapper,
  LegendContainer,
  LegendWrapper,
  LegendTitle,
  LegendContent,
  LegendColor,
  LegendEl,
  Unit,
  Reference,
} from '../../../Common/GridElements';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import markerC from '../../../../assets/images/markerCur.svg';
import '../../../Common/Map.css';
import subBg from '../../../../assets/images/subBg.webp';
import geoJson from './sgg_mhc_combined_4326.json';
import '../Map.css';
import styled from 'styled-components';
import { color } from 'd3';
import { fontWeight } from 'kepler.gl/dist/styles/base';

// geoJson : 전체 데이터
// geoJsonData : features 속성

const geoJsonData = geoJson.features; // 정적 데이터

// 메인 컴포넌트
const MentalHealthCenterMap = () => {
  const [siDoName, setSiDoName] = useState(''); // 화면에 출력되는 용
  const [siGunGuName, setSiGunGuName] = useState('');
  const [proCnt, setProCnt] = useState(null); // 전문 요원 숫자
  const [genCnt, setGenCnt] = useState(null); // 일반 요원 숫자
  const [etcCnt, setEtcCnt] = useState(null); // 기타 인력 숫자

  const [percentage, setPercentage] = useState(null); // 정신 건강 전문 요원 비율
  const [searchPosition, setSearchPosition] = useState(null); // 클릭된 곳 위치

  const SelectBox = () => {
    const [selectedSiDo, setSelectedSiDo] = useState('');
    const [selectedSiGunGu, setSelectedSiGunGu] = useState('');

    const SiDoOptions = [
      ...new Set(geoJsonData.map((district) => district.properties.sd_nm)),
    ].sort();

    // index 추가한 객체 배열
    const SiDoOption = SiDoOptions.map((district, index) => ({
      value: index,
      label: district,
    }));

    // 선택한 시도와 일치하는 시군구 목록 추출
    const SiGunGuOptions = geoJsonData.filter(
      (district) => district.properties.sd_nm === selectedSiDo
    );

    // unique 한 시군구 목록 추출
    let SiGunGuOption = [
      ...new Set(SiGunGuOptions.map((district) => district.properties.sgg_nm)),
    ].sort();

    SiGunGuOption = SiGunGuOption.map((district, index) => ({
      value: index,
      label: district,
    }));

    useEffect(() => {
      const searchResults = geoJsonData.filter(
        (district) =>
          district.properties.sd_nm === selectedSiDo &&
          district.properties.sgg_nm === selectedSiGunGu
      );

      if (searchResults.length) {
        // 검색 결과가 존재한다면
        setSiDoName(searchResults[0].properties.sd_nm);
        setSiGunGuName(searchResults[0].properties.sgg_nm);

        setPercentage(searchResults[0].properties.pro_rate);
        setProCnt(searchResults[0].properties.pro_num);
        setGenCnt(searchResults[0].properties.gen_num);
        setEtcCnt(searchResults[0].properties.etc_num);

        setSearchPosition({
          lat: searchResults[0].properties.lat,
          lng: searchResults[0].properties.lng,
        });
      }
    }, [selectedSiGunGu]);

    const handleSiDoInputChange = useCallback((e) => {
      setSelectedSiDo(e.label);
      setSelectedSiGunGu('');
    }, []);

    const handleSiGunGuInputChange = useCallback((e) => {
      setSelectedSiGunGu(e.label);
    }, []);

    return (
      <>
        <SearchBox>
          <Select
            options={SiDoOption}
            onChange={handleSiDoInputChange}
            noOptionsMessage={() => null}
            placeholder="시도 선택"
            menuPortalTarget={document.querySelector('body')}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: '#FF8A00',
                primary: '#FF8A00',
              },
            })}
          />

          <Select
            options={SiGunGuOption}
            onChange={handleSiGunGuInputChange}
            noOptionsMessage={() => `없음`}
            menuPortalTarget={document.querySelector('body')}
            placeholder="시군구 선택"
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: '#FF8A00',
                primary: '#FF8A00',
              },
            })}
          />
        </SearchBox>
      </>
    );
  };

  // 소멸지도의 스타일 설정
  const mapStyle = {
    weight: 0.3,
    color: '#171717',
    fillOpacity: 1,
  };

  // 각 지역 또는 레이어에 대한 특성 설정
  const onEachDistrict = (district, layer) => {
    layer.options.fillColor = getColor(district.properties.pro_rate); // 정신 건강 전문 요원 비율(0과 100 사이의 값)에 따른 레이어 색 설정

    const sido = district.properties.sd_nm;
    const sigungu = district.properties.sgg_nm;
    const percentage = district.properties.pro_rate; // 정신 건강 전문 요원 비율

    const pro_num = district.properties.sum; // 레이어의 전문 요원 수
    const gen_num = district.properties.gen_num;
    const etc_num = district.properties.etc_num;
    const clickedLat = district.properties.lat; // 레이어의 lat 설정
    const clickedLng = district.properties.lng; // 레이어의 lng 설정

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: (e) => {
        L.DomEvent.stopPropagation(e); // 다른 이벤트와 충돌 방지
        setSiGunGuName(sigungu);
        setSiDoName(sido);
        setPercentage(percentage);
        setProCnt(pro_num);
        setGenCnt(gen_num);
        setEtcCnt(etc_num);
        setSearchPosition({ lat: clickedLat, lng: clickedLng }); // 검색위치 설정
      },
    });
  };

  // 검색한 지역 위치로 지도 이동, 마커로 표시
  const SearchMarker = () => {
    const map = useMap();

    // 화면상에 클릭한 좌표로 중심점 이동

    console.log(searchPosition.lat, searchPosition.lng);
    map.setView([searchPosition.lat, searchPosition.lng], 10);

    // position이 null값이면 마커를 표시하지 않고, null값이 아니면 마커를 보여준다
    return <Marker position={searchPosition} icon={icon} />;
  };

  const isResultFetched =
    percentage != null && proCnt != null && genCnt != null && etcCnt != null;

  return (
    <Section background={subBg}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TitleSection>
              <Title>기초정신건강복지센터 전문인력 비율</Title>
              {/**  <Paragraph>
               <Line>
                  ㅇㅇ를 바탕으로 2024년 전국 시군구 단위 정신 건강 전문 요원
                  비율 지도를 만들었습니다.
                </Line> 
              </Paragraph>
              */}
              <GuideWrapper>
                <GuideLine>
                  아래 필터에 원하는 지역을 입력하면 결과를 확인할 수 있습니다.
                </GuideLine>
              </GuideWrapper>
            </TitleSection>

            {geoJsonData && <SelectBox />}

            {isResultFetched && (
              <>
                <ResultWrapper>
                  <EmptyHouseResult>
                    <District>
                      {siDoName} {siGunGuName}
                    </District>
                    <EmptyIndex color={getColor(percentage)} size={'35px'}>
                      기초정신건강복지센터 전문인력 비율&nbsp;
                      <AnimatedNumber
                        animateToNumber={`${
                          percentage.toString().split('.')[0]
                        }`} // 정수 부문
                        config={{ tension: 89, friction: 40 }}
                      />
                      .
                      <AnimatedNumber
                        animateToNumber={`${
                          percentage.toFixed(1).toString().split('.')[1]
                        }`} // 소수 부문
                        config={{
                          tension: 89,
                          friction: 40,
                        }}
                      />
                      %
                    </EmptyIndex>
                    <Divider />
                    <Sentence>
                      <Unit>
                        <b>*전문 인력 : &nbsp;</b>
                        <AnimatedNumber
                          animateToNumber={proCnt}
                          includeComma
                          fontStyle={{
                            color: getColor(percentage),
                          }}
                          config={{
                            tension: 89,
                            friction: 40,
                          }}
                        />{' '}
                        명
                      </Unit>
                      <Unit>
                        <b>*일반 인력 : &nbsp;</b>
                        <AnimatedNumber
                          animateToNumber={genCnt}
                          includeComma
                          fontStyle={{
                            color: getColor(percentage),
                          }}
                          config={{ tension: 89, friction: 40 }}
                        />{' '}
                        명
                      </Unit>
                      <Unit>
                        <b>*기타 인력 : &nbsp;</b>
                        <AnimatedNumber
                          animateToNumber={etcCnt}
                          includeComma
                          fontStyle={{
                            color: getColor(percentage),
                          }}
                          config={{ tension: 89, friction: 40 }}
                        />{' '}
                        명
                      </Unit>
                    </Sentence>
                  </EmptyHouseResult>
                </ResultWrapper>
              </>
            )}
          </Column1>
          <MapWrapper>
            <MapContainer
              style={{ height: '100%', width: '100%' }}
              zoom={7}
              scrollWheelZoom={false}
              zoomControl={false}
              // attributionControl={false}
              // 충청남도 진산면
              center={[36.1443, 127.3702]}
            >
              {geoJsonData && (
                <GeoJSON
                  style={mapStyle}
                  data={geoJsonData}
                  onEachFeature={onEachDistrict}
                />
              )}
              {searchPosition && <SearchMarker />}
              <ZoomControl position="bottomright" />
            </MapContainer>
            <Legend />
          </MapWrapper>

          <ReferenceWrapper>
            <span> 기초정신건강복지센터 전문인력 비율 지도</span>
            <span>출처: 광역·기초자치단체별 정보공개청구</span>
            <span>※ 기준: 2024년 3월, 비상근직 포함</span>
          </ReferenceWrapper>
        </InfoRow>
      </InfoWrapper>
    </Section>
  );
};

class Legend extends React.Component {
  render() {
    return (
      <LegendContainer>
        <LegendWrapper>
          <LegendTitle>전문인력 비율</LegendTitle>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#1A9641' }} />
            <LegendContent>81% ~ 100%</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#78C35D' }} />
            <LegendContent>65.2% ~ 80.9%</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#C5E687' }} />
            <LegendContent>52.2% ~ 65.1%</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#FFFFC0' }} />
            <LegendContent>38.9% ~ 52.1%</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#FEC981' }} />
            <LegendContent>25% ~ 38.8%</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#F07C49' }} />
            <LegendContent>9.1% ~ 24.9%</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#D7191D' }} />
            <LegendContent>9% 이하</LegendContent>
          </LegendEl>
        </LegendWrapper>
      </LegendContainer>
    );
  }
}

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: markerC,
});

// 지도 범례 색 지정
const getColor = (d) => {
  return d >= 81
    ? '#1A9641'
    : d >= 65.2
    ? '#78C35D'
    : d >= 52.2
    ? '#C5E687'
    : d >= 38.9
    ? '#FFFFC0'
    : d >= 25
    ? '#FEC981'
    : d >= 9.1
    ? '#F07C49'
    : '#D7191D';
};

// 마우스를 올린(Hover) 레이어의 스타일 지정
const highlightFeature = (e) => {
  let layer = e.target; // 이벤트가 발생한 레이어 설정
  // 레이어 스타일 설정
  layer.setStyle({
    weight: 1.5,
    color: '#171717',
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
};

// 마우스를 올리지 않은 레이어의 스타일 기본으로 리셋
const resetHighlight = (e) => {
  let layer = e.target; // 이벤트가 발생한 레이어 설정
  // 레이어 스타일 설정
  layer.setStyle({
    weight: 0.3,
    color: '#171717',
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: '#9e9e9e',
    minHeight: '45px',
    height: '45px',
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: '45px',
    padding: '0 6px',
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: (state) => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '45px',
  }),
};

const Bottom = styled.div`
  display: flex;
  width: 910px;
  flex-direction: row;
  justify-content: space-between;
`;

export default React.memo(MentalHealthCenterMap);
