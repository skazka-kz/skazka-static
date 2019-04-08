import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
