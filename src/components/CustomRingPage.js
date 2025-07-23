<<<<<<< HEAD



=======
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight, FiShoppingBag, FiHeart, FiSearch, FiX } from 'react-icons/fi';

const CustomRingPage = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedMetal, setSelectedMetal] = useState(null);
  const navigate = useNavigate();

  // Progress steps state
  const [currentStep, setCurrentStep] = useState(1);

  // Updated sample data for ring options
  const styles = [
    { id: 1, name: "Vintage", image: "https://media.istockphoto.com/id/498549260/photo/engagement-ring-made-of-white-gold.jpg?s=612x612&w=0&k=20&c=wKF6a2DxbI2ruIvCDoRn3OLEyvqrOBVx5salux0VRLc=" },
    { id: 2, name: "Classic", image: "https://media.istockphoto.com/id/187077535/photo/wedding-gold-diamond-ring-on-white-background.jpg?s=612x612&w=0&k=20&c=CkmxFCiyDsBzq4QpIFCouENrHT9ciWR0i__Js_bk_t0=" },
    { id: 3, name: "Modern", image: "https://media.istockphoto.com/id/479283068/photo/ring-with-diamond.jpg?s=612x612&w=0&k=20&c=0ikleea4k8Olu4VNoOk0l7UU4tvku6nriESRE2A183U=" }
  ];

  const metals = [
    { id: 1, name: "Yellow Gold", image: "https://media.istockphoto.com/id/1130707014/photo/abstract-background-reflection-rough-gold-floor-texture.jpg?s=612x612&w=0&k=20&c=Iu5fh4uunE0IfivTWz8CmCek-aSkajYKOgTX4Dzqoto=" },
    { id: 2, name: "Rose Gold", image: "https://images.pexels.com/photos/15067861/pexels-photo-15067861.jpeg" },
    { id: 3, name: "Platinum", image: "https://media.istockphoto.com/id/1130707008/photo/abstract-background-reflection-rough-chrome-metal-texture.jpg?s=612x612&w=0&k=20&c=Z2BoMyTKsIPv6ac-M1oKBPvRSO-Q_Pv4opNeHsmaTJM=" }
  ];

  // Sample ring data with style and metal combinations
  const allRings = [
    { 
      id: 1, 
      name: "Vintage Yellow Gold Ring", 
      price: 1200, 
      style: "Vintage", 
      metal: "Yellow Gold",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Valentina-Solitaire-Ring-gold-pv-12.png"
    },
<<<<<<< HEAD
     { 
=======
    { 
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
      id: 2, 
      name: "Vintage Yellow Gold Ring", 
      price: 1200, 
      style: "Vintage", 
      metal: "Yellow Gold",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Valentina-Solitaire-Ring-gold-pv-12.png"
    },
     { 
      id: 3, 
      name: "Vintage Yellow Gold Ring", 
      price: 1200, 
      style: "Vintage", 
      metal: "Yellow Gold",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Adelina-Grace-Vintage-Ring-rosegold-pv-15.png"
    },
    { 
      id: 4, 
      name: "Vintage Rose Gold Ring", 
      price: 1300, 
      style: "Vintage", 
      metal: "Rose Gold",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/eclipse-embrace-stone-ring-rosegold-fv.webp"
    },
    { 
      id: 5, 
      name: "Vintage Rose Ring", 
      price: 1500, 
      style: "Vintage", 
      metal: "Rose",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/roselyn-charm-vintage-ring-rosegold-pv.webp"
    },
    { 
      id: 6, 
      name: "Classic Yellow Gold Ring", 
      price: 1100, 
      style: "Classic", 
      metal: "Rose",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/roselyn-charm-vintage-ring-rosegold-tv.webp"
    },
    { 
      id: 7, 
      name: "Classic Platinum Gold Ring", 
      price: 1150, 
      style: "Classic", 
      metal: "Platinum",
      image: "https://media.istockphoto.com/id/1744116325/photo/diamond-jewelry-rings-luxury-accessories-beauty-fashion.jpg?s=612x612&w=0&k=20&c=3mJsEujwJSCqSMm2RRSZ8QKEoQeEb0GyWEMyqQxADLM="
    },
    { 
      id: 8, 
      name: "Classic Platinum Ring", 
      price: 1400, 
      style: "Classic", 
      metal: "Platinum",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/roselyn-charm-vintage-ring-whitegold-pv-2.webp"
    },
    { 
      id: 9, 
      name: "Modern Yellow Gold Ring", 
      price: 1250, 
      style: "Modern", 
      metal: "Yellow Gold",
      image: "https://media.istockphoto.com/id/182786637/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=unlyBs6cdV7_jrwBjkOyBKkqVbRh5cR2PwCPUk3xwFc="
    },
    { 
      id: 10, 
      name: "Modern Rose Gold Ring", 
      price: 1350, 
      style: "Modern", 
      metal: "Rose Gold",
      image: "https://images.pexels.com/photos/10475789/pexels-photo-10475789.jpeg"
    },
    { 
      id: 11, 
      name: "Modern Platinum Ring", 
      price: 1600, 
      style: "Modern", 
      metal: "Platinum",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/eternal-grace-split-shank-ring-whitegold-pv-2.webp"
    },
    { 
      id: 12, 
      name: "Elegant Vintage Ring", 
      price: 1450, 
      style: "Vintage", 
      metal: "Platinum",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Celine-Bypass-Solitaire-Ring-whitegold-pv-31.png"
    },
    { 
      id: 13, 
      name: "Timeless Classic Ring", 
      price: 1250, 
      style: "Classic", 
      metal: "Rose Gold",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Noelle-Double-Halo-Engagement-Ring-whitegold-pv-31.png"
    },
    { 
      id: 14, 
      name: "Sleek Modern Ring", 
      price: 1550, 
      style: "Modern", 
      metal: "Yellow Gold",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Marcella-Three-Stone-Engagement-Ring-whitegold-pv-31.png"
<<<<<<< HEAD
    },
    { 
      id: 15, 
=======
    },{ 
      id: 16, 
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
      name: "Timeless Classic Ring", 
      price: 1250, 
      style: "Classic", 
      metal: "Rose Gold",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/Noelle-Double-Halo-Engagement-Ring-whitegold-pv-31.png"
    },
    { 
<<<<<<< HEAD
      id: 16, 
=======
      id: 14, 
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
      name: "Sleek Modern Ring", 
      price: 1550, 
      style: "Modern", 
      metal: "Platinum",
      image: "https://web-design-company.site/qa/kdmlite/wp-content/uploads/2025/07/auric-pillar-side-stone-ring-whitegold-pv-1.webp"
    }
  ];

  // Filter rings based on selected style and metal
  const filteredRings = allRings.filter(ring => {
    const styleMatch = selectedStyle ? ring.style === selectedStyle.name : true;
    const metalMatch = selectedMetal ? ring.metal === selectedMetal.name : true;
    return styleMatch && metalMatch;
  });

  const handleStyleSelect = (style) => {
<<<<<<< HEAD
=======
    // Toggle selection - if already selected, unselect
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
    if (selectedStyle && selectedStyle.id === style.id) {
      setSelectedStyle(null);
    } else {
      setSelectedStyle(style);
<<<<<<< HEAD
      setCurrentStep(2);
=======
      setCurrentStep(2); // Move to next step when style is selected
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
    }
  };

  const handleMetalSelect = (metal) => {
<<<<<<< HEAD
=======
    // Toggle selection - if already selected, unselect
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
    if (selectedMetal && selectedMetal.id === metal.id) {
      setSelectedMetal(null);
    } else {
      setSelectedMetal(metal);
<<<<<<< HEAD
      setCurrentStep(3);
=======
      setCurrentStep(3); // Move to next step when metal is selected
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
    }
  };

  const resetFilters = () => {
    setSelectedStyle(null);
    setSelectedMetal(null);
    setCurrentStep(1);
  };

<<<<<<< HEAD
  const handleRingClick = (ring) => {
    navigate(`/ring/${ring.id}`, { 
      state: { 
        ring,
        fromCustomRingPage: true 
      } 
    });
  };

=======
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center shadow-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-yellow-600">Ring</span> Customizer
          </h1>
        </div>
        <div className="flex space-x-5">
          <button className="text-gray-800 hover:text-yellow-600">
            <FiSearch size={22} />
          </button>
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

<<<<<<< HEAD
      {/* Main Content */}
=======
      {/* Main Content - Centered */}
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Engagement Rings</h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore numerous engagement ring settings and create your custom, handcrafted ring built to last a lifetime.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'} font-bold`}>
              1
            </div>
            <span className="mt-2 text-sm font-medium">Setting</span>
          </div>
          <div className="flex-1 h-1 bg-gray-200 mx-2">
            <div className={`h-full bg-yellow-600 transition-all duration-300 ${currentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'} font-bold`}>
              2
            </div>
            <span className="mt-2 text-sm font-medium">Select Diamond</span>
          </div>
          <div className="flex-1 h-1 bg-gray-200 mx-2">
            <div className={`h-full bg-yellow-600 transition-all duration-300 ${currentStep >= 3 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'} font-bold`}>
              3
            </div>
            <span className="mt-2 text-sm font-medium">Complete Ring</span>
          </div>
        </div>

<<<<<<< HEAD
        {/* Style and Metal Selection */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-8">
=======
        {/* Style and Metal Selection in One Line */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-8">
          {/* Style Selection */}
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-center">Style</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => handleStyleSelect(style)}
                  className={`flex flex-col items-center p-3 rounded-full ${selectedStyle?.id === style.id ? 'ring-4 ring-yellow-600 bg-yellow-50' : 'hover:ring-2 hover:ring-gray-300'}`}
                >
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-20 h-20 rounded-full object-cover mb-2"
                  />
                  <span className="text-sm font-medium">{style.name}</span>
                </button>
              ))}
            </div>
          </div>

<<<<<<< HEAD
=======
          {/* Metal Selection */}
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-center">Metal</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {metals.map((metal) => (
                <button
                  key={metal.id}
                  onClick={() => handleMetalSelect(metal)}
                  className={`flex flex-col items-center p-3 rounded-full ${selectedMetal?.id === metal.id ? 'ring-4 ring-yellow-600 bg-yellow-50' : 'hover:ring-2 hover:ring-gray-300'}`}
                >
                  <img
                    src={metal.image}
                    alt={metal.name}
                    className="w-20 h-20 rounded-full object-cover mb-2"
                  />
                  <span className="text-sm font-medium">{metal.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedStyle || selectedMetal) && (
          <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
            <span className="text-sm font-medium">Active filters:</span>
            {selectedStyle && (
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                Style: {selectedStyle.name}
                <button 
                  onClick={() => {
                    setSelectedStyle(null);
                    setCurrentStep(1);
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <FiX size={14} />
                </button>
              </span>
            )}
            {selectedMetal && (
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                Metal: {selectedMetal.name}
                <button 
                  onClick={() => {
                    setSelectedMetal(null);
                    setCurrentStep(selectedStyle ? 2 : 1);
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <FiX size={14} />
                </button>
              </span>
            )}
            <button 
              onClick={resetFilters}
              className="text-sm text-yellow-600 hover:text-yellow-700 font-medium flex items-center"
            >
              Reset All
              <FiChevronRight className="ml-1" />
            </button>
          </div>
        )}

        {/* Results Section */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-xl font-bold mb-4 md:mb-0">All Results ({filteredRings.length})</h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Ring"
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
                <FiSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

<<<<<<< HEAD
          {/* Filtered Rings */}
          {filteredRings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredRings.map((ring) => (
                <div 
                  key={ring.id} 
                  className="cursor-pointer bg-gray-50 rounded-lg p-2 transition hover:bg-gray-100 group relative"
                  onClick={() => handleRingClick(ring)}
                >
                  <div className="h-64 w-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={ring.image} 
                      alt={ring.name}
                      className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-2 p-2">
                    <h3 className="text-lg font-semibold line-clamp-1">{ring.name}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>Style: {ring.style}</span>
                      <span>Metal: {ring.metal}</span>
                    </div>
                    <p className="text-yellow-600 font-bold mt-2">€{ring.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No rings match your selected filters. Try adjusting your selections.</p>
            </div>
          )}
        </div>
      </div>
=======
          {/* Filtered Rings - 4 per row */}
          {/* Filtered Rings - 4 per row */}
{filteredRings.length > 0 ? (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {filteredRings.map((ring) => (
    <div 
      key={ring.id} 
      className="cursor-pointer bg-gray-50 rounded-lg p-2 transition hover:bg-gray-100 group relative"
      onClick={() => navigate(`/ring/${ring.id}`)}
    >
      {/* Image container with hover effect */}
      <div className="h-64 w-full flex items-center justify-center overflow-hidden">
        <img 
          src={ring.image} 
          alt={ring.name}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Product info */}
      <div className="mt-2 p-2">
        <h3 className="text-lg font-semibold line-clamp-1">{ring.name}</h3>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>Style: {ring.style}</span>
          <span>Metal: {ring.metal}</span>
        </div>
        <p className="text-yellow-600 font-bold mt-2">€{ring.price}</p>
      </div>
    </div>
  ))}
</div>
) : (
  <div className="text-center py-12">
    <p className="text-gray-500">No rings match your selected filters. Try adjusting your selections.</p>
  </div>
)}
          
        </div>
      </div>

     
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
    </div>
  );
};

export default CustomRingPage;