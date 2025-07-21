import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import MetalSelection from './MetalSelection';
import DiamondSelection from './DiamondSelection';
import StyleSelection from './StyleSelection';
import ReviewStep from './ReviewStep';

const CustomRingPage = ({ onBack }) => {
  const [selectedMetal, setSelectedMetal] = useState(null);
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const metals = [
    { id: 1, name: "Gold", price: 500, image: "https://media.istockphoto.com/id/2213322010/photo/one-yellow-orange-shiny-gemstone-isolated-on-white.jpg?s=612x612&w=0&k=20&c=T9mG3EjXTdbPisHT_ry7R4fjJgHbcoIiOPspQQRBP6A=" },
    { id: 2, name: "Platinum", price: 800, image: "https://media.istockphoto.com/id/469937726/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=LMpsG6r8gEyfmFYDXX5iDDEtJ7Uikq1TX1ZlPpM0dZ8=" },
    { id: 3, name: "Rose Gold", price: 600, image: "https://media.istockphoto.com/id/1187691367/photo/dazzling-sparkling-diamond-realistic-3d-render.jpg?s=612x612&w=0&k=20&c=R-0MpdD9JGIgD9L9wtHfdTuWQXaf-aBxtvZN5Dx_VeM=" }
  ];

  const diamonds = [
    { id: 1, name: "Round", price: 1200, image: "https://media.istockphoto.com/id/1688371901/photo/diamond-top-view-with-caustic-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=3hXkEIwwIespsc0b3vmvV8tZxIPmhe0VOnGvJDvOgIk=" },
    { id: 2, name: "Princess", price: 1500, image: "https://media.istockphoto.com/id/837411390/photo/3d-illustration-pear-diamond-stone.jpg?s=612x612&w=0&k=20&c=lHx-vqBM5OHu8JbggEYPDlBzgAA1Lps-buW9wgH0iZg=" },
    { id: 3, name: "Oval", price: 1300, image: "https://media.istockphoto.com/id/1567867340/photo/oval-brilliant-cut-diamonds-on-white-background.jpg?s=612x612&w=0&k=20&c=TPi2BZuxQTzznKl_usdD_2ww9eMlulQ-jC0ZGQ65zFE=" }
  ];

  const styles = [
    { id: 1, name: "Classic", price: 300, image: "https://media.istockphoto.com/id/898995450/photo/beauty-wedding-ring.jpg?s=612x612&w=0&k=20&c=fROK3dPTRq9j7CcxzIcy-sI_7k7BAG-qBNXlT1oCgOs=" },
    { id: 2, name: "Vintage", price: 400, image: "https://media.istockphoto.com/id/121119171/photo/antique-diamond-ring.jpg?s=612x612&w=0&k=20&c=R6lbTTISOhWnTSrSOTO3RWG0QCP2uaK90zWu4koDgHE=" },
    { id: 3, name: "Modern", price: 500, image: "https://media.istockphoto.com/id/468017397/photo/cushion-cut-diamond-halo-engagement-wedding-ring.jpg?s=612x612&w=0&k=20&c=GlL8HIKtF4Gq1AEIWm7amDtTJOrQxU6Q0W0hHJaVv8U=" }
  ];

  const totalPrice = (selectedMetal?.price || 0) + 
                    (selectedDiamond?.price || 0) + 
                    (selectedStyle?.price || 0);

  const handleMetalSelected = (metal) => {
    setSelectedMetal(metal);
    setCurrentStep(2); 
  };

  const handleDiamondSelected = (diamond) => {
    setSelectedDiamond(diamond);
    setCurrentStep(3); 
  };

  const handleStyleSelected = (style) => {
    setSelectedStyle(style);
    setCurrentStep(4); 
  };

  const handleSubmitOrder = () => {
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setCurrentStep(1);
      setSelectedMetal(null);
      setSelectedDiamond(null);
      setSelectedStyle(null);
      onBack();
    }, 3000);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-8 px-4 sm:px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-yellow-600 z-20 bg-white bg-opacity-80 rounded-full p-2 shadow-sm"
        >
          <FiChevronLeft className="mr-1" /> Back
        </button>

        <div className="max-w-7xl mx-auto rounded-xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Design Your Custom Ring</h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
            <div
              className="absolute top-1/2 left-0 h-1 bg-yellow-600 -z-10 transition-all duration-300"
              style={{ 
                width: `${currentStep === 1 ? 0 : 
                        currentStep === 2 ? 33 : 
                        currentStep === 3 ? 66 : 100}%` 
              }}
            ></div>
            {['Metal', 'Diamond', 'Style', 'Review'].map((label, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep > index ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'
                  } font-bold`}
                >
                  {index + 1}
                </div>
                <span className="mt-2 text-sm text-gray-600">{label}</span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          {orderSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thanks for customizing your ring!</h3>
              <p className="text-gray-600">Your order has been submitted successfully.</p>
            </div>
          ) : (
            <>
              {currentStep === 1 && (
                <MetalSelection 
                  metals={metals}
                  onNext={handleMetalSelected}
                  selectedMetal={selectedMetal}
                />
              )}

              {currentStep === 2 && (
                <DiamondSelection 
                  diamonds={diamonds}
                  onNext={handleDiamondSelected}
                  onBack={prevStep}
                  selectedDiamond={selectedDiamond}
                />
              )}

              {currentStep === 3 && (
                <StyleSelection 
                  styles={styles}
                  onNext={handleStyleSelected}
                  onBack={prevStep}
                  selectedStyle={selectedStyle}
                />
              )}

              {currentStep === 4 && (
                <ReviewStep 
                  selectedMetal={selectedMetal}
                  selectedDiamond={selectedDiamond}
                  selectedStyle={selectedStyle}
                  totalPrice={totalPrice}
                  onSubmit={handleSubmitOrder}
                  onBack={prevStep}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomRingPage;