// GoldSelection.js
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const GoldSelection = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1, 
      name: "Nova Spark", 
      price: 500, 
      image: "https://media.istockphoto.com/id/468026967/photo/beautiful-diamond-ring.jpg?s=612x612&w=0&k=20&c=xs7qS7kkz4tQWE89oIJTrYEPqRiXDVt169ybjpNkaWU=",
      summary: "Supernova-inspired prong setting with brilliant-cut diamonds that catch every ray of light",
      color: "bg-gradient-to-br from-gray-100 to-gray-300"
    },
    { 
      id: 2, 
      name: "Orion Edge", 
      price: 700, 
      image: "https://media.istockphoto.com/id/468017191/photo/three-stone-diamond-engagement-wedding-ring.jpg?s=612x612&w=0&k=20&c=QtvPqA11r16IaNt17dpRzZEwSBI4iO6ZIjDuLdadUIE=",
      summary: "Geometric three-stone design with baguette side stones for celestial precision",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 3, 
      name: "Luxe Infinity", 
      price: 600, 
      image: "https://media.istockphoto.com/id/468131229/photo/cushion-cut-diamond-ring-in-rose-gold-halo-setting.jpg?s=612x612&w=0&k=20&c=me28jVsyqpZo0nVbvjakMbfQZvJkkBVPHJpFLBhjbFo=",
      summary: "Continuous diamond band symbolizing eternal love with modern rose gold warmth",
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      id: 4, 
      name: "Astra Glow", 
      price: 700, 
      image: "https://media.istockphoto.com/id/873357040/photo/beautiful-diamond-ring-marquise-cut-engagement-wedding-ring.jpg?s=612x612&w=0&k=20&c=_1jeq1ZUOGvXrYX_remHPN_F7oTmYIkxSt-Hiqvv2oE=",
      summary: "Marquise center stone with micro-pavé halo that glows like distant stars",
      color: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    { 
      id: 5, 
      name: "Vera Pulse", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1398142896/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=69GAkGfquLgO1jzhfxaa1SFYAFaO-tBpMHtxNSjizIs=",
      summary: "Rhythmically spaced channel-set diamonds create a pulsing visual effect",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    { 
      id: 6, 
      name: "Zenia Mirage", 
      price: 700, 
      image: "https://media.istockphoto.com/id/537301229/photo/ring-with-diamond.jpg?s=612x612&w=0&k=20&c=lOYwnWzfIepqFzFsjJGcqePVcf8qj7sjtx_ZTTkJ0P8=",
      summary: "Illusion setting makes the center diamond appear to float in mid-air",
      color: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    { 
      id: 7, 
      name: "Lyra Twist", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1165223921/photo/women-fashion-bracelet.jpg?s=612x612&w=0&k=20&c=K6G8p8n3OPgIY9u_jfVOUktHNmDK-RkG3TxJips1TsY=",
      summary: "Interwoven bands create a lyrical dance of white and rose gold",
      color: "bg-gradient-to-br from-amber-50 to-amber-100"
    },
    { 
      id: 8, 
      name: "Echo Linea", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1027823454/photo/jewelry-silver-ring-with-white-diamond.jpg?s=612x612&w=0&k=20&c=Z_DGpYpACtkSXNvk0z2iE4cZey92rGgeGFJE62EBK1U=",
      summary: "Minimalist tension setting creates the illusion of diamonds suspended in space",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-[90vh] rounded-xl p-8 bg-gray-50">
      <button onClick={onBack} className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition">
        <FiChevronLeft className="mr-1" /> Back
      </button>
      
      <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">Select Your Modern Ring</h2>
      <p className="text-center text-gray-600 mb-8">Contemporary designs for the fashion-forward</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {goldTypes.map((gold) => (
          <div 
            key={gold.id}
            onClick={() => setSelectedGoldType(gold)}
            className={`border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full
              ${selectedGoldType?.id === gold.id 
                ? 'ring-4 ring-blue-500 shadow-xl transform scale-105' 
                : 'border-gray-200 hover:shadow-lg hover:border-blue-300'}`}
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
                <span className="text-lg font-semibold text-blue-700">${gold.price}</span>
                {selectedGoldType?.id === gold.id && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Selected</span>
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
              : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl'}`}
        >
          Continue to Design
        </button>
      </div>
    </div>
  );
};

export default GoldSelection;