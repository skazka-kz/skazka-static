import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const SiteWrapper = styled.div`
  font-family: "Ubuntu", sans-serif;
`;

const HomeLayout = ({ children }) => {
  return (
    <SiteWrapper>
      <Header isHome />
      {children}
      <Footer />
    </SiteWrapper>
  );
};

export default HomeLayout;
