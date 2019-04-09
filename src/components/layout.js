import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

import leftGraphic from "../images/left_graphic.svg";
import rightGraphic from "../images/right_graphic.svg";

const SiteWrapper = styled.div``;

const LeftGraphic = styled.img``;
const RightGraphic = styled.img``;

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
