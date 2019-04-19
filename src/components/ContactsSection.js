import React from "react";
import styled from "styled-components";

import { boxShadow, orange_dark, orange_light } from "../utilities/colors";

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
  ${boxShadow};
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

const ContactsSection = () => {
  return (
    <ContactsContainer id="contacts">
      <ContactCard>
        <Name>Кокшетау</Name>
        <PhoneContainer>
          <Code>+7 (7162)</Code>
          <Phone>25-45-45</Phone>
          <Phone>25-67-25</Phone>
        </PhoneContainer>

        <Address>Ауэзова, 191 а/3</Address>
        <MapLink
          target="_blank"
          href="https://2gis.kz/kokshetau/geo/70030076161419529%2C69.393704%2C53.290187?queryState=center%2F69.393701%2C53.290189%2Fzoom%2F18"
        >
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
        <MapLink target="_blank" href="https://yandex.kz/maps/-/CCBgVL7J">
          Где это?
        </MapLink>
      </ContactCard>
    </ContactsContainer>
  );
};

export default ContactsSection;
