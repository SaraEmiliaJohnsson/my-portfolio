import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';
import Home from './pages/home/HomeComponents';
import ProjectsComponent from './pages/portfolio/ProjectsComponent';




function App() {
  return (
    <Router>
      <HeaderComponent />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<ProjectsComponent />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
