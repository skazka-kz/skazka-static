import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const SiteWrapper = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-display: auto;
`;

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
