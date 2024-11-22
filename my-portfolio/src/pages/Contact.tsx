import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <h1>Contactez-moi</h1>
      <p>Vous pouvez me joindre via le formulaire ci-dessous :</p>
      <ContactForm>
        <Input type="text" placeholder="Votre nom" required />
        <Input type="email" placeholder="Votre email" required />
        <TextArea rows={5} placeholder="Votre message" required />
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;