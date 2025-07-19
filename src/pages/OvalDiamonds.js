// GoldSelection.js
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const OvalDiamonds = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1,
      name: "Elegant Eclipse",
      price: 500,
      image: "https://media.istockphoto.com/id/1985095721/photo/emerald-cut-diamond-exhibition-of-precious-stones-top-view.jpg?s=612x612&w=0&k=20&c=7kUZqnP_WnqXtQnhpvLx4qTkKam9ZORHrfOzEeG-DOo=",
      summary: "Classic yellow gold setting that creates a celestial glow around your oval diamond, like the moon during an eclipse",
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200"
    },
    { 
      id: 2, 
      name: "Timeless Curve", 
      price: 700, 
      image: "https://media.istockphoto.com/id/837412260/photo/3d-illustration-asscher-diamond-stone.jpg?s=612x612&w=0&k=20&c=ZLaeBB3BTEgdV5ypas6znOQsgtQf2QZdOw0pDJhcL_o=",
      summary: "Warm amber gold that enhances the oval's graceful curves with a vintage, everlasting appeal",
      color: "bg-gradient-to-br from-yellow-200 to-amber-100"
    },
    { 
      id: 3, 
      name: "Radiant Oval", 
      price: 600, 
      image: "https://media.istockphoto.com/id/2219154173/photo/luxury-diamond-radiant-cut-top-view.jpg?s=612x612&w=0&k=20&c=-xaqqYBGWwz4Rv81j64ZhPGb90wfluw14dcSVEkOOFI=",
      summary: "Modern white gold setting that makes your oval diamond shine with contemporary brilliance",
      color: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    { 
      id: 4, 
      name: "Velvet Spark", 
      price: 600, 
      image: "https://media.istockphoto.com/id/2221478426/photo/luxury-diamond-rectangular-cushion-cut-top-view.jpg?s=612x612&w=0&k=20&c=xclzEGa26TFhEsgmpV0iqp6jRgCwjU8CcHXpC-1LZv0=",
      summary: "Cool blue-tinted gold that makes your diamond sparkle like stars on a velvet night sky",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 5, 
      name: "Infinity Glow", 
      price: 900, 
      image: "https://media.istockphoto.com/id/2219154141/photo/luxury-diamond-claf-cut-top-view.jpg?s=612x612&w=0&k=20&c=9YGVFVBJ26PFeUqNLRA2uvoZCpEqfGn1OEzEv3dt8Xk=",
      summary: "Deep amber gold that creates an endless warm glow around your precious oval diamond",
      color: "bg-gradient-to-br from-amber-100 to-amber-200"
    },
    { 
      id: 6, 
      name: "Serene Shine", 
      price: 850, 
      image: "https://media.istockphoto.com/id/1567867341/photo/rectangle-radiant-cut-diamond-on-white-background.jpg?s=612x612&w=0&k=20&c=i6p8RMkDmm_iB49mARvt7KDJlO6BM11ksfbDGZTT2lA=",
      summary: "Romantic rose gold that gives your oval diamond a soft, serene and feminine radiance",
      color: "bg-gradient-to-br from-pink-100 to-rose-100"
    },
    { 
      id: 7, 
      name: "Opal Whisper", 
      price: 1000, 
      image: "https://media.istockphoto.com/id/2221478420/photo/luxury-diamond-simple-square-cut-top-view.jpg?s=612x612&w=0&k=20&c=iZ-aQFG4pXh-qtj9MLV4tYy4TfF3WSAb-bM-rJ6XcEk=",
      summary: "Pure 24k gold that whispers luxury, making your oval diamond glow with opal-like fire",
      color: "bg-gradient-to-br from-yellow-300 to-amber-200"
    },
    { 
      id: 8, 
      name: "Lunar Grace", 
      price: 600, 
      image: "https://media.istockphoto.com/id/2221478409/photo/luxury-diamond-koffin-cut-top-view.jpg?s=612x612&w=0&k=20&c=sHSUdBJqnX4A_loyHi8HMIadRtkz8uEe03lw93uKQ3c=",
      summary: "Mysterious blackened gold that makes your oval diamond shine like moonlight on dark water",
      color: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
  ];

  return (
    <div className="min-h-[60vh] rounded-xl p-8 ">
      {/* Enhanced header section */}
      <div className="mb-10">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 transition mb-4">
          <FiChevronLeft className="mr-1 text-xl" /> Back
        </button>
        
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Select Your Oval Diamond </h2>
          
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {goldTypes.map((gold) => (
          <div 
            key={gold.id}
            onClick={() => setSelectedGoldType(gold)}
            className={`border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full
              ${selectedGoldType?.id === gold.id 
                ? 'ring-4 ring-yellow-500 shadow-xl transform scale-105' 
                : 'border-gray-200 hover:shadow-lg hover:border-yellow-300'}`}
          >
            <div className={`${gold.color} p-6 flex items-center justify-center h-48`}>
              <img 
                src={gold.image} 
                alt={gold.name} 
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" 
              />
            </div>
            
            <div className="p-5 bg-white flex-grow">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{gold.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{gold.summary}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-semibold text-yellow-700">${gold.price}</span>
                {selectedGoldType?.id === gold.id && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Selected</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => onNext(selectedGoldType)}
          disabled={!selectedGoldType}
          className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300
            ${!selectedGoldType 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg hover:from-yellow-600 hover:to-yellow-700 hover:shadow-xl'}`}
        >
          Continue to Design
        </button>
      </div>
    </div>
  );
};

export default OvalDiamonds;