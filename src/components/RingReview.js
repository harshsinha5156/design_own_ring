import { useLocation, useNavigate } from 'react-router-dom';

const RingReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    ring,
    diamondType, 
    diamond, 
    metalType, 
    metalPrice,
    styleType,
    stylePrice
  } = location.state || {};

  const ringDetails = ring || {
    id: 'default',
    name: 'Classic Solitaire Setting',
    price: stylePrice || 1200,
    image: 'https://media.istockphoto.com/id/498549260/photo/engagement-ring-made-of-white-gold.jpg?s=612x612&w=0&k=20&c=wKF6a2DxbI2ruIvCDoRn3OLEyvqrOBVx5salux0VRLc=',
    metal: metalType || 'Not selected',
    style: styleType || 'Classic Solitaire'
  };

  const calculateTotal = () => {
    return (ringDetails.price || 0) + 
           (diamond?.price || 0) + 
           (metalPrice || 0);
  };

  const handleSubmitOrder = () => {
    navigate('/confirmation', {
      state: {
        ring: ringDetails,
        diamondType,
        diamond,
        metalType: ringDetails.metal,
        metalPrice,
        styleType: ringDetails.style,
        total: calculateTotal()
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Back</span>
            </button>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">Order Review</h1>
            <div className="w-8"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Page Title */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Final Step: Review Your Order</h2>
          </div>

          {/* Product Section */}
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-4 sm:p-6">
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center p-4">
                <img 
                  src={ringDetails.image} 
                  alt={ringDetails.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-4 sm:p-6">
              <div className="space-y-6">
                {/* Metal Selection */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Metal Selection</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                    <div className="text-gray-600">Type:</div>
                    <div className="font-medium text-gray-800">{ringDetails.metal}</div>
                    <div className="text-gray-600">Price:</div>
                    <div className="font-medium text-gray-800">${metalPrice || 0}</div>
                  </div>
                </div>

                {/* Setting Style */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Setting Style</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                    <div className="text-gray-600">Name:</div>
                    <div className="font-medium text-gray-800">{ringDetails.name}</div>
                    <div className="text-gray-600">Style:</div>
                    <div className="font-medium text-gray-800">{ringDetails.style}</div>
                    <div className="text-gray-600">Price:</div>
                    <div className="font-medium text-gray-800">${ringDetails.price}</div>
                  </div>
                </div>

                {/* Diamond Details */}
                {diamond && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Diamond Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                      <div className="text-gray-600">Type:</div>
                      <div className="font-medium text-gray-800">
                        {diamondType === 'natural' ? 'Natural' : 'Lab-Grown'}
                      </div>
                      <div className="text-gray-600">Price:</div>
                      <div className="font-medium text-gray-800">${diamond.price}</div>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">Total</h3>
                    <span className="text-xl font-bold text-yellow-600">${calculateTotal()}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmitOrder}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingReview;