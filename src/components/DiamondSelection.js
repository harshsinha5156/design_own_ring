import { FiChevronLeft } from 'react-icons/fi';

const DiamondSelection = ({ onBack, onComplete }) => {
  const diamondShapes = ["Round", "Princess", "Cushion", "Emerald", "Asscher", "Oval", "Radiant", "Pear", "Marquise", "Heart"];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center h-96">
          <img 
            src="https://example.com/diamond-placeholder.jpg" 
            alt="Diamond" 
            className="h-full object-contain"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Select Your Diamond</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Diamond Shape:</h2>
          <div className="flex flex-wrap gap-2">
            {diamondShapes.map((shape, index) => (
              <button
                key={shape}
                className={`px-4 py-2 rounded-md ${index === 0 ? 'bg-yellow-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {shape}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button 
            onClick={onBack}
            className="flex items-center text-yellow-600 hover:text-yellow-700"
          >
            <FiChevronLeft className="mr-1" />
            Back to Setting
          </button>
          <button 
            onClick={onComplete}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-medium transition duration-300"
          >
            Complete Ring
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiamondSelection;