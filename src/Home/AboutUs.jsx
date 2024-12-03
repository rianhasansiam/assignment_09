

import logo from '../assets/logo.png'

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to our language learning platform! Our mission is to help you master vocabulary, grammar, and pronunciation
          in an interactive and engaging way. Whether you’re a beginner or looking to polish your skills, we offer a wide range
          of tutorials, lessons, and practice exercises designed to make learning fun and effective.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Our platform is designed to provide a personalized learning experience with features that track your progress and help
          you achieve your language goals. With our extensive library of words, phrases, and real-life examples, you can improve your
          speaking and writing skills in no time.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We believe learning should be accessible to everyone, which is why we are constantly improving our platform to meet the needs of our diverse learners. 
          Start your language journey with us today!
        </p>
        <div className="flex justify-center mt-8">
          <img  
            src={logo}
            alt="Team"
            className="rounded-xl w-1/2 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
