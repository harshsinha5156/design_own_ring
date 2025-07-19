import { useState } from 'react';

const MetalSelection = ({ onNext }) => {
  const [selectedMetal, setSelectedMetal] = useState(null);

  const metals = [
    {
      id: 1,
      name: "Gold",
      price: 500,
      image: "https://media.istockphoto.com/id/154956296/photo/gold-ring.jpg?s=612x612&w=0&k=20&c=i5wvnq88q5w9au82TdPFNUlHWnahvuCOhmlFs2mpZD4=",
      color: "bg-amber-300"
    },
    {
      id: 2,
      name: "Platinum",
      price: 800,
      image: "https://media.istockphoto.com/id/469937726/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=LMpsG6r8gEyfmFYDXX5iDDEtJ7Uikq1TX1ZlPpM0dZ8=",
      color: "bg-gray-300"
    },
    {
      id: 3,
      name: "Rose Gold",
      price: 600,
      image: "https://media.istockphoto.com/id/1187691367/photo/dazzling-sparkling-diamond-realistic-3d-render.jpg?s=612x612&w=0&k=20&c=R-0MpdD9JGIgD9L9wtHfdTuWQXaf-aBxtvZN5Dx_VeM=",
      color: "bg-rose-300"
    }
  ];

  const handleSelect = (metal) => {
    setSelectedMetal(metal);
  };

  return (
    <div className="min-h-[60vh] rounded-xl p-4 md:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Choose Your Base Metal</h3>
        <p className="mt-2 text-gray-600">Select the perfect metal for your custom ring</p>
      </div>

      {/* Metal Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto" style={{ maxWidth: '90vw' }}>
        {metals.map((metal) => (
          <div
            key={metal.id}
            onClick={() => handleSelect(metal)}
            className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${
              selectedMetal?.id === metal.id 
                ? 'ring-4 ring-yellow-500 shadow-lg' 
                : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-yellow-400 hover:shadow-md'
            }`}
            style={{ height: '400px' }} // Fixed height for all cards
          >
            {/* Image section with dark background */}
            <div className="bg-gray-900 flex-grow flex items-center justify-center p-4">
              <img
                src={metal.image}
                alt={metal.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.3))',
                  maxHeight: '280px' // Limits image size within container
                }}
              />
              {selectedMetal?.id === metal.id && (
                <div className="absolute top-3 right-3 bg-yellow-500 rounded-full p-1.5">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Text section with attractive background */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-center h-24 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white">{metal.name}</h4>
                 

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => onNext(selectedMetal)}
          disabled={!selectedMetal}
          className={`px-8 py-3 rounded-full text-lg ${
            !selectedMetal
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-yellow-600 text-white hover:bg-yellow-700'
          } transition duration-300`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MetalSelection;