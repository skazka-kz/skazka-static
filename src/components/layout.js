import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

import leftGraphic from "../images/left.svg";
import rightGraphic from "../images/right.svg";

const SiteWrapper = styled.div``;

const LeftGraphic = styled.img`
  position: absolute;
`;
const RightGraphic = styled.img`
  position: absolute;
`;

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <LeftGraphic src={leftGraphic} />
      <RightGraphic src={rightGraphic} />
      <Header />
      {children}
      <Footer />
    </SiteWrapper>
  );
};

export default Layout;
