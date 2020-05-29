import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  ContentBox,
  FlexibleWrapper,
  H1,
  H2,
  Paragraph,
  RightGraphic,
} from "../styled";
import rightGraphic from "../images/right.svg";

const CoveragePage = () => (
  <Layout>
    <SEO title="Зона покрытия" />
    <FlexibleWrapper>
      <RightGraphic src={rightGraphic} />
      <ContentBox>
        <H1>Зона покрытия</H1>
        <Paragraph>
          Мы работаем с практически всеми населенными пунктами в Акмолинской,
          Костанайской и СК области. Наш головной офис находится в Кокшетау и
          обслуживает Акмолинскую область и СКО. Наш филиал в г. Костанай
          обслуживает Костанайскую область.
        </Paragraph>
        <Paragraph>
          Список некоторых населенных пунктов, в которых мы торгуем и
          доставляем:
        </Paragraph>

        <H2>Акмолинская область</H2>
        <ul>
          <li>Кокшетау‎</li>
          <li>Степногорск‎</li>
          <li>Акколь</li>
          <li>Атбасар</li>
          <li>Державинск</li>
          <li>Есиль</li>
          <li>Макинск</li>
          <li>Степняк</li>
          <li>Щучинск</li>
        </ul>
        <br />

        <H2>Северо-Казахстанская область (СКО)</H2>
        <ul>
          <li>Петропавловск</li>
          <li>Тайынша</li>
          <li>Булаево</li>
          <li>Мамлютка</li>
          <li>Сергеевка</li>
        </ul>
        <br />

        <H2>Костанайская область</H2>
        <ul>
          <li>Костанай</li>
          <li>Лисаковск</li>
          <li>Рудный</li>
          <li>Аркалык</li>
          <li>Фёдоровка</li>
          <li>Убаганское</li>
          <li>Аулиеколь</li>
          <li>Денисовка</li>
          <li>Карабалык</li>
          <li>Карасу</li>
          <li>Тобыл</li>
          <li>Караменды</li>
          <li>Сарыколь</li>
        </ul>
      </ContentBox>
    </FlexibleWrapper>
  </Layout>
);

export default CoveragePage;
