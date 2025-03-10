import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { handleMenu } from './../../modules/menuReducer';
import LogoSrc from '../../assets/images/Logo/Logo.png';

import HorizontalIndicator from './HorizontalIndicator';

const Navbar = () => {
  const [reduce, setReduce] = useState(true);

  const location = useLocation();
  const [path, setPath] = useState(null);
  const [navbar, setNavbar] = useState(false);

  const { open } = useSelector((state) => ({ open: state.menu.open }));
  const dispatch = useDispatch();
  const onClickMenu = () => dispatch(handleMenu());

  let style = {
    backgroundColor: !open && !navbar ? 'transparent' : '#000',
    transition: '0.4s',
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 88) {
        setNavbar(true);
        if (window.innerWidth >= 768) {
          if (location.pathname === '/') {
            setPath(
              '시골 늙은이 마음은 누가 풀어주나? : 데이터로 보는 지역별 정신건강 불평등'
            );
          }
        }
      } else {
        setNavbar(false);
        setPath(null);
      }
    };

    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [location.pathname]);

  useEffect(() => {
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const reduceSize = () => {
      if (
        window.scrollY >= 60 &&
        window.scrollY < winHeightPx - window.innerHeight
      ) {
        setReduce(false);
      } else {
        setReduce(true);
      }
    };

    window.addEventListener('scroll', reduceSize);
    return () => {
      window.removeEventListener('scroll', reduceSize);
    };
  }, [reduce]);

  const refreshPage = () => {
    window.location.assign('/');
  };

  return (
    <>
      <Nav reduce={reduce} style={style}>
        {/* 현재 경로 띄우기 */}
        <CurrentPath>{path}</CurrentPath>
        <Logo src={LogoSrc} reduce={navbar} />
      </Nav>
      {/* 수평 스크롤 인디케이터 */}
      <HorizontalIndicator />
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 88px;
  background: #000;
  padding: 22px 0;
  z-index: 9999;
  position: fixed;
  width: 100%;

  @media screen and (max-width: 375px) {
    height: 60px;
    transition: height 0.4s;
    padding: 20px 0;
  }
`;

const Logo = styled.img`
  position: absolute;
  cursor: pointer;

  top: 0;
  bottom: 0;
  left: 44px;
  margin: auto 0;
  width: 70px;
  display: ${({ reduce }) => (reduce ? 'block' : 'none')};
  transition: display 0.4s;

  @media screen and (max-width: 425px) {
    left: 20px;
    display: ${({ reduce }) => (reduce ? 'block' : 'none')};
    transition: display 0.4s;
  }

  @media screen and (max-width: 315px) {
    width: 55vw;
    display: ${({ reduce }) => (reduce ? 'block' : 'none')};
    transition: display 0.4s;
  }
`;

const CurrentPath = styled.span`
  position: absolute;
  left: 150px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: block;
  color: #fff;
  font-size: 16px;
  height: 18px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledBurger = styled.div`
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 44px;
  margin: auto 0;

  div {
    width: 30px;
    height: 4px;
    background-color: #fff;
    transform-origin: center;
    display: block;

    &:nth-child(1) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      top: 0px;
      position: absolute;
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      transition: all 100ms linear;
      top: 8px;
      position: absolute;
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      transition: all 100ms linear;
      top: 8px;
      position: absolute;
    }

    &:nth-child(4) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      top: 16px;
      position: absolute;
    }
  }

  @media screen and (max-width: 425px) {
    right: 20px;
  }
`;

const NavBtn = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 119.84px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
