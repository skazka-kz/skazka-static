import styled from "styled-components";
import { black, orange_light } from "../utilities/colors";

export const SiteWrapper = styled.main`
  font-family: "Ubuntu", sans-serif;
  font-display: auto;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;
  position: relative;
  padding: 0 2rem;
  color: ${black};

  @media (max-width: 1024px) {
    margin: 5% 0;
    padding: 0;
  }
`;

export const SectionHeading = styled.h1`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 3.3rem;
  line-height: 1.2;
  color: ${black};
  margin-bottom: 6rem;

  @media (max-width: 1440px) {
    font-size: 2.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  &:after {
    content: "";

    width: 70%;
    position: absolute;
    left: 15%;
    bottom: -0.75rem;

    border-width: 0 0 2px;
    border-style: solid;
    border-color: ${orange_light};
  }
`;
