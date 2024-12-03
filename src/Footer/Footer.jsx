
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-[#4a90e2] text-white py-20">
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className='font-semibold'>Email: rianhasan1971@gmail.com</p>
            <p className='font-semibold'>Phone: +8801932600504</p>
            <p className='font-semibold'>Address: Ahmed Nagar, Paikpara ,Mirpur 1, Dhaka</p>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center lg:text-right">
            <p>&copy; 2024 YourWebsite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
