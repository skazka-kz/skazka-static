import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { ContentWrapper } from "../styled";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ContentWrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ContentWrapper>
  </Layout>
);

export default NotFoundPage;
