import React from 'react';
import styled from 'styled-components';

const ProjetsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Projets: React.FC = () => {
  return (
    <ProjetsContainer>
      <h1>Mes Projets</h1>
      <p>Voici une sélection de mes projets personnels et professionnels.</p>
      <ul>
        <li><strong>Projet 1 :</strong> Description du projet.</li>
        <li><strong>Projet 2 :</strong> Description du projet.</li>
        <li><strong>Projet 3 :</strong> Description du projet.</li>
      </ul>
    </ProjetsContainer>
  );
};

export default Projets;