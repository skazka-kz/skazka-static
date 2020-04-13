import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import HomeLayout from "../components/homeLayout";
import SEO from "../components/seo";
import Contacts from "../components/ContactsSection";
import {
  ContentWrapper,
  SectionHeading,
  FloatingContentBox,
  InfoButtonLink,
  LeftGraphic,
  RightGraphic,
} from "../styled";

import logos from "../images/logos";
import { black, boxShadow } from "../utilities/colors";
import leftGraphic from "../images/left.svg";
import rightGraphic from "../images/right.svg";

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

  ${boxShadow};
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

const Notice = styled.p`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 1.9rem;
  font-style: italic;
  color: ${black};

  @media (max-width: 1440px) {
    font-size: 1.7rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Сказка" />
    <ContentWrapper>
      <LeftGraphic src={leftGraphic} alt="Decorative graphic" />
      <SectionHeading>Наши Партнёры:</SectionHeading>
      <CardsContainer>
        {logos.map((p) => (
          <PartnerCard key={p.alt}>
            <img src={p.src} alt={p.alt} />
          </PartnerCard>
        ))}
      </CardsContainer>
      <Notice>И многие другие...</Notice>
    </ContentWrapper>
    <ContentWrapper>
      <RightGraphic src={rightGraphic} alt="Decorative graphic" />
      <SectionHeading>О Нас</SectionHeading>
      <FloatingContentBox>
        <p>
          Компания Сказка - один из крупнейших дистрибьюторов кондитерских
          изделий по северу Казахстана.
        </p>
        <p>
          Мы предоставляем огромный выбор кондитерских изделий производителей
          Казахстана, России, Украины и Узбекистана. В нашей команде более 70
          работников в 3 офисах: Кокшетау, Костанай и Петропавловск.
        </p>
        <p>
          Мы специализируемся на дистрибуции кондитерских изделий, таких как
          шоколад, печенье, пряники, конфеты и прочее, смотрите подробнее на
          странице <Link to="/products">Продукция</Link>.
        </p>
        <p>
          Наша доставка работает без выходных и доставляет в практически любой
          населенный пункт в Акмолинской, Костанайской и Северо-Казахстанской
          области. Подробнее о том, куда мы доставляем смотрите на странице{" "}
          <Link to="/coverage">Доставка</Link>
        </p>
        <p>
          Ищете дистрибьютера для вашего товара? Читайте на странице{" "}
          <Link to="/partners">Партнёрам</Link> как мы можем эффективно помочь
          вам увеличить продажи и присутствие вашего товара в северном
          Казахстане.
        </p>
      </FloatingContentBox>
    </ContentWrapper>
    <ContentWrapper>
      <LeftGraphic src={leftGraphic} alt="Decorative graphic" />
      <SectionHeading>Контакты:</SectionHeading>
      <Contacts />
      <InfoButtonLink to="/contacts">Связаться с Нами</InfoButtonLink>
    </ContentWrapper>
  </HomeLayout>
);

export default IndexPage;
