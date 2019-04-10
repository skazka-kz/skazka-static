import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import logos from "../images/logos";
import { black, orange_light } from "../utilities/colors";
import leftGraphic from "../images/left.svg";
import rightGraphic from "../images/right.svg";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20% 0;
  position: relative;
  padding: 0 2rem;
  color: ${black};

  @media (max-width: 1024px) {
    margin: 5% 0;
    padding: 0;
  }
`;

const FixedImage = styled.img`
  position: absolute;
  z-index: -10;
`;

const LeftGraphic = styled(FixedImage)`
  position: absolute;
  left: 0;
  top: -30%;
  width: 20%;

  @media (max-width: 1024px) {
    top: 0;
  }

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 599px) {
    top: 5%;
  }
`;
const RightGraphic = styled(FixedImage)`
  position: absolute;
  right: 0;
  width: 20%;
  top: -30%;

  @media (max-width: 1024px) {
    top: 0;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`;

const SectionTitle = styled.h1`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 3.3rem;
  line-height: 1.2;
  color: ${black};
  margin-bottom: 6rem;

  @media (max-width: 1440px) {
    font-size: 2.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  &:after {
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

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  background-color: white;
  border-radius: 3rem;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  height: 33rem;
  padding: 2rem;

  img {
    width: 100%;

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 599px) {
      max-height: 100%;
      width: auto;
      max-width: 100%;
    }
  }

  @media (max-width: 1440px) {
    height: 22rem;
  }

  @media (max-width: 1024px) {
    height: 14rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
    margin: 1.5rem;
  }

  @media (max-width: 599px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  max-width: 1100px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 1440px) {
    max-width: 900px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const ContactCard = styled.div`
  margin: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  height: 30rem;
  justify-content: space-between;
  padding-bottom: 5rem;

  @media (max-width: 1440px) {
    height: 25rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
    height: 18rem;
  }
`;

const Name = styled.span`
  position: relative;
  padding: 1rem;
  margin-bottom: 0;
  font-size: 3rem;

  @media (max-width: 1440px) {
    font-size: 2.3rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  &:after {
    content: "";

    width: 70%;
    position: absolute;
    left: 15%;
    bottom: -0.5rem;
    border-width: 0 0 2px;
    border-style: solid;
    border-color: ${orange_light};
  }
`;
const Code = styled.span`
  font-size: 2.2rem;
  font-style: italic;
  font-weight: 300;
  margin: 0.3rem;
  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;
const Phone = styled.span`
  font-size: 2.2rem;
  font-weight: 300;
  margin: 0.3rem;
  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;

const Address = styled.address`
  font-size: 3rem;
  font-weight: 700;
  @media (max-width: 1440px) {
    font-size: 2.2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;
const MapLink = styled.a`
  font-size: 2.2rem;
  color: ${orange_light};
  font-weight: 300;
  text-decoration: none;
  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;

const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Notice = styled.p`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 2.9rem;
  color: ${black};

  @media (max-width: 1440px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ContentWrapper>
      <LeftGraphic src={leftGraphic} alt="Decorative graphic" />
      <SectionTitle>Наши Партнёры:</SectionTitle>
      <CardsContainer>
        {logos.map(p => (
          <PartnerCard>
            <img src={p.src} alt={p.alt} />
          </PartnerCard>
        ))}
      </CardsContainer>
      <Notice>И многие другие...</Notice>
    </ContentWrapper>
    <ContentWrapper>
      <RightGraphic src={rightGraphic} alt="Decorative graphic" />
      <SectionTitle>Контакты:</SectionTitle>
      <ContactsContainer>
        <ContactCard>
          <Name>Кокшетау</Name>
          <PhoneContainer>
            <Code>+7 (7162)</Code>
            <Phone>25-45-45</Phone>
            <Phone>25-67-25</Phone>
          </PhoneContainer>

          <Address>Ауэзова, 191 а/3</Address>
          <MapLink href="https://2gis.kz/kokshetau/geo/70030076161419529%2C69.393704%2C53.290187?queryState=center%2F69.393701%2C53.290189%2Fzoom%2F18">
            Где это?
          </MapLink>
        </ContactCard>
        <ContactCard>
          <Name>Костанай</Name>
          <PhoneContainer>
            <Code>+7 (7142)</Code>
            <Phone>39-24-27</Phone>
          </PhoneContainer>

          <Address>Карбышева, 117</Address>
          <MapLink href="https://yandex.kz/maps/-/CCBgVL7J">Где это?</MapLink>
        </ContactCard>
      </ContactsContainer>
    </ContentWrapper>
  </Layout>
);

export default IndexPage;
