import  { useState, useEffect } from 'react';

const SliderBanner = () => {
  const images = [
    'https://i.ibb.co.com/8xXmjfZ/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg',
    'https://i.ibb.co.com/mc0gnjJ/annika-gordon-c-ZISY8ai2i-A-unsplash.jpg',
    'https://i.ibb.co.com/7z0qWLz/joshua-hoehne-YPg-Tov-Ti-Uv4-unsplash.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000); 
    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="relative w-full lg:h-[75vh] overflow-hidden opacity-70">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full ">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>



      {/* Left and Right Navigation */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}
        className="absolute top-[60%] md:top-1/2  left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-100"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)}
        className="absolute top-[60%] md:top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-100"
      >
        &#10095;
      </button>




      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'} transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderBanner;
