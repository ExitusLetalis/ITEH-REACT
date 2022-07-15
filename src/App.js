import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rezervacija from './pages/Rezervacija';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Rezervacija />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
