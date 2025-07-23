


import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiHeart } from 'react-icons/fi';
import { useState } from 'react';
import DiamondTypePopup from './DiamondTypePopup';

const RingDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const ring = state?.ring;
  const [showDiamondPopup, setShowDiamondPopup] = useState(false);

  const handleChooseSetting = () => {
    // Show the popup instead of navigating immediately
    setShowDiamondPopup(true);
  };

  const handleDiamondSelect = (diamondType) => {
    setShowDiamondPopup(false);
    
    if (diamondType === 'natural') {
      navigate('/natural-diamond', { 
        state: { 
          ringId: ring.id, // Make sure your ring object has an id
          ring: ring,      // Pass the entire ring object
          diamondType: 'natural'
        } 
      });
    } else if (diamondType === 'lab-grown') {
      navigate('/lab-grown-diamond-selection', { 
        state: { 
          ringId: ring.id,
          ring: ring,
          diamondType: 'lab-grown'
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50">
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
                and designed to make a statement. Perfect for engagements, anniversaries, or special occasions.
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

      {/* Diamond Type Popup - Moved outside the main content div */}
      {showDiamondPopup && (
        <DiamondTypePopup 
          onClose={() => setShowDiamondPopup(false)}
          onSelect={handleDiamondSelect}
        />
      )}
    </div>
  );
};

export default RingDetailPage;



