
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const VintageStyle = ({ onNext, onBack }) => {
  const [selectedGoldType, setSelectedGoldType] = useState(null);
  
  const goldTypes = [
    { 
      id: 1, 
      name: "Evelyn Blossom", 
      price: 500, 
      image: "https://media.istockphoto.com/id/620976892/photo/decorative-accessories.jpg?s=612x612&w=0&k=20&c=yhaImJ8UZMTdLgnS57t-T-QGxqfIxpJ44z738acB2Sc=",
      summary: "Delicate floral filigree reminiscent of 1920s garden parties, with petite diamond buds",
      color: "bg-gradient-to-br from-gray-100 to-gray-300"
    },
    { 
      id: 2, 
      name: "The Rosewood Halo", 
      price: 700, 
      image: "https://media.istockphoto.com/id/620976762/photo/decorative-accessories.jpg?s=612x612&w=0&k=20&c=EiApjuRpWXYfkINNvCXBwBKYEWAhw21Z2dVFwgmYkjw=",
      summary: "Warm rose gold halo setting evoking Victorian pressed flower jewelry",
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: 3, 
      name: "Celeste Crown", 
      price: 600, 
      image: "https://media.istockphoto.com/id/859220528/photo/purple-gemstone-on-diamond-ring.jpg?s=612x612&w=0&k=20&c=aTqnx8pbSsBo_eq5xqQM8l82go_0h3hZ4TcWY76k-ys=",
      summary: "Regal amethyst centerpiece surrounded by a celestial crown of milgrain diamonds",
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      id: 4, 
      name: "Margaux Heirloom", 
      price: 700, 
      image: "https://media.istockphoto.com/id/1096001316/photo/close-up-of-decorative-small-container-isolated-on-white-with-silver-cover-on-it-and-colorful.jpg?s=612x612&w=0&k=20&c=nOkx4In1gm7h98Vq3IVgohI3M6CgfQPItFa4Rvm3BvU=",
      summary: "Intricate Edwardian-style scrollwork passed down through generations of noble families",
      color: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    { 
      id: 5, 
      name: "Luna Lace", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1488421468/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=-wNPleUppYXn_A8jn_nLgDHyqj0t7RSLCKuQ-6zNLW8=",
      summary: "Moonstone centerpiece wrapped in delicate silver lacework from the Art Nouveau era",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    { 
      id: 6, 
      name: "Isabelle Twist", 
      price: 700, 
      image: "https://media.istockphoto.com/id/962426028/photo/purple-gemstone-on-diamond-ring.jpg?s=612x612&w=0&k=20&c=wPyaodNX7M_2-RDJCCKm2hrMMvG6_id85cJxta4gBr4=",
      summary: "Romantic intertwined bands inspired by 19th century love token jewelry",
      color: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    { 
      id: 7, 
      name: "Ophelia Garden", 
      price: 600, 
      image: "https://media.istockphoto.com/id/454967357/photo/white-gem-ring.jpg?s=612x612&w=0&k=20&c=9l_PKEc2et1NEoKlx4umVVYXncK_SzDJNhnRmrdw9pM=",
      summary: "Enamel floral motifs and seed pearls recreate Shakespearean botanical beauty",
      color: "bg-gradient-to-br from-amber-50 to-amber-100"
    },
    { 
      id: 8, 
      name: "The Aurora Scroll", 
      price: 600, 
      image: "https://media.istockphoto.com/id/1084111106/photo/silver-bracelet-with-black-gems-on-satin-dark-background.jpg?s=612x612&w=0&k=20&c=BrHHGe7TIf7oUr9iwnJpHedK2H1ozAGaEH8HVFyumrU=",
      summary: "Byzantine-inspired scrollwork with sapphires that shimmer like the northern lights",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-[90vh] rounded-xl p-8 bg-amber-50 bg-opacity-20">
      <button onClick={onBack} className="flex items-center text-gray-600 mb-6 hover:text-gray-900 transition">
        <FiChevronLeft className="mr-1" /> Back
      </button>
      
      <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center font-serif">Select Your Vintage Ring</h2>
      <p className="text-center text-gray-600 mb-8 italic">Timeless pieces with stories to tell</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {goldTypes.map((gold) => (
          <div 
            key={gold.id}
            onClick={() => setSelectedGoldType(gold)}
            className={`border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full
              ${selectedGoldType?.id === gold.id 
                ? 'ring-4 ring-amber-400 shadow-xl transform scale-105' 
                : 'border-gray-200 hover:shadow-lg hover:border-amber-300'}`}
          >
            <div className={`${gold.color} p-6 flex items-center justify-center h-48`}>
              <img 
                src={gold.image} 
                alt={gold.name} 
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" 
              />
            </div>
            
            <div className="p-4 bg-white flex-grow">
              <h4 className="text-xl font-bold text-gray-800 mb-2 font-serif">{gold.name}</h4>
              <p className="text-sm text-gray-600 mb-3 italic">{gold.summary}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-semibold text-amber-700">${gold.price}</span>
                {selectedGoldType?.id === gold.id && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Selected</span>
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
              : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:from-amber-600 hover:to-amber-700 hover:shadow-xl'}`}
        >
          Continue to Design
        </button>
      </div>
    </div>
  );
};

export default VintageStyle;