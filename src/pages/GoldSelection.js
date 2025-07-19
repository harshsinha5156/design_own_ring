// GoldSelection.js
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const GoldSelection = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1,
      name: "14K Yellow Gold",
      price: 500,
      image: "https://media.istockphoto.com/id/942933268/vector/golden-wedding-ring.jpg?s=612x612&w=0&k=20&c=yvHazXD9gF14SOr9j_1kwu20Im0jl0EuKnBY1vyulVE=",
      summary: "58.3% pure gold with excellent durability",
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200"
    },
    { 
      id: 2, 
      name: "18K Yellow Gold", 
      price: 700, 
      image: "https://media.istockphoto.com/id/509638316/photo/gold-wedding-rings.jpg?s=612x612&w=0&k=20&c=fBGpH9qOQcEJtuW-kSTEYUWL5GToxxnsxlZdO4rmQT4=",
      summary: "75% pure gold with rich color and good durability",
      color: "bg-gradient-to-br from-yellow-200 to-amber-100"
    },
    { 
      id: 3, 
      name: "White Gold", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1388118240/vector/gold-round-button-with-frame-3d-golden-glossy-elegant-circle-design-for-empty-emblem.jpg?s=612x612&w=0&k=20&c=XRvTsqVf0Gn5PzvMiS9cRuabwa_-aZTNAtOL1U7SPFw=",
      summary: "Gold alloy with rhodium plating for silvery-white finish",
      color: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    { 
      id: 4, 
      name: "Blue Gold", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1674273955/photo/golden-earrings-and-ring-with-blue-amber.jpg?s=612x612&w=0&k=20&c=MnrACF_iZxiI9os6Bmdpjl92V8dK-B7CDrgB_8VAcnc=",
      summary: "Exotic gold alloy with blue hue from special metals",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 5, 
      name: "22K Yellow Gold", 
      price: 900, 
      image: "https://media.istockphoto.com/id/175218669/photo/wedding-ring.jpg?s=612x612&w=0&k=20&c=y4bF26LvC96_pUjPiKfCYEzBxrF7RUOxlIe7-Lj4smY=",
      summary: "91.6% pure gold with deep yellow color",
      color: "bg-gradient-to-br from-amber-100 to-amber-200"
    },
    { 
      id: 6, 
      name: "18K Rose Gold", 
      price: 850, 
      image: "https://media.istockphoto.com/id/93462697/photo/single-gold-diamond-ring-over-a-white-background.jpg?s=612x612&w=0&k=20&c=cUVCVQOM6PjnU_6yAolBC6SGLH1Xz5A1UgcBqUBLGhQ=",
      summary: "Gold alloy with copper for warm pinkish hue",
      color: "bg-gradient-to-br from-pink-100 to-rose-100"
    },
    { 
      id: 7, 
      name: "24K Gold", 
      price: 1000, 
      image: "https://media.istockphoto.com/id/641830410/photo/gold-ring-isolated.jpg?s=612x612&w=0&k=20&c=6xsldB5HbPCnkBgxKDaX0COADcn6eUJR6mhyOiqGzWk=",
      summary: "99.9% pure gold - the highest purity available",
      color: "bg-gradient-to-br from-yellow-300 to-amber-200"
    },
    { 
      id: 8, 
      name: "Black Gold", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1319968540/vector/gold-round-frame-for-picture-on-black-background-blank-space-for-picture-painting-card-or.jpg?s=612x612&w=0&k=20&c=zPo3FV20Fwfm-jAiHAaJZITKBtQkN3qJx4ykF23b5ac=",
      summary: "Gold treated for dramatic black surface",
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
          <h2 className="text-4xl font-bold text-gray-800 text-center">Select Your Gold Type</h2>
          <p className="text-lg text-gray-500 text-center">Choose from our premium gold collection</p>
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

export default GoldSelection;