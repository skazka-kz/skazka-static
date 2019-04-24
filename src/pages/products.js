import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  Accent,
  PostWrapper,
  H1,
  Paragraph,
  FloatingContentBox,
  RightGraphic,
  FlexibleWrapper,
} from "../styled";

import rightGraphic from "../images/right.svg";

const documents = [
  {
    name: "Топ ассортимент (pdf)",
    path: "",
  },
  {
    name: "Ассортимент для АЗС (pdf)",
    path: "",
  },
  {
    name: "Ассортимент для пивных магазинов (pdf)",
    path: "",
  },
  {
    name: "Ассортимент для аптек (pdf)",
    path: "",
  },
];

const NotFoundPage = () => (
  <Layout>
    <SEO title="О Нас" />
    <FlexibleWrapper>
      <RightGraphic src={rightGraphic} />
      <FloatingContentBox>
        <H1>Брэнды</H1>
        <Paragraph>
          Мы работаем с лучшими брендами Казахстана, России, Украины и
          Узбекистана, такими как{" "}
          <Accent>
            Боржоми, Славянка, Победа, Казконд, SweetLife, Paulig, Вижер,
            Русский Кондитер, Зум-зум, Пионер, Mix&Max и другие.{" "}
          </Accent>
          Желаете стать партнером? <Link to="/contacts">Пишите нам</Link>, или
          узнайте больше на странице <Link to="/partners">Партнёрам</Link>.
        </Paragraph>
      </FloatingContentBox>
      <FloatingContentBox>
        <H1>Ассортимент</H1>
        <Paragraph>
          Мы предоставляем огромный выбор кондитерских изделий производителей
          Казахстана, России, Украины и Узбекистана. Наши продукты покрывают все
          ценовые диапазоны, начиная от бюджетного печенья и заканчивая самым
          элитным шоколадом.
        </Paragraph>
        <Paragraph>У нас в ассортименте:</Paragraph>
        <ul>
          <li>Печенье</li>
          <li>Пряники</li>
          <li>Карамель</li>
          <li>Конфеты</li>
          <li>Батончики</li>
          <li>Зефир</li>
          <li>Кексы</li>
          <li>Детские сладости с игрушкой</li>
          <li>Сухофрукты</li>
          <li>Кофе</li>
          <li>Элитный чай</li>
          <li>И другие</li>
        </ul>
      </FloatingContentBox>
      <FloatingContentBox>
        <H1>Листовки и прайс-листы</H1>
        <Paragraph>
          Здесь вы найдете список листовок и прайс листов нашей продукции.
          Оформить заказ, уточнить детали или наличие вы всегда можете у наших
          операторов. Мы работаем с <Accent>09:00 до 18:00</Accent> по будням,{" "}
          <Link to="/contacts">наши контактные детали</Link>.
        </Paragraph>
        <ul>
          {documents.map(d => (
            <li key={d.name}>
              <a href={d.path} target="_blank">
                {d.name}
              </a>
            </li>
          ))}
        </ul>
      </FloatingContentBox>
    </FlexibleWrapper>

    <PostWrapper />
  </Layout>
);

export default NotFoundPage;
