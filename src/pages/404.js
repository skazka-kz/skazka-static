import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { PostWrapper, H1, Paragraph } from "../styled";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PostWrapper>
      <H1>Страница не найдена</H1>
      <Paragraph>
        Упс, тут ничего нет! Вернуться на <Link to="/"> главную страницу.</Link>
      </Paragraph>
    </PostWrapper>
  </Layout>
);

export default NotFoundPage;
