/* eslint-disable react/no-unescaped-entities */
import  { useContext } from 'react';
import { contextData } from '../Contex';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {

    const {userData}=useContext(contextData)
    const navigate=useNavigate()

  


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
         <h1 className='text-4xl md:text-5xl italic font-bold  text-center container mx-auto pb-3'>{userData.displayName || 'No Name Provided'}</h1>
        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold pb-10 text-center container mx-auto'>Welcome...! Spanish Language's Vocabulary Learing Platform</h1>
      <div className="bg-white shadow-md rounded-lg p-6 py-14 max-w-md w-[90%]  md:w-full ">
        <div className="text-center mb-6">
          <img
            src={userData.photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-2xl font-semibold">{userData.displayName || 'No Name Provided'}</h1>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-gray-600">Email:</h2>
            <p className="text-lg">{userData.email || 'Not Provided'}</p>
            <span
              className={`text-xs ${
                userData.emailVerified ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {userData.emailVerified ? 'Verified' : 'Not Verified'}
            </span>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-600">Phone Number:</h2>
            <p className="text-lg">{userData.phoneNumber || 'Not Provided'}</p>
          </div>
        </div>

        <button onClick={()=>{navigate('/updateprofile')}} className='px-4 py-2 font-semibold rounded-xl text-white block ml-[50%] mt-3  bg-[#4a90e2]'>Update Profile</button>
      </div>




    </div>
  );
};

export default MyProfile



