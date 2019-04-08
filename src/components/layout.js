import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const SiteWrapper = styled.div``;

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <Header />
      {children}
      <Footer />
    </SiteWrapper>
  );
};

export default Layout;
