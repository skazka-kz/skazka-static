import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import CookieGraphic from "../images/top_right_graphic_small.svg";

const Wrap = styled.div``;
const TopSectionWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 4rem;
`;
const Brand = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 5rem;
`;
const LargeGraphic = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  z-index: -5;
`;
const LinksContainer = styled.ul`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;

  a {
    font-family: "Open Sans", sans-serif;
    margin: 0.5rem 1rem;
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
  }
`;
const InfoWrapper = styled.div``;
const Info = styled.div``;
const InfoButton = styled.button``;

const Header = () => (
  <Wrap>
    <TopSectionWrap>
      <Brand>Сказка</Brand>
      <LinksContainer>
        <Link to="#about">О Нас</Link>
        <Link to="#contacts">Где Мы</Link>
        <Link to="/blog">Новости</Link>
        <Link to="/products">Продукция</Link>
      </LinksContainer>
      <LargeGraphic src={CookieGraphic} />
    </TopSectionWrap>
    <InfoWrapper>
      <Info>
        Компания Сказка занимается дистрибуцией кондитерской продукции на
        территории Акмолинской и Северо-Казахстанской области
      </Info>
      <infoButton>Где Мы</infoButton>
    </InfoWrapper>
  </Wrap>
);

export default Header;
