import React from "react";
import styled from "styled-components";

import {
  boxShadow,
  orangeGradient,
  orange_light,
  orange_dark,
} from "../utilities/colors";
import { H1 } from "../styled";

const Wrapper = styled.div`
  margin: 1rem;
  width: 100%;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const PrettyInput = styled.input`
  font-weight: 300;
  ${boxShadow};
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  margin: 0.75rem;
  color: ${orange_light};
  font-size: 1.25rem;
`;

const ContentInput = styled.textarea`
  font-family: "Ubuntu", sans-serif;
  ${boxShadow};
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  margin: 0.75rem;
  color: ${orange_light};
  font-size: 1.25rem;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  margin: 1rem 0;
  padding: 1rem 2rem;
  border-radius: 3rem;
  border: none;
  background: ${orangeGradient};
  font-family: "Ubuntu", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  text-decoration: none;

  @media (max-width: 600px) {
    align-self: center;
  }
`;

const OrangeH1 = styled(H1)`
  color: ${orange_dark};
`;

const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <H1>Отправить сообщение</H1>
      <Form onSubmit={handleSubmit}>
        <PrettyInput type="text" placeholder="Ваше имя:" />
        <PrettyInput type="email" placeholder="E-mail:" />
        <ContentInput
          multiline
          rows="4"
          placeholder="Напишите нам, о чём хотите узнать..."
        />
        <SubmitButton>Отправить</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
