import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft, FiShoppingBag, FiHeart, FiSearch } from 'react-icons/fi';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selectedMetal, setSelectedMetal] = useState(null);
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Exquisite Diamond Collection",
      subtitle: "Handcrafted with precision and passion",
      image: "https://media.istockphoto.com/id/1127154607/photo/diamond-engagement-ring-wedding-ring-on-blue-glossy-background.jpg?s=612x612&w=0&k=20&c=PtxKl4O6LEuBeASsjo5ReWSiZL86t_a-kILPsqPWgRc=",
      cta: "Shop Now"
    },
    {
      id: 2,
      title: "Customize Your Perfect Ring",
      subtitle: "Design a ring that tells your story",
      image: "https://media.istockphoto.com/id/1187919612/photo/commitment.jpg?s=612x612&w=0&k=20&c=lLIg_XW8qw6l66pZUhmeie72e3fmaNxiQXI5ae_3l_M=",
      cta: "Start Designing"
    },
    {
      id: 3,
      title: "Luxury Necklaces",
      subtitle: "Elegance redefined",
      image: "https://media.istockphoto.com/id/1252408750/photo/platinum-diamond-ring-on-red-rose.jpg?s=612x612&w=0&k=20&c=2Mv7mVtKILF93DjT0pgu1b5uhFfUtPvPn3bf_7gD2Cc=",
      cta: "Explore Collection"
    }
  ];

  const metals = [
    { id: 1, name: "Gold", price: 500, image: "https://media.istockphoto.com/id/154956296/photo/gold-ring.jpg?s=612x612&w=0&k=20&c=i5wvnq88q5w9au82TdPFNUlHWnahvuCOhmlFs2mpZD4=" },
    { id: 2, name: "Platinum", price: 800, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Rose Gold", price: 600, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" }
  ];

  const diamonds = [
    { id: 1, name: "Round", price: 1200, image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "Princess", price: 1500, image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Oval", price: 1300, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" }
  ];

  const styles = [
    { id: 1, name: "Classic", price: 300, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "Vintage", price: 400, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Modern", price: 500, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Eternity Diamond Ring",
      price: 2499,
      image: "https://media.istockphoto.com/id/1283481259/photo/diamond-engagement-ring-and-wedding-rings.jpg?s=612x612&w=0&k=20&c=cmrE1ywq3hDX2sPERD4tJz7hLKMBgdCE2bDmx1zTvEQ=",
      category: "Rings"
    },
    {
      id: 2,
      name: "Diamond Solitaire Necklace",
      price: 1899,
      image: "https://media.istockphoto.com/id/1124639802/photo/fashion-bracelet-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=F5ceKY6yxzRCsRhX7RZBL0eFLIbRnAyvRpMiLwPc_2E=",
      category: "Necklaces"
    },
    {
      id: 3,
      name: "Pearl & Diamond Earrings",
      price: 1299,
      image: "https://media.istockphoto.com/id/1347727267/photo/set-of-earrings-with-colored-gemstones.jpg?s=612x612&w=0&k=20&c=M3VAx5LWM9PwhrZO12EaGH8hswH44oZd915nRtFEnb8=",
      category: "Earrings"
    },
    {
      id: 4,
      name: "Platinum Wedding Band",
      price: 1799,
      image: "https://media.istockphoto.com/id/511646917/photo/golden-diamond-ring-and-contemporary-diamond.jpg?s=612x612&w=0&k=20&c=69CbeMNEwZso5PBbwpPBzPZpO243ZHAAT5QoOHKpGrU=",
      category: "Rings"
    },

    {
      id: 5,
      name: "Eternity Diamond Ring",
      price: 2499,
      image: "https://media.istockphoto.com/id/1405515356/photo/accessories-a-white-gold-ring-set-with-diamonds.jpg?s=612x612&w=0&k=20&c=x7UCX3t2TU7bt8K2qg9rGi-OB7nTmakQrnf7lmWE4RQ=",
      category: "Rings"
    },
    {
      id: 6,
      name: "Diamond Solitaire Necklace",
      price: 1899,
      image: "https://media.istockphoto.com/id/1451642405/photo/wedding-ring-3d-rendering.jpg?s=612x612&w=0&k=20&c=SWIbVilT3D_VzRrihLzbSFJic2B4Z0EXcesOuy7Lx3A=",
      category: "Necklaces"
    },
    {
      id: 7,
      name: "Pearl & Diamond Earrings",
      price: 1299,
      image: "https://media.istockphoto.com/id/1156500146/photo/gold-ring-diamond-gem-closeup.jpg?s=612x612&w=0&k=20&c=T1H4KJVisQIeBGrWzEfDuwD5m7vB60sg3nN-UTA2mH0=",
      category: "Earrings"
    },
    {
      id: 8,
      name: "Platinum Wedding Band",
      price: 1799,
      image: "https://media.istockphoto.com/id/1744116325/photo/diamond-jewelry-rings-luxury-accessories-beauty-fashion.jpg?s=612x612&w=0&k=20&c=3mJsEujwJSCqSMm2RRSZ8QKEoQeEb0GyWEMyqQxADLM=",
      category: "Rings"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleMetalSelect = (metal) => {
    setSelectedMetal(metal);
  };

  const handleDiamondSelect = (diamond) => {
    setSelectedDiamond(diamond);
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitOrder = () => {
    setOrderSubmitted(true);
    setTimeout(() => {
      setShowCustomizer(false);
      setOrderSubmitted(false);
      setCurrentStep(1);
      setSelectedMetal(null);
      setSelectedDiamond(null);
      setSelectedStyle(null);
    }, 3000);
  };

  

 

  const totalPrice = (selectedMetal?.price || 0) + (selectedDiamond?.price || 0) + (selectedStyle?.price || 0);

  const getMetalColor = (metalName) => {
    switch(metalName) {
      case 'Gold': return '#FFD700';
      case 'Platinum': return '#E5E4E2';
      case 'Rose Gold': return '#E0BFB8';
      default: return '#E5E4E2';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Luxury Jewels</div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => navigate('/custom-ring')}
            className="text-xl font-bold bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Custom Ring
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-800 hover:text-yellow-600">
            <FiSearch size={20} />
          </button>
          <button 
            className="text-gray-800 hover:text-yellow-600 relative"
            onClick={() => navigate('/wishlist')}
          >
            <FiHeart size={20} />
            
              <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                
              </span>
          </button>
          <button 
            className="text-gray-800 hover:text-yellow-600 relative"
            onClick={() => navigate('/cart')}
          >
            <FiShoppingBag size={20} />
            
              <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                
              </span>
           
          </button>
        </div>
      </nav>

      {/* Hero Slider */}
      <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <button
                  onClick={() => slide.id === 2 ? setShowCustomizer(true) : null}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition duration-300"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition duration-300"
        >
          <FiChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-yellow-600 font-bold">${product.price.toLocaleString()}</p>
                <div className="mt-4 flex justify-between">
                  <button 
                    className="text-gray-800 hover:text-yellow-600"
                    
                  >
                    <FiHeart size={20} />
                  </button>
                  <button 
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300"
                   
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Create Your Perfect Ring Section */}
      <section className="relative">
  {/* Background image section (60% height) */}
  <div className="relative h-[60vh]">
    <div className="absolute inset-0 z-0">
      <img
        src="https://media.istockphoto.com/id/511646917/photo/golden-diamond-ring-and-contemporary-diamond.jpg?s=612x612&w=0&k=20&c=69CbeMNEwZso5PBbwpPBzPZpO243ZHAAT5QoOHKpGrU="
        alt="Diamond ring background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    {/* Content container centered in the 60% space */}
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="w-full max-w-7xl text-center bg-white bg-opacity-30 p-8 md:p-12 rounded-xl shadow-xl mx-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Create Your Perfect Ring
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Design a custom ring that reflects your unique style with our easy-to-use ring builder.
        </p>
        <button
          onClick={() => navigate('/custom-ring')}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
        >
          Start Designing
        </button>
      </div>
    </div>
  </div>
  </section>

      {/* Ring Customizer Modal */}
      {showCustomizer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Design Your Ring</h2>
                <button
                  onClick={() => {
                    setShowCustomizer(false);
                    setCurrentStep(1);
                    setSelectedMetal(null);
                    setSelectedDiamond(null);
                    setSelectedStyle(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
                <div
                  className="absolute top-1/2 left-0 h-1 bg-yellow-600 -z-10 transition-all duration-300"
                  style={{
                    width: `${(currentStep - 1) * 33.33}%`
                  }}
                ></div>
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'} font-bold`}
                    >
                      {step}
                    </div>
                    <span className="mt-2 text-sm text-gray-600">
                      {step === 1 && 'Metal'}
                      {step === 2 && 'Diamond'}
                      {step === 3 && 'Style'}
                      {step === 4 && 'Review'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <div className="min-h-96">
                {orderSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-12 h-12 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thanks for customizing your ring!</h3>
                    <p className="text-gray-600">Your order has been submitted successfully.</p>
                  </div>
                ) : (
                  <>
                    {/* Step 1: Choose Metal */}
                    {currentStep === 1 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-6">Choose Your Base Metal</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {metals.map((metal) => (
                            <div
                              key={metal.id}
                              onClick={() => handleMetalSelect(metal)}
                              className={`border-2 rounded-lg p-4 cursor-pointer transition duration-300 ${selectedMetal?.id === metal.id ? 'border-yellow-600 bg-yellow-50' : 'border-gray-200 hover:border-yellow-400'}`}
                            >
                              <img
                                src={metal.image}
                                alt={metal.name}
                                className="w-full h-32 object-contain mb-4"
                              />
                              <h4 className="text-lg font-semibold text-center">{metal.name}</h4>
                              <p className="text-center text-gray-600 mt-2">${metal.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Choose Diamond */}
                    {currentStep === 2 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-6">Choose Your Diamond</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {diamonds.map((diamond) => (
                            <div
                              key={diamond.id}
                              onClick={() => handleDiamondSelect(diamond)}
                              className={`border-2 rounded-lg p-4 cursor-pointer transition duration-300 ${selectedDiamond?.id === diamond.id ? 'border-yellow-600 bg-yellow-50' : 'border-gray-200 hover:border-yellow-400'}`}
                            >
                              <img
                                src={diamond.image}
                                alt={diamond.name}
                                className="w-full h-32 object-contain mb-4"
                              />
                              <h4 className="text-lg font-semibold text-center">{diamond.name}</h4>
                              <p className="text-center text-gray-600 mt-2">${diamond.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Choose Style */}
                    {currentStep === 3 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-6">Choose Your Ring Style</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {styles.map((style) => (
                            <div
                              key={style.id}
                              onClick={() => handleStyleSelect(style)}
                              className={`border-2 rounded-lg p-4 cursor-pointer transition duration-300 ${selectedStyle?.id === style.id ? 'border-yellow-600 bg-yellow-50' : 'border-gray-200 hover:border-yellow-400'}`}
                            >
                              <img
                                src={style.image}
                                alt={style.name}
                                className="w-full h-32 object-contain mb-4"
                              />
                              <h4 className="text-lg font-semibold text-center">{style.name}</h4>
                              <p className="text-center text-gray-600 mt-2">${style.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review */}
                    {currentStep === 4 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-6">Review Your Ring</h3>
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-1/2">
                            <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center h-64">
                              <div className="relative">
                                <img
                                  src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                                  alt="Ring Preview"
                                  className="w-48 h-48 object-contain"
                                />
                                {selectedDiamond && (
                                  <img
                                    src={selectedDiamond.image}
                                    alt="Diamond"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 object-contain"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="md:w-1/2">
                            <div className="bg-gray-50 rounded-lg p-6">
                              <h4 className="text-lg font-semibold mb-4">Your Selections</h4>
                              <div className="space-y-4">
                                <div>
                                  <p className="text-gray-600">Base Metal:</p>
                                  <p className="font-medium">
                                    {selectedMetal?.name} (${selectedMetal?.price})
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Diamond:</p>
                                  <p className="font-medium">
                                    {selectedDiamond?.name} (${selectedDiamond?.price})
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Ring Style:</p>
                                  <p className="font-medium">
                                    {selectedStyle?.name} (${selectedStyle?.price})
                                  </p>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                  <p className="text-gray-600">Total Price:</p>
                                  <p className="text-2xl font-bold text-yellow-600">
                                    ${totalPrice.toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Navigation Buttons */}
              {!orderSubmitted && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-2 rounded-full ${currentStep === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    Back
                  </button>
                  {currentStep < 4 ? (
                    <button
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 && !selectedMetal) ||
                        (currentStep === 2 && !selectedDiamond) ||
                        (currentStep === 3 && !selectedStyle)
                      }
                      className={`px-6 py-2 rounded-full ${((currentStep === 1 && !selectedMetal) || (currentStep === 2 && !selectedDiamond) || (currentStep === 3 && !selectedStyle)) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-yellow-600 text-white hover:bg-yellow-700'}`}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitOrder}
                      className="px-6 py-2 rounded-full bg-yellow-600 text-white hover:bg-yellow-700"
                    >
                      Submit Order
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Custom Ring Button - Fixed at bottom */}
      <div className="md:hidden fixed bottom-6 right-6 z-10">
        <button
          onClick={() => navigate('/custom-ring')}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold p-4 rounded-full shadow-lg transition duration-300"
        >
          <FiShoppingBag size={24} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;



