import React from 'react';
import styled from 'styled-components';

const FormationsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Formations: React.FC = () => {
  return (
    <FormationsContainer>
      <h1>Mes Formations</h1>
      <p>Voici un aperçu de mes formations académiques.</p>
      <ul>
        <li><strong>Formation 1 :</strong> Description de la formation.</li>
        <li><strong>Formation 2 :</strong> Description de la formation.</li>
        <li><strong>Formation 3 :</strong> Description de la formation.</li>
      </ul>
    </FormationsContainer>
  );
};

export default Formations;