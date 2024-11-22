import React from 'react';
import styled from 'styled-components';

const ExperiencesContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Experiences: React.FC = () => {
  return (
    <ExperiencesContainer>
      <h1>Mes Expériences</h1>
      <p>Voici un aperçu de mes expériences professionnelles.</p>
      <ul>
        <li><strong>Poste 1 :</strong> Description de l'expérience.</li>
        <li><strong>Poste 2 :</strong> Description de l'expérience.</li>
        <li><strong>Poste 3 :</strong> Description de l'expérience.</li>
      </ul>
    </ExperiencesContainer>
  );
};

export default Experiences;