import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { orangeGradient } from "../utilities/colors";

const CtaContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CallToAction = styled(Link)`
  margin: 1rem;
  padding: 1.5rem;
  background: ${orangeGradient};
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 1rem;

  @media (max-width: 600px) {
    width: 70%;
    text-align: center;
  }
`;

const CallsToAction = () => {
  return (
    <CtaContainer>
      <CallToAction to="/contacts">Связаться с нами</CallToAction>
      <CallToAction to="/products">Наша Продукция</CallToAction>
      <CallToAction to="/contacts">Зона покрытия</CallToAction>
    </CtaContainer>
  );
};

export default CallsToAction;
