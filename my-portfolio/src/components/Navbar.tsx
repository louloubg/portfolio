import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Link to="/">Accueil</Link>
      <Link to="/experiences">EXPERIENCES</Link>
      <Link to="/formations">FORMATIONS</Link>
      <Link to="/projets">PROJETS</Link>
      <Link to="/a-propos">A PROPOS</Link>
      <Link to="/contact">CONTACT</Link>
    </NavbarContainer>
  );
};

export default Navbar;