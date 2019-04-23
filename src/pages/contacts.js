import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/ContactsSection";

import {
  CallToActionA,
  CtaContainer,
  FlexibleWrapper,
  LeftGraphic,
  RightGraphic,
  SectionHeading,
} from "../styled";

import leftGraphic from "../images/left.svg";
import rightGraphic from "../images/right.svg";

const ContactUsPage = () => (
  <Layout>
    <SEO title="О Нас" />
    <CtaContainer>
      <CallToActionA href="#call">Позвонить</CallToActionA>
      <CallToActionA href="#write">Написать</CallToActionA>
    </CtaContainer>
    <FlexibleWrapper topMargin="0">
      <RightGraphic src={rightGraphic} />
      <SectionHeading id="call">Контакты</SectionHeading>
      <Contacts />
    </FlexibleWrapper>
    <FlexibleWrapper>
      <LeftGraphic src={leftGraphic} />
      <SectionHeading id="write">Написать нам</SectionHeading>
      <ContactForm />
    </FlexibleWrapper>
  </Layout>
);

export default ContactUsPage;
