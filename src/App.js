// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import CustomRingPage from './components/CustomRingPage';
// import Footer from './components/Footer';


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/custom-ring" element={<CustomRingWrapper />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// function CustomRingWrapper() {
//   const navigate = useNavigate();

//   return <CustomRingPage onBack={() => navigate(-1)} />;
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomRingPage from './components/CustomRingPage';
import RingDetailPage from './components/RingDetailPage';
import Footer from './components/Footer'
import RingSetting from './components/RingSetting';
import NaturalDiamond from './components/NaturalDiamond';
import LabGrownDiamondSelection from './components/LabGrownDiamondSelection';
import RingReview from './components/RingReview';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/custom-ring" element={<CustomRingPage />} />
        <Route path="/ring/:id" element={<RingDetailPage />} />
         <Route path="/ring-setting/:id" element={<RingSetting />} />
        <Route path="/diamond-selection" element={<NaturalDiamond />} />
        <Route path="/lab-grown-diamond-selection" element={<LabGrownDiamondSelection />} />
        <Route path="/ring-review" element={<RingReview />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
