<<<<<<< HEAD



=======
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const NaturalDiamond = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ringId, diamondType } = location.state || {};
  
  // Sample diamond data
  const diamonds = [
    {
      id: 1,
      shape: 'Round',
      carat: 0.5,
      color: 'D',
      clarity: 'IF',
      price: 1200,
      image: 'https://media.istockphoto.com/id/1267189629/photo/realistic-cut-diamond-in-top-view-with-caustic-3d-rendering-illustration-of-round-brilliant.jpg?s=612x612&w=0&k=20&c=wk5N5ymkAAk2ayp6C0r5nF8Y2qkS7hUXPNFEhlgpmf8='
    },
    {
      id: 2,
      shape: 'Round',
      carat: 0.75,
      color: 'F',
      clarity: 'VVS1',
      price: 1800,
      image: 'https://media.istockphoto.com/id/1129674116/photo/round-brilliant-cut-diamond-on-white-background.jpg?s=612x612&w=0&k=20&c=I8MrTzJLm-wGlzTi4YOvG60Bi8L9VJuX5wM9K8-RF4k='
    },
    {
      id: 3,
      shape: 'Princess',
      carat: 0.75,
      color: 'G',
      clarity: 'VS1',
      price: 2000,
      image: 'https://media.istockphoto.com/id/96806582/photo/3d-brilliant-cut-diamond.jpg?s=612x612&w=0&k=20&c=d8Y1Ykykr2fElfuMQMHuKh58cKWzSRPKLXq_PJC6fCI='
    },
    {
      id: 4,
      shape: 'Princess',
      carat: 1.0,
      color: 'H',
      clarity: 'VS2',
      price: 2500,
      image: 'https://media.istockphoto.com/id/959852044/photo/3d-illustration-isolated-asscher-diamond-stone.jpg?s=612x612&w=0&k=20&c=bKKrGM5ILMLJBSN661aMs2x1_EPhXUsc3a4uNMEluF4='
    },
    {
      id: 5,
      shape: 'Oval',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 1500,
      image: 'https://media.istockphoto.com/id/491647790/photo/diamond-marquise.jpg?s=612x612&w=0&k=20&c=kEFpBJh_cIiImK2leYixz8IV1ygPGOU8o5zMp0uPSGk='
    },
    {
      id: 6,
      shape: 'Oval',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 2800,
      image: 'https://media.istockphoto.com/id/491647790/photo/diamond-marquise.jpg?s=612x612&w=0&k=20&c=kEFpBJh_cIiImK2leYixz8IV1ygPGOU8o5zMp0uPSGk='
    },
    {
      id: 7,
      shape: 'Princess',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 1500,
      image: 'https://media.istockphoto.com/id/696384420/photo/3d-illustration-cushion-diamond-stone.jpg?s=612x612&w=0&k=20&c=CPyN53yR-DAv3BDxVRZTY5WhSf9jL-9c05wsQ5EhBVk='
    },
    {
      id: 8,
      shape: 'Round',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 2800,
      image: 'https://media.istockphoto.com/id/1567867881/photo/round-brilliant-cut-diamond-on-white-background.jpg?s=612x612&w=0&k=20&c=p2HlACp3bbPA09DMUWbEAVf130VB9eD5u8cbF2ZmNhI='
    },
    {
      id: 9,
      shape: 'Oval',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 1500,
      image: 'https://media.istockphoto.com/id/689466328/vector/3d-illustration-oval-diamond-stone.jpg?s=612x612&w=0&k=20&c=gi9kY94pSywE5pFTZW6kZ10G8BT78YbGZQOoZZfviNQ='
    },
    {
      id: 10,
      shape: 'Oval',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 2800,
      image: 'https://media.istockphoto.com/id/162708392/photo/round-gemstone-isolated.jpg?s=612x612&w=0&k=20&c=56zERs38-_v2B0bnwSscK5SBpqx9Vt_VsFZpdzDHYmQ='
    },
    {
      id: 11,
      shape: 'Oval',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 1500,
      image: 'https://media.istockphoto.com/id/179288350/photo/diamond.jpg?s=612x612&w=0&k=20&c=FE8ylYFzYinJAk6SP9kPy9n91sFHhZLesoU_NXrI1NY='
    },
    {
      id: 12,
      shape: 'Oval',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 2800,
      image: 'https://media.istockphoto.com/id/1133552291/photo/diamond-on-white-background-illustration.jpg?s=612x612&w=0&k=20&c=YZGNnL8pSVuWHO0Yi8b-hDx3O3RclsRgOoHEPLVMOC0='
    },
    {
      id: 13,
      shape: 'Oval',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 1500,
      image: 'https://media.istockphoto.com/id/491647790/photo/diamond-marquise.jpg?s=612x612&w=0&k=20&c=kEFpBJh_cIiImK2leYixz8IV1ygPGOU8o5zMp0uPSGk='
    },
    {
      id: 14,
      shape: 'Round',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 2800,
      image: 'https://media.istockphoto.com/id/1346461931/photo/3d-rendering-of-diamonds-on-a-white-background.jpg?s=612x612&w=0&k=20&c=0XfGZaygKasmWkxZ54NXD1_pI1kA6WWaS1INa_x256E='
    }
  ];

  // Shape images
  const shapeImages = {
    'Round': 'https://media.istockphoto.com/id/1267189629/photo/realistic-cut-diamond-in-top-view-with-caustic-3d-rendering-illustration-of-round-brilliant.jpg?s=612x612&w=0&k=20&c=wk5N5ymkAAk2ayp6C0r5nF8Y2qkS7hUXPNFEhlgpmf8=',
    'Princess': 'https://media.istockphoto.com/id/96806582/photo/3d-brilliant-cut-diamond.jpg?s=612x612&w=0&k=20&c=d8Y1Ykykr2fElfuMQMHuKh58cKWzSRPKLXq_PJC6fCI=',
    'Oval': 'https://media.istockphoto.com/id/491647790/photo/diamond-marquise.jpg?s=612x612&w=0&k=20&c=kEFpBJh_cIiImK2leYixz8IV1ygPGOU8o5zMp0uPSGk='
  };

  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);

   const steps = [
    { number: 1, title: 'Setting', active: false },
    { number: 2, title: 'Select Diamond', active: true },
    { number: 3, title: 'Complete Ring', active: false }
  ];

  // Get unique shapes from diamonds
  const shapes = [...new Set(diamonds.map(diamond => diamond.shape))];

  const handleDiamondSelect = (diamond) => {
    if (selectedDiamond?.id === diamond.id) {
      setSelectedDiamond(null);
    } else {
      setSelectedDiamond(diamond);
    }
  };

  const handleShapeSelect = (shape) => {
    if (selectedShape === shape) {
      setSelectedShape(null);
    } else {
      setSelectedShape(shape);
    }
    setSelectedDiamond(null);
  };

  const handleImageClick = (diamond) => {
<<<<<<< HEAD
  navigate('/ring-review', {
    state: {
      ring: location.state?.ring, // Pass the ring data from location state
      diamond: diamond,
      diamondType: 'natural' // or 'lab-grown' depending on your flow
    }
  });
};
=======
    navigate('/ring-review', {
      state: {
        ringId,
        diamondType,
        diamond: diamond
      }
    });
  };
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454

  const handleContinue = () => {
    if (!selectedDiamond) return;
    
    navigate('/ring-review', {
<<<<<<< HEAD
    state: {
      ring: location.state?.ring,
      diamond: selectedDiamond,
      diamondType: 'natural'
    }
  });
};
=======
      state: {
        ringId,
        diamondType,
        diamond: selectedDiamond
      }
    });
  };
>>>>>>> 59621f5ec9abefdceb8a381e53eb5da2776b5454

  // Filter diamonds by selected shape
  const filteredDiamonds = selectedShape 
    ? diamonds.filter(diamond => diamond.shape === selectedShape)
    : diamonds;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-yellow-600 mb-4"
      >
        <FiChevronLeft className="mr-1" />
        Back
      </button>

       {/* Step indicators */}
      <div className="flex justify-between items-center mb-8 max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.active ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'} font-bold text-lg`}>
              {step.number}
            </div>
            <span className={`mt-2 text-sm ${step.active ? 'font-medium text-yellow-600' : 'text-gray-500'}`}>
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 ${step.active ? 'bg-yellow-600' : 'bg-gray-200'}`}></div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Select Your Natural Diamond</h1>
        
      </div>
      
      {/* Shape filter buttons with images */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {shapes.map((shape) => (
          <div 
            key={shape}
            onClick={() => handleShapeSelect(shape)}
            className={`flex flex-col items-center p-4 rounded-full cursor-pointer transition-all duration-300 ${
              selectedShape === shape 
                ? 'bg-yellow-50 border-2 border-yellow-600' 
                : 'border-2 border-gray-200 hover:border-yellow-400'
            }`}
            style={{ width: '180px' }}
          >
            <img
              src={shapeImages[shape]}
              alt={shape}
              className="w-32 h-32 object-contain mb-4" // Increased size
            />
            <span className="font-medium text-gray-800">{shape}</span>
          </div>
        ))}
      </div>

      {/* Diamonds grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredDiamonds.map((diamond) => (
          <div
            key={diamond.id}
            className={`border-2 rounded-lg p-4 transition duration-300 ${
              selectedDiamond?.id === diamond.id 
                ? 'border-yellow-600 bg-yellow-50' 
                : 'border-gray-200 hover:border-yellow-400'
            }`}
          >
            <div 
              onClick={() => handleImageClick(diamond)}
              className="cursor-pointer overflow-hidden group"
            >
              <img
                src={diamond.image}
                alt={diamond.shape}
                className="w-full h-48 object-contain mb-4 transition-transform duration-300 group-hover:scale-110" // Added hover scale effect
              />
            </div>
            
            <h3 className="text-lg font-semibold">{diamond.shape} {diamond.carat}ct</h3>
            <p className="text-gray-600">{diamond.color} Color, {diamond.clarity} Clarity</p>
            <p className="text-yellow-600 font-bold mt-2">${diamond.price.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Continue button */}
      <div className="flex justify-center">
        <button
          onClick={handleContinue}
          disabled={!selectedDiamond}
          className={`px-8 py-3 rounded-full text-lg ${
            !selectedDiamond 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-yellow-600 text-white hover:bg-yellow-700'
          } transition duration-300`}
        >
          {selectedDiamond ? `Continue with ${selectedDiamond.shape} Diamond` : 'Select a Diamond'}
        </button>
      </div>
    </div>
  );
};

export default NaturalDiamond;