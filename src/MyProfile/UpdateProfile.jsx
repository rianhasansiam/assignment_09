import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { contextData } from '../Contex';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';


const UpdateProfile = () => {

const {userData,stateupdateHandle}=useContext(contextData)








const navigate=useNavigate('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const photoUrl=e.target.photoURL.value
    const displayName=e.target.displayName.value
    updateinfoo(photoUrl,displayName)
  };



  


const updateinfoo=(photoUrl,displayName)=>{

    updateProfile(userData, {
        displayName:displayName , 
        photoURL: photoUrl
      })
        .then(() => {
           
        navigate('/myprofile')

        stateupdateHandle(photoUrl,displayName)
      
          toast.success("Profile updated successfully !", {
            position: "top-center"
          })
          
         
        })
        .catch((error) => {
          console.log('Error updating profile:', error)
        })
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded-lg p-6 py-20 max-w-lg w-[90%] lg:w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Update Profile</h2>

        {/* Profile Picture */}
        <div className="flex flex-col  mb-4">
        <label className="block text-sm  text-gray-600 mb-1 font-semibold">Photo URL</label>
          <input
            type="url"
            name="photoURL"
            
           
            placeholder="Enter Profile Picture URL"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="displayName"
            
            
            placeholder="Enter Name"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          />
        </div>

    

        {/* Update Button */}
        <div className="text-center">
          <button 
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
