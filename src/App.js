import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kontakt from './pages/Kontakt';
import Rezervacija from './pages/Rezervacija';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Rezervacija />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
