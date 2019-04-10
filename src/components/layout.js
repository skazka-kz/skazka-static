import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import { SiteWrapper } from "../styled";

const InnerContent = styled.div`
  min-height: 55vh;
`;

const HomeLayout = ({ children }) => {
  return (
    <SiteWrapper>
      <Header />
      <InnerContent>{children}</InnerContent>
      <Footer />
    </SiteWrapper>
  );
};

export default HomeLayout;
