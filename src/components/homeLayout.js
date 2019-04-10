import React from "react";
import Header from "./header";
import Footer from "./footer";
import { SiteWrapper } from "../styled";

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
