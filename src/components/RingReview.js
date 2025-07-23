import { useLocation, useNavigate } from 'react-router-dom';

const RingReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    ringId, 
    diamondType, 
    diamond, 
    metalType, 
    metalPrice,
    styleType,
    stylePrice
  } = location.state || {};

  const ring = {
    id: ringId,
    name: 'Classic Solitaire Setting',
    price: stylePrice || 1200,
    image: 'https://media.istockphoto.com/id/498549260/photo/engagement-ring-made-of-white-gold.jpg?s=612x612&w=0&k=20&c=wKF6a2DxbI2ruIvCDoRn3OLEyvqrOBVx5salux0VRLc='
  };

  const calculateTotal = () => {
    return (ring.price || 0) + 
           (diamond?.price || 0) + 
           (metalPrice || 0);
  };

  const handleSubmitOrder = () => {
    // Navigate to confirmation page with all the order details
    navigate('/confirmation', {
      state: {
        ring,
        diamondType,
        diamond,
        metalType,
        metalPrice,
        styleType,
        total: calculateTotal()
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>
      
      <h1 className="text-3xl font-bold mb-8">Final Step: Review & Submit</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center h-96">
            <img 
              src={ring.image} 
              alt={ring.name} 
              className="h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Metal Selection:</h3>
              <p>Type: {metalType || 'Not selected'}</p>
              <p>Price: ${metalPrice || 0}</p>
            </div>

            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Setting Style:</h3>
              <p>Type: {styleType || 'Classic Solitaire'}</p>
              <p>Price: ${ring.price}</p>
            </div>

            {diamond && (
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Diamond Details:</h3>
                <p>Type: {diamondType === 'natural' ? 'Natural' : 'Lab-Grown'}</p>
                <p>Shape: {diamond.shape}</p>
                <p>Carat: {diamond.carat}ct</p>
                <p>Color: {diamond.color}</p>
                <p>Clarity: {diamond.clarity}</p>
                <p>Cut: {diamond.cut || 'Not specified'}</p>
                <p>Price: ${diamond.price}</p>
              </div>
            )}

            <div className="border-t border-gray-200 pt-4 mb-6">
              <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
            </div>
          </div>

          <button 
            onClick={handleSubmitOrder}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-full font-bold text-lg transition duration-300"
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default RingReview;