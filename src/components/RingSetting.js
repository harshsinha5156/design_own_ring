import { useState } from 'react';
<<<<<<< HEAD
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiHeart } from 'react-icons/fi';
import DiamondTypePopup from './DiamondTypePopup';

const RingDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const ring = state?.ring;
  const [showPopup, setShowPopup] = useState(false);

  const handleChooseSetting = () => {
    setShowPopup(true);
  };

  const handleDiamondSelect = (diamondType) => {
  setShowPopup(false);
  setTimeout(() => {
    navigate('/custom-ring', {
      state: {
        selectedRing: ring,
        selectedDiamondType: diamondType,
        fromDetailPage: true
      }
    });
  }, 500); // Half second delay to see the popup close
};

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-40">
        <button 
          onClick={() => navigate(state?.fromCustomRingPage ? '/custom-ring' : '/')}
          className="flex items-center space-x-2 text-gray-800 hover:text-yellow-600"
        >
          <FiArrowLeft size={20} />
          <span>Back</span>
        </button>
        <div className="flex space-x-5">
          <button className="text-gray-800 hover:text-yellow-600 relative">
            <FiHeart size={22} />
            <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="text-gray-800 hover:text-yellow-600 relative">
            <FiShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Ring Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 rounded-lg p-4 h-96 flex items-center justify-center">
              <img 
                src={ring.image} 
                alt={ring.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Ring Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{ring.name}</h1>
            <p className="text-2xl text-yellow-600 font-bold mb-6">€{ring.price}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">
                This beautiful {ring.style.toLowerCase()} ring is crafted from premium {ring.metal.toLowerCase()} 
                and designed to make a statement.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-medium text-gray-700">Style</h3>
                <p className="text-gray-900">{ring.style}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Metal</h3>
                <p className="text-gray-900">{ring.metal}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Delivery</h3>
                <p className="text-gray-900">Free Shipping</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Returns</h3>
                <p className="text-gray-900">30-Day Policy</p>
              </div>
            </div>

            <button 
              onClick={handleChooseSetting}
              className="w-full bg-yellow-600 text-white py-3 rounded-md font-medium hover:bg-yellow-700 transition"
            >
              Choose This Setting
            </button>
          </div>
        </div>
      </div>

      {/* Diamond Type Popup */}
      {showPopup && (
        <DiamondTypePopup 
          onClose={() => setShowPopup(false)}
          onSelect={handleDiamondSelect}
        />
      )}
=======
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import ProgressSteps from './Progress';
import RingSetting from './RingSetting';
import DiamondSelection from './DiamondSelection';

const RingDetailPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const ring = {
    name: "",
    price: 100,
    shape: "Round",
    metal: "White Gold 14k",
    image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Valentina-Solitaire-Ring-gold-pv-12.png",
    deliveryDate: "Friday, August 1"
  };

  const steps = [
    { id: 1, name: 'Setting' },
    { id: 2, name: 'Select Diamond' },
    { id: 3, name: 'Complete Ring' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md py-3 px-6 flex items-center sticky top-0 z-50">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-yellow-600 hover:text-yellow-700 mr-4"
        >
          <FiChevronLeft size={24} />
          <span className="ml-1">BACK TO COLLECTION</span>
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <ProgressSteps currentStep={currentStep} steps={steps} />

        {currentStep === 1 && (
          <RingSetting 
            ring={ring} 
            onNext={() => setCurrentStep(2)} 
          />
        )}

        {currentStep === 2 && (
          <DiamondSelection 
            onBack={() => setCurrentStep(1)}
            onComplete={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Your Ring is Complete!</h2>
            <p className="text-lg mb-6">Thank you for creating your custom ring.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-medium transition duration-300"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
    </div>
  );
};

export default RingDetailPage;