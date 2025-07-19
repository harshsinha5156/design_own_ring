// GoldSelection.js
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const PrincessDiamonds = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1, 
      name: "Regal Spark", 
      price: 500, 
      image: "https://media.istockphoto.com/id/2160167486/photo/diamond-with-high-quality-on-a-white-background.jpg?s=612x612&w=0&k=20&c=RltYa3avg5xmOlD28xSZIszQHIYVQCtBrvhRLv0Eisw=",
      summary: "Exquisite round brilliant cut that captures and reflects light with unparalleled brilliance, perfect for traditional elegance",
      color: "bg-gradient-to-br from-gray-100 to-gray-300"
    },
    { 
      id: 2, 
      name: "Crowned Grace", 
      price: 700, 
      image: "https://media.istockphoto.com/id/476147015/photo/diamond.jpg?s=612x612&w=0&k=20&c=DRqxQtfCGdRxoy_UyvH5O7VueUBICgCwEfCfVr9M8jI=",
      summary: "Luxurious cushion cut with romantic vintage appeal, featuring larger facets for exceptional fire and soft brilliance",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 3, 
      name: "Royal Prism", 
      price: 600, 
      image: "https://media.istockphoto.com/id/664518016/vector/shiny-white-diamond-illustration.jpg?s=612x612&w=0&k=20&c=IokPC-otx9oGU7lgTcALhMTGmom-46CZ_iV3sUX2i9U=",
      summary: "Radiant princess cut with sharp angular lines, offering modern sophistication and maximum sparkle",
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      id: 4, 
      name: "Noble Light", 
      price: 700, 
      image: "https://media.istockphoto.com/id/476147015/photo/diamond.jpg?s=612x612&w=0&k=20&c=DRqxQtfCGdRxoy_UyvH5O7VueUBICgCwEfCfVr9M8jI=",
      summary: "Elegant emerald cut with step facets that create a mesmerizing hall-of-mirrors effect and clean lines",
      color: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    { 
      id: 5, 
      name: "Majestic Cut", 
      price: 600, 
      image: "https://media.istockphoto.com/id/837411340/photo/3d-illustration-heart-diamond-stone.jpg?s=612x612&w=0&k=20&c=mwsya0gUi2ip2avYmfjVrKlL94xrgUcGV3z2JT_FYiw=",
      summary: "Romantic heart-shaped diamond symbolizing eternal love, with perfect symmetry and exceptional craftsmanship",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    { 
      id: 6, 
      name: "Queen's Whisper", 
      price: 700, 
      image: "https://media.istockphoto.com/id/2160167670/photo/diamond-with-high-quality-on-a-white-background.jpg?s=612x612&w=0&k=20&c=j7S5odu4Ner437EZqoJIPPqfl88wwLz8M1RZTvivBBU=",
      summary: "Oval cut diamond with elongated silhouette that creates the illusion of greater size and flatters the finger",
      color: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    { 
      id: 7, 
      name: "Imperial Shine", 
      price: 600, 
      image: "https://media.istockphoto.com/id/2025544173/photo/cushion-cut-diamond-perspective.jpg?s=612x612&w=0&k=20&c=k2lwHbtTdylmBKBlR5F4IgcAYp-r2nirV9BDn2-2HV0=",
      summary: "Marquise cut with regal French heritage, featuring pointed ends that maximize carat weight and create dazzling brilliance",
      color: "bg-gradient-to-br from-amber-50 to-amber-100"
    },
    { 
      id: 8, 
      name: "Diamond Throne", 
      price: 600, 
      image: "https://media.istockphoto.com/id/664518016/vector/shiny-white-diamond-illustration.jpg?s=612x612&w=0&k=20&c=IokPC-otx9oGU7lgTcALhMTGmom-46CZ_iV3sUX2i9U=",
      summary: "Pear-shaped diamond combining the elegance of marquise with the softness of round, offering unique tear-drop beauty",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-[90vh] rounded-xl p-8 ">
      <button onClick={onBack} className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition">
        <FiChevronLeft className="mr-1" /> Back
      </button>
      
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Select Your Princess Diamond</h2>
      
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

export default PrincessDiamonds;