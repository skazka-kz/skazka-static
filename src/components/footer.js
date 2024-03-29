import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";

import { orangeGradient } from "../utilities/colors";

const Wrapper = styled.footer`
  background: ${orangeGradient};
  padding: 2rem 0;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Brand = styled(Link)`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 6rem;
  text-decoration: none;
  color: white;

  @media (max-width: 1440px) {
    font-size: 4rem;
  }

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 850px) {
    font-size: 2rem;
  }

  @media (max-width: 599px) {
    font-size: 5rem;
  }
`;

const LinksContainer = styled.ul`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 599px) {
    width: 100%;
    padding: 1rem 0;
  }

  a {
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 300;
    position: relative;

    @media (max-width: 1024px) {
      font-size: 1.3rem;
    }

    @media (max-width: 599px) {
      font-size: 0.9rem;
      margin: 0rem;
    }
  }

  a.active:after {
    content: "";

    width: 70%;
    position: absolute;
    left: 15%;
    bottom: -0.75rem;
    border-width: 0 0 2px;
    border-style: solid;
    border-color: white;
    opacity: 1;

    transition: all 0.2s;
  }
`;

const Footer = () => (
  <Wrapper>
    <Brand to="/">Сказка</Brand>
    <LinksContainer>
      <Link activeClassName="active" to="/about">
        О Нас
      </Link>
      <Link activeClassName="active" to="/partners">
        Партнёрам
      </Link>
      <Link activeClassName="active" to="/products">
        Продукция
      </Link>
      <Link activeClassName="active" to="/contacts">
        Контакты
      </Link>
    </LinksContainer>
  </Wrapper>
);

export default Footer;
