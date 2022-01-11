import './App.scss';
import { HomePage } from './pages/HomePage';
import { Resume } from './pages/Resume.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
