import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomRingPage from './components/CustomRingPage';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/custom-ring" element={<CustomRingWrapper />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// Wrapper component to handle navigation for CustomRingPage
function CustomRingWrapper() {
  const navigate = useNavigate();

  return <CustomRingPage onBack={() => navigate(-1)} />;
}

export default App;