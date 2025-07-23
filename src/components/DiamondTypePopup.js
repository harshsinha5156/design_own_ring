

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DiamondTypePopup = ({ onClose, onSelect }) => {
  const [selectedType, setSelectedType] = useState(null);

  const diamondTypes = [
    {
      id: 'natural',
      name: 'Natural Diamond',
      description: 'Mined from the earth, each with unique characteristics',
      image: 'https://media.istockphoto.com/id/802830078/photo/large-clear-diamond-isolated-3d.jpg?s=612x612&w=0&k=20&c=CkjNWR-PBRDRh9wjMsm-C6X7W1QX8qnZBialrZ5DPZ0='
    },
    {
      id: 'lab-grown',
      name: 'Lab-Grown Diamond',
      description: 'Ethically created with identical properties to natural diamonds',
      image: 'https://media.istockphoto.com/id/2220864239/photo/isolated-sparkling-clear-diamond-with-faceted-surface.jpg?s=612x612&w=0&k=20&c=It7SlgjTlWGDZEnGyXBu_LUo6zLEtMYba-LuMoQ95wc='
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col"
        >
          <div className="p-6 overflow-y-auto flex-grow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Choose Your Diamond</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Select the type of diamond you'd like for your ring setting
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {diamondTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition duration-300 ${
                    selectedType === type.id 
                      ? 'border-yellow-600 bg-yellow-50' 
                      : 'border-gray-200 hover:border-yellow-400'
                  }`}
                >
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center">{type.name}</h3>
                  <p className="text-center text-gray-600 text-sm mt-2">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => onSelect(selectedType)}
                disabled={!selectedType}
                className={`px-6 py-2 rounded-full ${
                  !selectedType 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-yellow-600 text-white hover:bg-yellow-700'
                } transition duration-300`}
              >
                Continue
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DiamondTypePopup;