import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const LabGrownDiamondSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ringId, diamondType } = location.state || {};
  
  // Sample lab-grown diamond data
  const labGrownDiamonds = [
    {
      id: 1,
      shape: 'Round',
      carat: 0.5,
      color: 'D',
      clarity: 'IF',
      price: 800,
      image: 'https://media.istockphoto.com/id/1424226625/photo/round-cut-diamond-on-grey-background.jpg?s=612x612&w=0&k=20&c=IO90h7CNGSgsqKG_QhEdWJm58GyNBUcVWLPay-4YEPc='
    },
    {
      id: 2,
      shape: 'Round',
      carat: 0.75,
      color: 'F',
      clarity: 'VVS1',
      price: 1200,
      image: 'https://media.istockphoto.com/id/1027241458/photo/diamond.jpg?s=612x612&w=0&k=20&c=ymlTb9hKUJNAVu_pdTP9bjqgTyemU_iOEFcygEJ6RuQ='
    },
    {
      id: 3,
      shape: 'Princess',
      carat: 0.75,
      color: 'G',
      clarity: 'VS1',
      price: 1300,
      image: 'https://media.istockphoto.com/id/485254836/photo/round-diamond.jpg?s=612x612&w=0&k=20&c=QqU55DiqIfRDRc0Z82ltQIa7vynvIhq0X0RZa2M5oVI='
    },
    {
      id: 4,
      shape: 'Princess',
      carat: 1.0,
      color: 'H',
      clarity: 'VS2',
      price: 1600,
      image: 'https://media.istockphoto.com/id/1680365897/photo/cubic-zirconia-diamond-on-white-background.jpg?s=612x612&w=0&k=20&c=M3DYDa2wMbSTW5AkcjCXaVls031bSj_jzOeFmjGVlu0='
    },
    {
      id: 5,
      shape: 'Oval',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 900,
      image: 'https://media.istockphoto.com/id/1338777184/photo/diamond-ring-in-jewelry-gift-box-close-up-background.jpg?s=612x612&w=0&k=20&c=6_zLLz0XTNaONw2pJuRKT8Xd3dKwX55U6hjatEQRqZw='
    },
    {
      id: 6,
      shape: 'Oval',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 1800,
      image: 'https://media.istockphoto.com/id/178479176/photo/transparent-diamonds.jpg?s=612x612&w=0&k=20&c=D0-UtAyVubAeV0P_72I_HazWGh_3_o2Ql62GsAm4XJ8='
    },
    {
      id: 7,
      shape: 'Emerald',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 950,
      image: 'https://media.istockphoto.com/id/178881455/photo/diamond-on-white-background-with-high-quality.jpg?s=612x612&w=0&k=20&c=XSDbViIUe6bEELCtRYUvbGt7w8oWjxykFk45POvY5vc='
    },
    {
      id: 8,
      shape: 'Emerald',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 1900,
      image: 'https://media.istockphoto.com/id/845047820/photo/day.jpg?s=612x612&w=0&k=20&c=Vo1ZzA8bRGeR4W3cLVTG6d0CzggGcQlKEEpeJJ3WjNI='
    },
    {
      id: 9,
      shape: 'Cushion',
      carat: 0.5,
      color: 'E',
      clarity: 'VVS2',
      price: 850,
      image: 'https://media.istockphoto.com/id/1142613343/photo/several-swarovski-chic-crystals-on-a-black-mirror-surface-shimmer-and-sparkle.jpg?s=612x612&w=0&k=20&c=r_SUIjHNh5AlCEDpi11NiBD52D7MewyignWAqPmB0bo='
    },
    {
      id: 10,
      shape: 'Cushion',
      carat: 1.0,
      color: 'G',
      clarity: 'VS1',
      price: 1700,
      image: 'https://media.istockphoto.com/id/1150047148/photo/black-diamond.jpg?s=612x612&w=0&k=20&c=VVhmNtZ7RuL0luUWHhNdWZs3DzNlTQBV0oRO3AvYabw='
    }
  ];

  const [selectedDiamond, setSelectedDiamond] = useState(null);

  const steps = [
    { number: 1, title: 'Setting', active: false },
    { number: 2, title: 'Select Diamond', active: true },
    { number: 3, title: 'Complete Ring', active: false }
  ];

  const handleImageClick = (diamond) => {
    navigate('/ring-review', {
      state: {
        ringId,
        diamondType,
        diamond: diamond
      }
    });
  };

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
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Select Your Lab-Grown Diamond</h1>
      </div>
      
      {/* Diamonds grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {labGrownDiamonds.map((diamond) => (
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
                className="w-full h-48 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            
            <h3 className="text-lg font-semibold">{diamond.shape} {diamond.carat}ct</h3>
            <p className="text-gray-600">{diamond.color} Color, {diamond.clarity} Clarity</p>
            <p className="text-yellow-600 font-bold mt-2">${diamond.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabGrownDiamondSelection;