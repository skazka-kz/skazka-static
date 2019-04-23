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
            Боржоми, Славянка, Победа, Казконд, SweetLife, Вижер, Русский
            Кондитер, Зум-зум, Пионер, Mix&Max и другие.
          </Accent>
          Желаете стать партнером? <Link to="/contacts">Пишите нам</Link>, или
          узнайте больше на странице <Link to="/partners">Партнёрам</Link>
        </Paragraph>
      </FloatingContentBox>
      <FloatingContentBox>
        <H1>Ассортимент</H1>
        <Paragraph>
          Мы предоставляем огромный выбор кондитерских изделий производителей
          Казахстана, России, Украины и Узбекистана. В нашей команде более 70
          работников в 3 офисах: Кокшетау, Костанай и Петропавловск.
        </Paragraph>
        <Paragraph>
          Мы специализируемся на дистрибуции кондитерских изделий, таких как
          шоколад, печенье, пряники, конфеты и прочее, смотрите подробнее на
          странице <Link to="/products">Продукция</Link>.
        </Paragraph>
        <H1>Листовки</H1>
        <Paragraph>
          Наша доставка работает без выходных и доставляет в практически любой
          населенный пункт в Акмолинской, Костанайской и Северо-Казахстанской
          области. Подробнее о том, куда мы доставляем смотрите на странице{" "}
          <Link to="/coverage">Доставка</Link>.
        </Paragraph>
        <Paragraph>
          Ищете дистрибьютера для вашего товара? Читайте на странице{" "}
          <Link to="/partners">Партнёрам</Link> как мы можем эффективно помочь
          вам увеличить продажи и присутствие вашего товара в северном
          Казахстане.
        </Paragraph>
      </FloatingContentBox>
    </FlexibleWrapper>

    <PostWrapper />
  </Layout>
);

export default NotFoundPage;
