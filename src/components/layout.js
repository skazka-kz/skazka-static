import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

import leftGraphic from "../images/left.svg";
import rightGraphic from "../images/right.svg";

const SiteWrapper = styled.div``;

const FixedImage = styled.img`
  position: absolute;
  z-index: -10;
`;

const LeftGraphic = styled(FixedImage)`
  position: absolute;
  left: 0;
  top: 80%;
  width: 20%;
`;
const RightGraphic = styled(FixedImage)`
  position: absolute;
  right: 0;
  width: 20%;
  top: 200%;
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
