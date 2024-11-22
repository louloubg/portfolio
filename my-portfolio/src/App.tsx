import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Formations from './pages/Formations';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import APropos from './pages/APropos'; // Import de la page À propos

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a-propos" element={<APropos />} /> {/* Ajout de la route pour À propos */}
      </Routes>
    </Router>
  );
};

export default App;