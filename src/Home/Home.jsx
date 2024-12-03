/* eslint-disable react/no-unescaped-entities */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Snowfall.css"
import SliderBanner from './SliderBanner';
import About from './About';
import SuccessSection from './SuccessSection';


const Home = () => {


  return (
    <div>
      {/* Banner/Slider Section */}
      <section className="relative bg-base-200  flex items-center justify-center text-center">


        <h1 className='absolute z-10 font-extrabold text-xl md:text-4xl lg:text-7xl container mx-auto'>Welcome to Our Vocabulary Learning Platform</h1>



        <SliderBanner> </SliderBanner>





        {/* Snowflakes */}
        <div className="snowflakes">
          {Array.from({ length: 1000 }).map((_, i) => (
            <div key={i} className="snowflake"><i className="fa-regular fa-snowflake text-xl "></i></div>
          ))}
        </div>
      </section>





      <SuccessSection />




      {/* Extra Section 2: Testimonials */}
      <section className="testimonials-section py-12 bg-[#81c7f5] container mx-auto px-10 rounded-2xl">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 py-5">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg py-10">
              <p className="text-lg">"This platform has completely changed the way I learn languages. The lessons are engaging, and I've significantly improved my vocabulary."</p>
              <h3 className="mt-4 text-xl font-bold">- Sarah</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg py-10">
              <p className="text-lg">"I love how easy it is to track my progress. The success count motivates me to keep learning!"</p>
              <h3 className="mt-4 text-xl font-bold">- Michael</h3>
            </div>

          </div>
        </div>
      </section>




      {/* Extra Section 1: Language Learning Tips */}
      <section className="tips-section py-12  container mx-auto bg-[#81c7f5] rounded-2xl my-20 px-10">
        <div className="container mx-auto text-center ">
          <h2 className="text-4xl font-bold mb-4 py-5">Language Learning Tips</h2>
          <p className="text-lg mb-4">To enhance your learning experience, immerse yourself in the language daily. Try watching videos, listening to music, or reading books in your target language.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className=" p-6 rounded-lg bg-gray-100 py-10">
              <h3 className="text-2xl font-bold py-3">Tip 1: Daily Practice</h3>
              <p className='font-semibold'>Consistency is key. Spend at least 15-30 minutes a day learning new vocabulary or practicing conversation.</p>
            </div>
            <div className=" p-6 rounded-lg bg-gray-100 py-10">
              <h3 className="text-2xl font-bold py-3">Tip 2: Use Flashcards</h3>
              <p className='font-semibold'>Create flashcards to remember difficult words and review them regularly.</p>
            </div>

          </div>
        </div>
      </section>




      <About />


    </div>
  );
};

export default Home;
