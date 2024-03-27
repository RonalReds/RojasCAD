import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/pages/contact/Contact';
import Cursos from './components/pages/cursos/Cursos';
import Nav from './components/nav/Nav';







function App() {


  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Nav/> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cursos" element={<Cursos />}/>
      </Routes>
    </>
  )
}

export default App
