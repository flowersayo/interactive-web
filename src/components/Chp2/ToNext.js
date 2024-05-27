import React from 'react';
// 컴포넌트
import { Button } from '../Common/Button';
// outro 배경 이미지
import bgImg from '../../assets/images/Chp2/outBg.webp';
import ToNextForm from '../Common/End';

const ToNextChp = () => {
  return (
    <ToNextForm bgImg={bgImg}>
      <Button to="/chp1" big="true" prev="true">
        이전 내용 보기
      </Button>
      <Button to="/chp3" big="true">
        다음 내용 보기
      </Button>
    </ToNextForm>
  );
};

export default ToNextChp;