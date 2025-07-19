import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ReviewStep = ({ 
  selectedMetal, 
  selectedDiamond, 
  selectedStyle, 
  totalPrice,
  onSubmit,
  onBack
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onSubmit();
    }, 2000);
  };

  return (
    <div className="min-h-[60vh] rounded-xl p-4 md:p-6">
      {!isSubmitted ? (
        <>
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Review Your Design</h3>
            <p className="mt-2 text-gray-600">Confirm your custom ring selections</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Ring Preview - Larger Size */}
            <div className="lg:w-1/2">
              <div className="bg-gray-900 rounded-xl p-8 flex justify-center items-center h-96 mb-6 lg:mb-0 relative overflow-hidden">
                {/* Metal Ring Base */}
                <div 
                  className="absolute w-64 h-64 rounded-full border-8"
                  style={{
                    borderColor: getMetalColor(selectedMetal?.name),
                    boxShadow: '0 0 30px rgba(255,255,255,0.2)',
                    transform: 'rotate(15deg)'
                  }}
                >
                  {/* Diamond */}
                  {selectedDiamond && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img
                        src={selectedDiamond.image}
                        alt="Diamond"
                        className="w-24 h-24 object-contain animate-pulse"
                        style={{
                          filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.5))'
                        }}
                      />
                    </div>
                  )}
                </div>
                
                {/* Ring Style Overlay */}
                {selectedStyle && (
                  <img
                    src={selectedStyle.image}
                    alt="Ring Style"
                    className="absolute w-full h-full object-contain opacity-70"
                  />
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 text-white">
                <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Order Summary</h4>
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Base Metal:</span>
                    <span className="font-medium text-lg">
                      {selectedMetal?.name} <span className="text-yellow-400">(${selectedMetal?.price?.toLocaleString()})</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Diamond:</span>
                    <span className="font-medium text-lg">
                      {selectedDiamond?.name} <span className="text-yellow-400">(${selectedDiamond?.price?.toLocaleString()})</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ring Style:</span>
                    <span className="font-medium text-lg">
                      {selectedStyle?.name} <span className="text-yellow-400">(${selectedStyle?.price?.toLocaleString()})</span>
                    </span>
                  </div>
                  <div className="pt-6 mt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-lg">Total Price:</span>
                      <span className="text-3xl font-bold text-yellow-500">
                        ${totalPrice?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={onBack}
              className="px-8 py-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition duration-300"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition duration-300 flex items-center shadow-lg"
            >
              Submit Order
              <FiCheckCircle className="ml-2 w-5 h-5" />
            </button>
          </div>
        </>
      ) : (
        /* Success Message */
        <div className="text-center py-12">
          <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <FiCheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Order Confirmed!</h3>
          <p className="text-lg text-gray-600 mb-2">Your custom ring design is complete.</p>
          <p className="text-gray-500">You'll receive a confirmation email shortly.</p>
          <div className="mt-8 bg-gray-100 p-6 rounded-xl max-w-md mx-auto">
            <p className="font-medium text-gray-700">Order Total: <span className="text-2xl text-yellow-600">${totalPrice?.toLocaleString()}</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get metal color
const getMetalColor = (metalName) => {
  switch(metalName) {
    case 'Gold': return '#FFD700';
    case 'Platinum': return '#E5E4E2';
    case 'Rose Gold': return '#E0BFB8';
    default: return '#E5E4E2';
  }
};

export default ReviewStep;