import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const RoundDiamonds = ({ onNext, onBack }) => {
  const [selectedDiamondType, setSelectedDiamondType] = useState(null);
  
  const diamondTypes = [
    { 
      id: 1, 
      name: "Brilliant Round", 
      price: 1200, 
      image: "https://media.istockphoto.com/id/1688371901/photo/diamond-top-view-with-caustic-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=3hXkEIwwIespsc0b3vmvV8tZxIPmhe0VOnGvJDvOgIk=",
      summary: "Classic 58-facet round brilliant cut for maximum sparkle",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 2, 
      name: "Premium Round", 
      price: 1500, 
      image: "https://media.istockphoto.com/id/1473952275/photo/dazzling-diamond-on-white-background-3d-render.jpg?s=612x612&w=0&k=20&c=1N2m9aCYK0jGHlJ2FSXdYNeDxNStM_SD4Wg-uVHiLyU=",
      summary: "Ideal cut proportions with excellent symmetry",
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      id: 3, 
      name: "Signature Round", 
      price: 1800, 
      image: "https://media.istockphoto.com/id/615831990/vector/diamond-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=dMCzb_x6cv6epUc3cm1KxficTtnwq1JmWKTEK4DSs1E=",
      summary: "Hearts and arrows precision cut for perfect patterns",
      color: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    { 
      id: 4, 
      name: "Classic Round", 
      price: 1000, 
      image: "https://media.istockphoto.com/id/1126649864/photo/diamond.jpg?s=612x612&w=0&k=20&c=UAg-wON0peve0NsE46vtY4bVcZ772TMkyo6OPAyMhAE=",
      summary: "Traditional round cut with excellent light performance",
      color: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    { 
      id: 5, 
      name: "Luxe Round", 
      price: 2000, 
      image: "https://media.istockphoto.com/id/507490553/photo/diamond.jpg?s=612x612&w=0&k=20&c=_bb6zXzE9TRr2zFLyOZeKg3SnKMWL_W8ACDMPzoDlvQ=",
      summary: "Super ideal cut with flawless clarity",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    { 
      id: 6, 
      name: "Champagne Round", 
      price: 1300, 
      image: "https://media.istockphoto.com/id/650730116/photo/diamond.jpg?s=612x612&w=0&k=20&c=OrVSjhCO5k-2iI_zpShB6WOWG0Mjw2wjxHOtDDlE7i4=",
      summary: "Warm champagne colored diamond with unique character",
      color: "bg-gradient-to-br from-amber-50 to-amber-100"
    },
    { 
      id: 7, 
      name: "Vintage Round", 
      price: 1600, 
      image: "https://media.istockphoto.com/id/1006571250/photo/diamond.jpg?s=612x612&w=0&k=20&c=UWyWOYyem6kSsJ5FhrHKFx0mJWXkEos0BN7KfPndPk4=",
      summary: "Old European cut with antique charm",
      color: "bg-gradient-to-br from-rose-50 to-rose-100"
    },
    { 
      id: 8, 
      name: "Royal Round", 
      price: 2200, 
      image: "https://media.istockphoto.com/id/547161700/photo/picture-of-diamond-beautiful-sparkling-shining-round-shape-emerald-image.jpg?s=612x612&w=0&k=20&c=0sXZ_rlkCPoEaxqQjc_UtTD0C-VSh96wggS7w-S63TM=",
      summary: "Exceptional D color with internally flawless clarity",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-[90vh] rounded-xl p-8">
      <button onClick={onBack} className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition">
        <FiChevronLeft className="mr-1" /> Back
      </button>
      
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Select Your Round Diamond</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {diamondTypes.map((diamond) => (
          <div 
            key={diamond.id}
            onClick={() => setSelectedDiamondType(diamond)}
            className={`border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full
              ${selectedDiamondType?.id === diamond.id 
                ? 'ring-4 ring-blue-500 shadow-xl transform scale-105' 
                : 'border-gray-200 hover:shadow-lg hover:border-blue-300'}`}
          >
            <div className={`${diamond.color} p-6 flex items-center justify-center h-48`}>
              <img 
                src={diamond.image} 
                alt={diamond.name} 
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" 
              />
            </div>
            
            <div className="p-4 bg-white flex-grow">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{diamond.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{diamond.summary}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-semibold text-blue-700">${diamond.price}</span>
                {selectedDiamondType?.id === diamond.id && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Selected</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => onNext(selectedDiamondType)}
          disabled={!selectedDiamondType}
          className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300
            ${!selectedDiamondType 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl'}`}
        >
          Continue to Style Selection
        </button>
      </div>
    </div>
  );
};

export default RoundDiamonds;