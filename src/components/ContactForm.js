import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import {
  boxShadow,
  orangeGradient,
  orange_light,
  orange_dark,
} from "../utilities/colors";
import Spinner from "./Spinner";

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
  align-self: center;
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

const Notice = styled.span`
  font-size: 1.25rem;
  color: ${orange_dark};
  align-self: center;
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailEndpoint = `https://rifq7tqdrf.execute-api.eu-central-1.amazonaws.com/prod/send-email`;

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const request = axios.post(emailEndpoint, {
      name,
      title,
      content,
      secret: "kill_all_humans",
    });

    try {
      await request;
      setSuccess("Ваше письмо отправлено");
      setName("");
      setTitle("");
      setContent("");
    } catch (e) {
      setSuccess("Ошибка при отправке. Попробуйте позже");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <PrettyInput
          type="text"
          placeholder="Ваше имя:"
          onChange={e => {
            setName(e.target.value);
          }}
          value={name}
          minLength="3"
          required
        />
        <PrettyInput
          type="text"
          placeholder="Тема:"
          onChange={e => {
            setTitle(e.target.value);
          }}
          value={title}
          minLength="3"
          required
        />
        <ContentInput
          multiline
          rows="4"
          placeholder="Напишите нам, о чём хотите узнать..."
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
          minLength="3"
          required
        />
        {success ? <Notice>{success}</Notice> : null}
        <SubmitButton type="submit">
          Отправить {loading ? <Spinner /> : null}
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
