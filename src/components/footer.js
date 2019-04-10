import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";

import bottomGraphic from "../images/bot.svg";

const Wrapper = styled.footer`
  position: relative;
  height: 25rem;
  background-image: url(${bottomGraphic});
  background-size: cover;
  background-repeat: no-repeat;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    height: 25vh;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 25vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.h1`
  align-self: flex-start;
  font-size: 6rem;
  font-weight: 700;
  color: white;
  margin-left: 10vw;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0;
    align-self: center;
  }
`;
const LinksContainer = styled.ul`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 10rem;

  @media (max-width: 768px) {
    padding: 1rem;
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
  }

  a:after {
    content: "";

    width: 70%;
    position: absolute;
    left: 15%;
    bottom: -2rem;
    border-width: 0 0 2px;
    border-style: solid;
    border-color: white;
    opacity: 0;

    transition: all 0.2s;
  }

  a:hover:after {
    content: "";

    opacity: 1;
    bottom: -0.75rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <Header>Сказка</Header>
    <LinksContainer>
      <Link to="#about" className="active">
        О Нас
      </Link>
      <Link to="#contacts">Где Мы</Link>
      <Link to="/blog">Новости</Link>
      <Link to="/products">Продукция</Link>
    </LinksContainer>
  </Wrapper>
);

export default Footer;
