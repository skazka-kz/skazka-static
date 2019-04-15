import React from "react";
import styled from "styled-components";

import { boxShadow, orange_dark, orange_light } from "../utilities/colors";
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
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
