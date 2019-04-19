import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/ContactsSection";

import {
  ContentWrapper,
  SectionHeading,
  LeftGraphic,
  RightGraphic,
} from "../styled";

import leftGraphic from "../images/left.svg";
import rightGraphic from "../images/right.svg";

const FlexibleWrapper = styled(ContentWrapper)`
  width: 100%;
  margin: 5rem 0;
`;

const ContactUsPage = () => (
  <Layout>
    <SEO title="О Нас" />
    <FlexibleWrapper>
      <RightGraphic src={rightGraphic} />
      <SectionHeading>Написать нам</SectionHeading>
      <ContactForm />
    </FlexibleWrapper>
    <FlexibleWrapper>
      <LeftGraphic src={leftGraphic} />
      <SectionHeading>Контакты</SectionHeading>
      <Contacts />
    </FlexibleWrapper>
  </Layout>
);

export default ContactUsPage;
