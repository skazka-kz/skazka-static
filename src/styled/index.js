import styled from "styled-components";
import { Link } from "gatsby";
import { black, orange_light, orangeGradient } from "../utilities/colors";

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

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const SectionHeading = styled.h1`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 1.2;
  color: ${black};
  margin-bottom: 6rem;

  @media (max-width: 1440px) {
    font-size: 2.1rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
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
export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2rem 0;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 0.5rem;
  text-align: center;
`;

export const FloatingContentBox = styled.div`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  max-width: 800px;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  margin: 0 2rem;

  p {
    margin: 1.5rem;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5;
  }

  p:last-of-type {
    margin-bottom: 1rem;
  }

  p:first-of-type {
    margin-top: 1rem;
  }

  a {
    color: ${orange_light};
    text-decoration: none;
    font-style: italic;
  }

  @media (max-width: 1280px) {
    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1024px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 599px) {
    padding: 0.5rem;
  }
`;

export const InfoButtonLink = styled(Link)`
  display: inline-block;
  margin: 2rem 0;
  padding: 1rem 2rem;
  border-radius: 3rem;
  border: none;
  background: ${orangeGradient};
  font-family: "Ubuntu", sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  color: white;
  text-decoration: none;

  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 850px) {
    font-size: 1.2rem;
    margin: 2rem;
  }

  @media (max-width: 599px) {
    padding: 1rem 2rem;
  }
`;
