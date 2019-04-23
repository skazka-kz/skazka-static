import React from "react";
import { CtaContainer, CallToActionLink } from "../styled";

const CallsToAction = () => {
  return (
    <CtaContainer>
      <CallToActionLink to="/contacts">Связаться с нами</CallToActionLink>
      <CallToActionLink to="/products">Наша Продукция</CallToActionLink>
      <CallToActionLink to="/coverage">Зона покрытия</CallToActionLink>
    </CtaContainer>
  );
};

export default CallsToAction;
