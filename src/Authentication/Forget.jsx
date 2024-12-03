import  { useContext, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from './Firebase';
import { toast } from 'react-toastify';
import { contextData } from '../Contex';


const Forget = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {forgotemail}=useContext(contextData)
  

  const [email, setEmail] = useState(location.state?.email || '');

  const handleResetPassword = async () => {
    if (!email) {
     
      toast.warn("Please enter your email. !", {
        position: "top-center"
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
     
      toast.info("Password reset email sent! Check your inbox.", {
        position: "top-center"
      });
      window.location.href = "https://mail.google.com/";

      // navigate('/login')
      
      
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
     
      toast.error("Failed to send password reset email. Please check the email address.", {
        position: "top-center"
      });
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="flex flex-col items-center justify-center shadow-xl w-[25%] mx-auto py-32 rounded-xl  bg-white">
      <h1 className="text-3xl font-bold mb-6">Reset Your Password</h1>
      <div className="w-full max-w-sm">



      <label className="input input-bordered flex items-center gap-2 my-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input className='w-full'
          type="email"
          value={forgotemail}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          
        />
</label>









        
        <button
          onClick={handleResetPassword}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Reset Password
        </button>
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-4 text-blue-500 underline"
      >
        Back to Home
      </button>
    </div>
    </div>
  );
};

export default Forget;
