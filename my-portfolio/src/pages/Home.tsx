import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/assets/your-photo.jpg') no-repeat center center/cover;
  color: white;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis [Ton Nom], un développeur passionné par [Ton Domaine].</p>
    </HomeContainer>
  );
};

export default Home;