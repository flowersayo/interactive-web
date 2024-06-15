import React from 'react';
import { Element } from 'react-scroll';
// 컴포넌트
import ScrollIndicator from '../components/Chp/ScrollIndicator';
import SEO from '../components/Common/SEO';
import Title from '../components/Chp/Title';
import SubTitle1 from '../components/Chp/SubTitle1';
import SubTitle2 from '../components/Chp/SubTitle2';
import SubTitle3 from '../components/Chp/SubTitle3';
import SubTitle4 from '../components/Chp/SubTitle4';
import SubTitle5 from '../components/Chp/SubTitle5';
import End from '../components/Common/End';
import outBgSrc from '../assets/images/Chp/outBg.webp';

import subBg from '../assets/images/subBg.webp';
import SeniorSuicideMap from '../components/Ch1/Map/SeniorSuicideMap/SeniorSuicideMap';

const Chp3 = () => {
  const chp3 = {
    title: `시골 늙은이 마음은 누가 풀어주나?`,
    image: Image,
    description: `제 3장 공생과 공멸사이입니다.`,
    hashtag: `#소멸의 땅 #공생과 공멸사이`,
  };

  return (
    <>
      <ScrollIndicator />
      <SEO
        title={chp3.title}
        image={chp3.image}
        description={chp3.description}
        hashtag={chp3.hashtag}
      />
      <Title />

      {/* 제1부 농어촌 덮친 노인자살 */}
      <Element id="section-1">
        <SubTitle1 background={subBg} />
      </Element>
      {/* 제2부 농어촌 3곳 중 1곳이 '정신건강 의료 공백' */}
      <Element id="section-2">
        <SubTitle2 background={subBg} />
      </Element>
      {/* 제3부 전문요원 없는 정신건강복지센터 15곳... 농어촌 정신건강 인력난 */}
      <Element id="section-3">
        <SubTitle3 background={subBg} />
      </Element>

      <End bgImg={outBgSrc} />
    </>
  );
};

export default Chp3;
