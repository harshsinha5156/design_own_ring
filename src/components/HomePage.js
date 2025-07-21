import { useState, useEffect , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiChevronLeft, FiShoppingBag, FiHeart, FiSearch,FiStar } from 'react-icons/fi';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selectedMetal, setSelectedMetal] = useState(null);
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const navigate = useNavigate();
  const featuredRef = useRef(null);
  const customRingRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Exquisite Diamond Collection",
      subtitle: "Handcrafted with precision and passion",
      image: "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpYW1vbmQlMjByaW5nfGVufDB8fDB8fHww",
      cta: "Shop Now",
      action: () => scrollToSection(featuredRef)
    },
    {
      id: 2,
      title: "Customize Your Perfect Ring",
      subtitle: "Design a ring that tells your story",
      image: "https://media.istockphoto.com/id/2169397992/photo/diamond-jewellery-ring-reflection-photography.jpg?s=612x612&w=0&k=20&c=ZwV-cUyW7gC-6QAaqFXxrZ1ZW3cmNozTiVkR5OTFuqs=",
      cta: "Start Designing",
      action: () => navigate('/cutom-ring')
    },
    {
      id: 3,
      title: "Luxury Necklaces",
      subtitle: "Elegance redefined",
      image: "https://media.istockphoto.com/id/182786637/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=unlyBs6cdV7_jrwBjkOyBKkqVbRh5cR2PwCPUk3xwFc=",
      cta: "Explore Collection",
      action: () => scrollToSection(featuredRef)
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


  const recentCustomRings = [
    {
      id: 1,
      metal: 'Rose Gold',
      diamond: 'Princess',
      style: 'Modern',
      image: 'https://media.istockphoto.com/id/1405515356/photo/accessories-a-white-gold-ring-set-with-diamonds.jpg?s=612x612&w=0&k=20&c=x7UCX3t2TU7bt8K2qg9rGi-OB7nTmakQrnf7lmWE4RQ=',
      price: 2400
    },
    {
      id: 2,
      metal: 'Platinum',
      diamond: 'Round',
      style: 'Classic',
      image: 'https://media.istockphoto.com/id/511646917/photo/golden-diamond-ring-and-contemporary-diamond.jpg?s=612x612&w=0&k=20&c=69CbeMNEwZso5PBbwpPBzPZpO243ZHAAT5QoOHKpGrU=',
      price: 2600
    },
    {
      id: 3,
      metal: 'Gold',
      diamond: 'Oval',
      style: 'Vintage',
      image: 'https://media.istockphoto.com/id/1156500146/photo/gold-ring-diamond-gem-closeup.jpg?s=612x612&w=0&k=20&c=T1H4KJVisQIeBGrWzEfDuwD5m7vB60sg3nN-UTA2mH0=',
      price: 2200
    }
  ];

 const reviews = [
    {
      id: 1,
      name: 'Rahul Kumar',
      rating: 5,
      comment: 'Absolutely love my custom ring! The quality is exceptional and the design process was so easy.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Akash Dubey',
      rating: 4,
      comment: 'Great experience designing our engagement ring. The final product was even better than expected!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Shivani Sharma',
      rating: 5,
      comment: 'The perfect ring at the perfect price. Customer service was excellent throughout the process.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      name: 'Priya Patel',
      rating: 5,
      comment: 'My wedding ring is exactly how I imagined it. The customization options were amazing!',
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      rating: 4,
      comment: 'Excellent craftsmanship. The ring looks more beautiful in person than in pictures.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 6,
      name: 'Neha Gupta',
      rating: 5,
      comment: 'The attention to detail is incredible. Received so many compliments on my custom designed ring!',
      image: 'https://randomuser.me/api/portraits/women/72.jpg'
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

  // Animation Variants

  const fadeIn = {
    hidden: {opacity: 0},
    visible : {opacity: 1 , trasition: {duration: 0.8}}
  };

  const slideUp = {
    hidden : {y: 50, opacity:0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden : {opacity: 0},
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    hover : {
      y:10, 
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
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

  const scrollToSection = (ref)=> {
    if(ref && ref.current){
    window.scrollTo({
      top: ref.current.offsetTip-100,
      behavior: 'smooth'
    });
  }
};

  

 

  const totalPrice = (selectedMetal?.price || 0) + (selectedDiamond?.price || 0) + (selectedStyle?.price || 0);

 

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50"
>
  {/* Logo and Brand Name - Left Side */}
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-3 cursor-pointer"
    onClick={() => navigate('/')}
  >
    {/* Logo - Diamond Ring Icon */}
    <motion.div 
      whileHover={{ rotate: 15 }}
      className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center shadow-md"
    >
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
    </motion.div>
    
    {/* Brand Name */}
    <motion.h1 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="text-2xl font-bold text-gray-800"
    >
      <span className="text-yellow-600">Ring</span> Customizer
    </motion.h1>
  </motion.div>

  {/* Navigation Button - Center */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="hidden md:flex space-x-8"
  >
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/custom-ring')}
      className="text-xl font-bold bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
    >
      Custom Ring
    </motion.button>
  </motion.div>

  {/* Icons - Right Side */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="flex space-x-5"
  >
    <motion.button 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-800 hover:text-yellow-600"
    >
      <FiSearch size={22} />
    </motion.button>
    
    <motion.button 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-800 hover:text-yellow-600 relative"
      onClick={() => navigate('/wishlist')}
    >
      <FiHeart size={22} />
      <motion.span 
        className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
      >
        0
      </motion.span>
    </motion.button>
    
    <motion.button 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-800 hover:text-yellow-600 relative"
      onClick={() => navigate('/cart')}
    >
      <FiShoppingBag size={22} />
      <motion.span 
        className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
      >
        0
      </motion.span>
    </motion.button>
  </motion.div>
</motion.nav>

      {/* Hero Slider */}
      <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
        <AnimatePresence>
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center text-white px-4"
                  >
                    <motion.h1 
                      variants={slideUp}
                      className="text-3xl md:text-5xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p 
                      variants={slideUp}
                      className="text-xl md:text-2xl mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.button
                      variants={slideUp}
                      onClick={slide.action}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                      {slide.cta}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        {/* Slider controls with hover effects */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition duration-300"
        >
          <FiChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition duration-300"
        >
          <FiChevronRight size={24} />
        </motion.button>
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
        
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        ref={featuredRef} 
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={slideUp} className="text-3xl font-bold text-center mb-12">
          Our Featured Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={slideUp}
              whileHover="hover"
              variants={cardHover}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300"
            >
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
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-800 hover:text-yellow-600"
                  >
                    <FiHeart size={20} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      
 

      

      {/* Create Your Perfect Ring Section */}
      <motion.section
        ref={customRingRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative h-[60vh]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img
              src="https://media.istockphoto.com/id/511646917/photo/golden-diamond-ring-and-contemporary-diamond.jpg?s=612x612&w=0&k=20&c=69CbeMNEwZso5PBbwpPBzPZpO243ZHAAT5QoOHKpGrU="
              alt="Diamond ring background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </motion.div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-7xl text-center bg-white bg-opacity-30 p-8 md:p-12 rounded-xl shadow-xl mx-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Create Your Perfect Ring
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Design a custom ring that reflects your unique style with our easy-to-use ring builder.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/custom-ring')}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
              >
                Start Designing
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
   

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

           {/* Recent Custom Rings */}
      {/* Recent Custom Rings with animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Recent Custom Rings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentCustomRings.map((ring, index) => (
              <motion.div
                key={ring.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300"
              >
                <img
                  src={ring.image}
                  alt={`Custom ${ring.metal} ring`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{ring.metal} & {ring.diamond}</h3>
                  <p className="text-gray-600 mb-2">{ring.style} Style</p>
                  <p className="text-yellow-600 font-bold">${ring.price.toLocaleString()}</p>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/custom-ring')}
                    className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-full transition duration-300"
                  >
                    Create Similar
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* Customer Reviews with animations */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.img 
                    whileHover={{ rotate: 5 }}
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-gray-600 italic"
                >
                  "{review.comment}"
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


    </div>
  );
};

export default HomePage;



