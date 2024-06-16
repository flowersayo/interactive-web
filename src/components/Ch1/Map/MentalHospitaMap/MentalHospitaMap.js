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
} from '../../../Common/GridElements';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import markerC from '../../../../assets/images/markerCur.svg';
import '../../../Common/Map.css';
import subBg from '../../../../assets/images/subBg.webp';
import geoJson from './sgg_menhos_combined_4326.json';

// geoJson : 전체 데이터
// geoJsonData : features 속성

const geoJsonData = geoJson.features; // 정적 데이터

// 메인 컴포넌트
const MentalHospitaMap = () => {
  const [siDoName, setSiDoName] = useState(''); // 화면에 출력되는 용
  const [siGunGuName, setSiGunGuName] = useState('');
  const [cnt, setCnt] = useState(null); // 정신건강 의료기관 수
  const [cntPerPoP, setCntPerPop] = useState(null); // 인구 10만명 당 의료기관 수
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

        setCnt(searchResults[0].properties.menhos_num);
        setCntPerPop(searchResults[0].properties.rate);

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
    layer.options.fillColor = getColor(district.properties.menhos_num); // 자살률(0과 100 사이의 값)에 따른 레이어 색 설정

    const sido = district.properties.sd_nm;
    const sigungu = district.properties.sgg_nm;
    const count = district.properties.menhos_num; // 정신건강 의료기관 수
    const countPerPop = district.properties.rate; // 10만명 당 인구수

    const clickedLat = district.properties.lat; // 레이어의 lat 설정
    const clickedLng = district.properties.lng; // 레이어의 lng 설정

    /*
    let regexp = /^\D{1,}시\D{1,}구/g;

    let spaced = regexp.test(district.properties.adm_nm.split(' ')[1])
      ? `${district.properties.adm_nm.split(' ')[1].split('시')[0]}시 ${
          district.properties.adm_nm.split(' ')[1].split('시')[1]
        }`
      : district.properties.adm_nm.split(' ')[1];

    const sigungu = spaced; // 레이어의 시군구 설정
    */

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: (e) => {
        L.DomEvent.stopPropagation(e); // 다른 이벤트와 충돌 방지
        setSiGunGuName(sigungu);
        setSiDoName(sido);
        setCnt(count);
        setCntPerPop(countPerPop);
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
  console.log(cnt);

  return (
    <>
      <Section background={subBg}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TitleSection>
                <Title>시군구별 정신건강 의료기관 수</Title>
                {/**  <Paragraph>
               <Line>
                  ㅇㅇ를 바탕으로 2024년 전국 시군구 단위 정신 건강 전문 요원
                  비율 지도를 만들었습니다.
                </Line> 
              </Paragraph>
              */}
                <GuideWrapper>
                  <GuideLine>
                    아래 필터에 원하는 지역을 입력하시면 정신건강 의료기관 수를
                    확인할 수 있습니다.
                  </GuideLine>
                </GuideWrapper>
              </TitleSection>

              {geoJsonData && <SelectBox />}

              {cnt != null && cntPerPoP != null ? (
                <>
                  <ResultWrapper>
                    <EmptyHouseResult>
                      <District>
                        {siDoName} {siGunGuName}
                      </District>

                      <Unit>( 2024년 1월 기준 )</Unit>
                      <EmptyIndex idx={Number(cnt)} size={'30px'}>
                        정신건강 의료기관{' '}
                        <AnimatedNumber
                          animateToNumber={cnt} // 정수 부문
                          config={{ tension: 89, friction: 40 }}
                        />
                        개
                      </EmptyIndex>
                      <Divider />

                      <Sentence>
                        <Unit>
                          <b> 인구 10만명 당 정신건강 의료기관 수&nbsp;</b>
                          <AnimatedNumber
                            animateToNumber={cntPerPoP.toString().split('.')[0]}
                            includeComma
                            config={{ tension: 89, friction: 40 }}
                          />
                          .
                          <AnimatedNumber
                            animateToNumber={
                              cntPerPoP.toFixed(2).toString().split('.')[1]
                            }
                            includeComma
                            config={{ tension: 89, friction: 40 }}
                          />
                          {'  '}개
                        </Unit>
                      </Sentence>
                      <br />
                    </EmptyHouseResult>
                  </ResultWrapper>
                </>
              ) : null}
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
              <span>정신건강 무의촌 지도</span>
              <span> ( 출처: 건강보험심사평가원 ) </span>
              <span>
                ※ 기준: 2024년 1월 기준 시군구별 정신건강의학과(보건기관 제외)
              </span>
            </ReferenceWrapper>
          </InfoRow>
        </InfoWrapper>
      </Section>
    </>
  );
};

class Legend extends React.Component {
  render() {
    return (
      <LegendContainer>
        <LegendWrapper>
          <LegendTitle>정신건강 의료기관 수</LegendTitle>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#B22222' }} />
            <LegendContent>0</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: '#808080' }} />
            <LegendContent>1 이상 </LegendContent>
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
const getColor = (cnt) => {
  return cnt == 0 ? '#B22222' : '#808080';
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

export default React.memo(MentalHospitaMap);
