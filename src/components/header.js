import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { black, orange_dark, orange_light } from "../utilities/colors";

import CookieGraphic from "../images/top_right.svg";

const Wrap = styled.div`
  color: ${black};
`;
const TopSectionWrap = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  margin: 1rem 2rem;
`;

const Brand = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 5rem;
`;
const LargeGraphic = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  z-index: -5;
`;
const LinksContainer = styled.ul`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;

  a {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    margin: 0.5rem 1rem;
    color: ${black};
    text-decoration: none;
    font-size: 1.8rem;
  }

  /* The underline thing */
  a.active:after {
    content: "";

    width: 70%;
    position: absolute;
    left: 15%;
    bottom: -0.75rem;

    border-width: 0 0 2px;
    border-style: solid;
    border-color: ${orange_light};
  }
`;
const InfoWrapper = styled.div`
  width: 45%;
  margin: 12% 2rem;
`;
const Info = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.2;
  color: ${black};
  margin: 0.5rem;
  margin-left: 0;
  padding: 0.5rem;
  padding-left: 1.5rem;
  border-left: 2px solid ${orange_light};
`;
const InfoButton = styled.button`
  margin: 2rem 4rem;
  padding: 1rem 4rem;
  border-radius: 3rem;
  border: none;
  background: linear-gradient(
    75deg,
    rgba(250, 175, 59, 1),
    rgba(246, 146, 30, 1)
  );
  font-family: "Ubuntu", sans-serif;
  font-size: 2rem;
  color: white;
`;

const Header = () => (
  <Wrap>
    <TopSectionWrap>
      <Brand>Сказка</Brand>
      <LinksContainer>
        <Link to="#about" className="active">
          О Нас
        </Link>
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
      <InfoButton>Где Мы</InfoButton>
    </InfoWrapper>
  </Wrap>
);

export default Header;
