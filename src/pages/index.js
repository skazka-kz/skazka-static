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
`;
const RightGraphic = styled(FixedImage)`
  position: absolute;
  right: 0;
  width: 20%;
  top: -30%;
`;

const SectionTitle = styled.h1`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.2;
  color: ${black};
  margin-bottom: 6rem;

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
`;

const PartnerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  background-color: white;
  border-radius: 3rem;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  height: 25rem;
  padding: 1rem;

  img {
    width: 100%;
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  max-width: 900px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
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
  height: 20rem;
  justify-content: space-between;
  padding-bottom: 5rem;
`;

const Name = styled.span`
  position: relative;
  padding: 0.25rem;
  margin-bottom: 2rem;
  font-size: 2rem;

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
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 300;
`;
const Phone = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  margin: 0.3rem;
`;

const Address = styled.address`
  font-size: 2rem;
  font-weight: 700;
`;
const MapLink = styled.a`
  font-size: 1.8rem;
  color: ${orange_light};
  font-weight: 300;
  text-decoration: none;
`;

const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
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
