// GoldSelection.js
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const GoldSelection = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1,
      name: "Blush Radiance",
      price: 500,
      image: "https://media.istockphoto.com/id/1406240462/photo/coral-reef-abstract-pearl-purple-blue-colorful-background-sunlight-refraction-summer-tropical.jpg?s=612x612&w=0&k=20&c=lkPXFa319_NCIThZPWwJWPMTNzg_ci5236ycE2T7XOI=",
      summary: "58.3% pure gold with excellent durability",
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200"
    },
    { 
      id: 2, 
      name: "Rose Elegance", 
      price: 700, 
      image: "https://media.istockphoto.com/id/1300325016/vector/shining-rose-and-gold-stone-marble-texture-alcohol-ink-technique.jpg?s=612x612&w=0&k=20&c=F_GSxD1sF6ulrRthv4nHLQG3Gypi8d9wwOOK_ItsoPo=",
      summary: "Exquisite rose stone with golden accents",
      color: "bg-gradient-to-br from-rose-100 to-rose-200"
    },
    { 
      id: 3, 
      name: "Sunset Bloom", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1291065349/photo/ndiamond-shine-light-pendant-in-sunset.jpg?s=612x612&w=0&k=20&c=NXdgl1dyz7BvjtANmaCLEUYmF-9jilbzVCL7KLgXH8Q=",
      summary: "Captures the warmth of golden hour",
      color: "bg-gradient-to-br from-orange-50 to-amber-100"
    },
    { 
      id: 4, 
      name: "Rosé Whisper", 
      price: 600, 
      image: "https://media.istockphoto.com/id/2163065057/photo/gemstone-on-a-white-background.jpg?s=612x612&w=0&k=20&c=sc5IvS_kQUeLxOKTHCDtBgUon0ugOLCSkRKxe56QU5Q=",
      summary: "Deep blue gemstone with gold setting",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 5, 
      name: "Vintage Blush", 
      price: 900, 
      image: "https://media.istockphoto.com/id/1156074217/photo/a-ring-with-a-sapphire-on-black-stones.jpg?s=612x612&w=0&k=20&c=41BBL9uPwIU3E1SpOYEUZojNELUpQvulefty7EG0gVM=",
      summary: "91.6% pure gold with deep yellow color",
      color: "bg-gradient-to-br from-amber-100 to-amber-200"
    },
    { 
      id: 6, 
      name: "Orchid Rose", 
      price: 850, 
      image: "https://media.istockphoto.com/id/1296007443/photo/composition-with-pink-orchid-flower-and-ice-or-crystals-on-a-rusty-background-top-view.jpg?s=612x612&w=0&k=20&c=BaapkiXrcxM_7gWdisNvTN-iaVH4f9Bjsd-xFc_sv94=",
      summary: "Delicate pink crystals in rose gold",
      color: "bg-gradient-to-br from-pink-100 to-rose-100"
    },
    { 
      id: 7, 
      name: "Golden Petal", 
      price: 1000, 
      image: "https://media.istockphoto.com/id/610131160/photo/gems-on-white.jpg?s=612x612&w=0&k=20&c=2ag2PIjuuGghh58Rmg1vgr0WO-mGTx89-dtccypo1OU=",
      summary: "99.9% pure gold - the highest purity",
      color: "bg-gradient-to-br from-yellow-300 to-amber-200"
    },
    { 
      id: 8, 
      name: "Copper Kiss", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1478731613/photo/closeup-shot-of-handmade-tubular-shape-copper-ring-on-black-background.jpg?s=612x612&w=0&k=20&c=wORR-roSMd8d10-3teXyDacBI_wAlDAccBphXt4RmoY=",
      summary: "Dramatic black onyx with gold accents",
      color: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
  ];
  return (
    <div className="min-h-[90vh] rounded-xl p-8 ">
      <button onClick={onBack} className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition">
        <FiChevronLeft className="mr-1" /> Back
      </button>
      
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Select Your Rose Gold Type</h2>
      
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