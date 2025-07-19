import { useState } from 'react';

const StyleSelection = ({ styles, onNext, onBack, selectedStyle }) => {
  const [selected, setSelected] = useState(selectedStyle);

  const handleSelect = (style) => {
    setSelected(style);
  };

  return (
    <div className="min-h-[60vh] rounded-xl p-4 md:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Choose Your Ring Style</h3>
        <p className="mt-2 text-gray-600">Select the perfect style for your custom ring</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Style Options */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((style) => (
              <div
                key={style.id}
                onClick={() => handleSelect(style)}
                className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                  selected?.id === style.id 
                    ? 'ring-4 ring-yellow-500 shadow-lg' 
                    : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-yellow-400 hover:shadow-md'
                }`}
              >
                {/* Image section with dark background */}
                <div className="bg-gray-900 p-6 flex items-center justify-center h-64">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    style={{ 
                      filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.3))'
                    }}
                  />
                  {selected?.id === style.id && (
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
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-center">
                  <h4 className="text-lg font-semibold text-white">{style.name}</h4>
                  <p className="text-yellow-400 mt-2 font-medium">
                    ${style.price.toLocaleString()}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300"
        >
          Back
        </button>
        <button
          onClick={() => onNext(selected)}
          disabled={!selected}
          className={`px-6 py-2 rounded-full ${
            !selected
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-yellow-600 text-white hover:bg-yellow-700'
          } transition duration-300`}
        >
          Review Design
        </button>
      </div>
    </div>
  );
};

export default StyleSelection;