


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomRingPage from './components/CustomRingPage';
import RingDetailPage from './components/RingDetailPage';
import Footer from './components/Footer';
import RingSetting from './components/RingSetting';
import NaturalDiamond from './components/NaturalDiamond';
import LabGrownDiamondSelection from './components/LabGrownDiamondSelection';
import RingReview from './components/RingReview';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
        {/* Single root route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Other routes in order of specificity */}
        <Route path="/custom-ring" element={<CustomRingPage />} />
        <Route path="/ring/:id" element={<RingDetailPage />} />
        <Route path="/ring-setting/:id" element={<RingSetting />} />
        <Route path="/natural-diamond" element={<NaturalDiamond />} />
        <Route path="/lab-grown-diamond-selection" element={<LabGrownDiamondSelection />} />
        <Route path="/ring-review" element={<RingReview />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;