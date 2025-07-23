import { useState } from 'react';
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
    </div>
  );
};

export default RingDetailPage;