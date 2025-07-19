// GoldSelection.js
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const GoldSelection = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1, 
      name: "Timeless Band", 
      price: 500, 
      image: "https://media.istockphoto.com/id/1339341461/photo/ring.jpg?s=612x612&w=0&k=20&c=jyOR5txEhynbLukJaImOFXWomCt-OougaMo_ajBnJTg=",
      summary: "95% pure platinum with brilliant white luster",
      color: "bg-gradient-to-br from-gray-100 to-gray-300"
    },
    { 
      id: 2, 
      name: "Eternal Grace", 
      price: 700, 
      image: "https://media.istockphoto.com/id/468026967/photo/beautiful-diamond-ring.jpg?s=612x612&w=0&k=20&c=xs7qS7kkz4tQWE89oIJTrYEPqRiXDVt169ybjpNkaWU=",
      summary: "90% platinum alloy with enhanced durability",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 3, 
      name: "Pure Promise", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1398142896/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=69GAkGfquLgO1jzhfxaa1SFYAFaO-tBpMHtxNSjizIs=",
      summary: "Premium alloy with 10% iridium for hardness",
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      id: 4, 
      name: "Golden Era", 
      price: 700, 
      image: "https://media.istockphoto.com/id/513683476/photo/diamond-solitaire-engagement-wedding-ring.jpg?s=612x612&w=0&k=20&c=51tkaBFOpAQaBfkK_L27JFwujM9Hxq3NKECWb3Ec1uQ=",
      summary: "Ruthenium alloy for exceptional tarnish resistance",
      color: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    { 
      id: 5, 
      name: "Forever Classic", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1314820264/photo/engagement-diamond-ring-with-reflection-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=jxH82AF12HrIlBhiTysYm65fCSbFWbXJRatWyGUOfxs=",
      summary: "Magnetic alloy perfect for special applications",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    { 
      id: 6, 
      name: "Heirloom Shine", 
      price: 700, 
      image: "https://media.istockphoto.com/id/537301229/photo/ring-with-diamond.jpg?s=612x612&w=0&k=20&c=lOYwnWzfIepqFzFsjJGcqePVcf8qj7sjtx_ZTTkJ0P8=",
      summary: "Bright white finish with nickel enhancement",
      color: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    { 
      id: 7, 
      name: "Legacy Loop", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1392305676/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=Fch1m3Ozk0NAAhH5DwI445HDdzQLgAX6BGf13Yf1tp4=",
      summary: "Cost-effective blend with sterling silver",
      color: "bg-gradient-to-br from-amber-50 to-amber-100"
    },
    { 
      id: 8, 
      name: "True Elegance", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1243621510/photo/the-core-of-each-catalytic-converter-is-an-internal-ceramic-honeycomb-structure-that-has-a.jpg?s=612x612&w=0&k=20&c=kTCVq4O6U2G_C-A2zfVJLIQov1ZZ4WtRA1YEq6exRos=",
      summary: "Eco-conscious platinum from certified sources",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-[90vh] rounded-xl p-8 ">
      <button onClick={onBack} className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition">
        <FiChevronLeft className="mr-1" /> Back
      </button>
      
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Select Your Classic Ring</h2>
      
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
            
            <div className="p-4 bg-white flex-grow">
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
      
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => onNext(selectedGoldType)}
          disabled={!selectedGoldType}
          className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300
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

export default GoldSelection;