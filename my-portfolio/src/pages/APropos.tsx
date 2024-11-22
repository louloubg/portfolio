import React from 'react';
import styled from 'styled-components';

const AProposContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem 0;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 1rem auto;
  max-width: 600px;
`;

const APropos: React.FC = () => {
  return (
    <AProposContainer>
      <h1>À propos de moi</h1>
      <ProfilePicture src="/assets/your-photo.jpg" alt="Photo de profil" />
      <AboutText>
        Bonjour, je m'appelle [Ton Nom] et je suis un développeur passionné. Je
        travaille principalement dans les domaines du développement web et de la
        data analyse. Mon parcours est axé sur la résolution de problèmes
        complexes à l'aide de solutions innovantes. Je suis toujours curieux
        d'apprendre de nouvelles technologies et d'améliorer mes compétences.
      </AboutText>
      <AboutText>
        En dehors du travail, j'aime [tes hobbies ou passions : lire, voyager,
        jouer à des jeux vidéo, etc.]. N'hésitez pas à parcourir mon portfolio
        pour en apprendre davantage sur mes projets, mes expériences et mes
        compétences.
      </AboutText>
    </AProposContainer>
  );
};

export default APropos;