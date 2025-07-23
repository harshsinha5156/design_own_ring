const ProgressSteps = ({ currentStep, steps }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-12">
        {steps.map(step => (
          <div key={step.id} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              currentStep >= step.id ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {step.id}
            </div>
            <span className="mt-2 text-sm font-medium">{step.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;