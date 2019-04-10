import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import { black, orange_light } from "../utilities/colors";

import CookieGraphic from "../images/top_right.svg";

const Wrap = styled.div`
  color: ${black};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const TopSectionWrap = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  margin: 1rem 2rem;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Brand = styled(Link)`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 7rem;
  text-decoration: none;
  color: ${black};

  @media (max-width: 1440px) {
    font-size: 5rem;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 599px) {
    font-size: 5rem;
  }
`;
const LargeGraphic = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  z-index: -5;

  @media (max-width: 768px) {
    display: none;
  }
`;
const LinksContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 1024px) {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 599px) {
  }

  a {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    margin: 0.5rem 1rem;
    color: ${black};
    text-decoration: none;
    font-size: 2.4rem;

    @media (max-width: 1440px) {
      font-size: 1.8rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.3rem;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 599px) {
      font-size: 0.9rem;
      text-align: center;
      margin: 0.1rem;
    }
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

  @media (max-width: 768px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;
const Info = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 2.8rem;
  line-height: 1.2;
  color: ${black};
  margin: 0.5rem;
  margin-left: 0;
  padding: 0.5rem;
  padding-left: 1.5rem;
  border-left: 2px solid ${orange_light};

  @media (max-width: 1440px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 599px) {
    padding: 2rem 1rem;
    margin: 0;
    border: none;
    text-align: center;
  }
`;
const InfoButton = styled.a`
  display: inline-block;
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
  font-size: 3rem;
  color: white;
  text-decoration: none;

  @media (max-width: 1440px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 2rem;
  }

  @media (max-width: 599px) {
    padding: 1rem 3rem;
  }
`;

const Header = ({ isHome }) => (
  <Wrap>
    <TopSectionWrap id="about">
      <Brand to="/">Сказка</Brand>
      <LinksContainer>
        {isHome ? (
          <>
            <a href="#about" className="active">
              О Нас
            </a>
            <a href="#contacts">Где Мы</a>
            <Link to="/blog">Новости</Link>
            <Link to="/products">Продукция</Link>
          </>
        ) : (
          <>
            <Link to="/">Главная</Link>
            <Link to="/blog">Новости</Link>
            <Link to="/products">Продукция</Link>
          </>
        )}
      </LinksContainer>
      {isHome && <LargeGraphic src={CookieGraphic} />}
    </TopSectionWrap>
    {isHome && (
      <InfoWrapper>
        <Info>
          Компания Сказка занимается дистрибуцией кондитерской продукции на
          территории Акмолинской и Северо-Казахстанской области
        </Info>
        <InfoButton href="#contacts">Где Мы</InfoButton>
      </InfoWrapper>
    )}
  </Wrap>
);

Header.propTypes = {
  isHome: PropTypes.bool,
};

Header.defaultProps = {
  isHome: false,
};

export default Header;
