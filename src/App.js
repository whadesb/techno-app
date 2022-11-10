import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './css/app.css';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';



function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    console.log("handle", techno);
  }

  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} /> } />
      <Route path="/List" element={<TechnoList />} />
    </Routes>
    </>
  );
}

export default App;
