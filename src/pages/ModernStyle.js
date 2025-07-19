// GoldSelection.js
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const GoldSelection = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1, 
      name: "950 Platinum", 
      price: 500, 
      image: "https://media.istockphoto.com/id/525214262/photo/3-dimensional-render-of-wedding-ring.jpg?s=612x612&w=0&k=20&c=OR7n-PON-D6UYe3EyHnEMmytNxctaztA8ON4Q6hpk7o=",
      summary: "95% pure platinum with brilliant white luster",
      color: "bg-gradient-to-br from-gray-100 to-gray-300"
    },
    { 
      id: 2, 
      name: "900 Platinum", 
      price: 700, 
      image: "https://media.istockphoto.com/id/974501164/photo/diamond-flower-ring-love-symbol.jpg?s=612x612&w=0&k=20&c=dgXJEhzsXBqD2v6YUlwTun0MnGHvR1cCL69s8LOzy64=",
      summary: "90% platinum alloy with enhanced durability",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 3, 
      name: "Platinum-Iridium", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1189325759/photo/especially-minerals-are-called-which-are-said-to-have-a-healing-effect-in-diseases-or-to.jpg?s=612x612&w=0&k=20&c=GRhklCQf_r4YkGF1Wn96GYIhRmNy5qYro_AauMbT3Fw=",
      summary: "Premium alloy with 10% iridium for hardness",
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      id: 4, 
      name: "Platinum-Ruthenium", 
      price: 700, 
      image: "https://media.istockphoto.com/id/1300219377/photo/titanium-metal-alloy-light-and-resistant-industrial-metal-used-in-the-industry.jpg?s=612x612&w=0&k=20&c=zNT97KF8wJ6nrcp9O90Wv4aReJ_vm9FKqOAOmu3DaB4=",
      summary: "Ruthenium alloy for exceptional tarnish resistance",
      color: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    { 
      id: 5, 
      name: "Platinum-Cobalt", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1493242011/photo/hessite-is-a-mineral-form-of-telluride-disilver-it-is-a-relatively-rare-sulfide.jpg?s=612x612&w=0&k=20&c=0CTAqfW9gEUjXmJR5FstBBAQs7I9znLocDQdcuEgw5w=",
      summary: "Magnetic alloy perfect for special applications",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    { 
      id: 6, 
      name: "Platinum-Nickel", 
      price: 700, 
      image: "https://media.istockphoto.com/id/1833690755/photo/close-up-of-a-silver-medal-with-the-spanish-phrase-nunca-pierdas-la-fe-concept-of-faith-and.jpg?s=612x612&w=0&k=20&c=PCeZXl20lVKq4oOojOE6RTHRjUItyVDMBSX39wUWocU=",
      summary: "Bright white finish with nickel enhancement",
      color: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    { 
      id: 7, 
      name: "Platinum-Silver", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1489155015/photo/cobalt-is-a-chemical-element-symbol-co-used-to-create-metal-alloys.jpg?s=612x612&w=0&k=20&c=ZXYawrFbhoVv0iIqDjMfA-j2h25TGvgFkPEge4JXvyc=",
      summary: "Cost-effective blend with sterling silver",
      color: "bg-gradient-to-br from-amber-50 to-amber-100"
    },
    { 
      id: 8, 
      name: "Recycled Platinum", 
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
      
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Select Your Platinum Type</h2>
      
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