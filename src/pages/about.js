import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CallsToAction from "../components/CallsToAction";

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
    <SEO
      title="О Нас"
      description="О компании Сказка - Кокшетау, Петропавловск, Костанай.
       Сказка - дистрибьютор кондитерских изделий по северу Казахстана.
       Славянка, Боржоми, Казконд, Победа, и многие другие."
    />
    <FlexibleWrapper>
      <RightGraphic src={rightGraphic} />
      <CallsToAction />
      <FloatingContentBox>
        <H1>О Нас</H1>
        <Paragraph>
          Компания Сказка - один из крупнейших дистрибьюторов кондитерских
          изделий по северу Казахстана. Мы работаем в{" "}
          <Accent>
            Акмолинской, Северо-Казахстанской и Костанайской областях.
          </Accent>
        </Paragraph>
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
