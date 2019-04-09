import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";


const ContentWrapper = styled.section`

`;

const CardsContainer = styled.div``;

const PartnerCard = styled.div``;
const ContactCard = styled.div``;


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ContentWrapper>
      <h1>Наши Партнёры:</h1>
      <CardsContainer>
        <PartnerCard>
          
        </PartnerCard>
      </CardsContainer>
    </ContentWrapper>
    <ContentWrapper>
      <h1>Контакты:</h1>
    </ContentWrapper>
  </Layout>
);

export default IndexPage;
