import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    ring,
    diamondType,
    diamond,
    metalType,
    styleType,
    total
  } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="mb-6 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg mb-6">Thanks for customizing your ring!</p>
        
        <div className="text-left mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary:</h2>
          <p><span className="font-medium">Ring:</span> {ring?.name}</p>
          <p><span className="font-medium">Metal:</span> {metalType}</p>
          <p><span className="font-medium">Style:</span> {styleType}</p>
          {diamond && (
            <>
              <p><span className="font-medium">Diamond:</span> {diamondType === 'natural' ? 'Natural' : 'Lab-Grown'}</p>
              <p><span className="font-medium">Carat:</span> {diamond.carat}ct</p>
            </>
          )}
          <p className="mt-2"><span className="font-medium">Total:</span> ${total}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Confirmation;