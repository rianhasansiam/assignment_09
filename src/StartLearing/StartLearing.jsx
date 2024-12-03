import  { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';

import TutorialPart from './tutorialPart';
import { contextData } from '../Contex';

const StartLearing = () => {

  const Data = useContext(contextData)

  const {eachDataSelect}=Data

    const navigate=useNavigate()

   

   

  const doubleHandle=(para)=>{

    eachDataSelect(para)
    navigate(`/learn-leasson/${para}`)
  }


  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Let’s Learn Vocabulay</h1>

      {/* Lesson Cards Section */}

      <div className='grid grid-cols-1 grid-row-10 md:grid-cols-2 md:grid-row-5 lg:grid-cols-5 lg:grid-rows-2 gap-5'>

        <div onClick={()=>doubleHandle(1)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 1</div>
        <div onClick={()=>doubleHandle(2)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 2</div>
        <div onClick={()=>doubleHandle(3)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 3</div>
        <div onClick={()=>doubleHandle(4)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 4</div>
        <div onClick={()=>doubleHandle(5)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 5</div>
        <div onClick={()=>doubleHandle(6)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 6</div>
        <div onClick={()=>doubleHandle(7)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 7</div>
        <div onClick={()=>doubleHandle(8)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 8</div>
        <div onClick={()=>doubleHandle(9)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 9</div>
        <div onClick={()=>doubleHandle(10)} className='bg-[#81c7f5]  py-10 cursor-pointer rounded-xl hover:bg-[#7eaecc] font-bold text-xl text-center'>Lesson 10</div>

      </div>
    

      {/* Tutorial Section */}

      <TutorialPart/>
      

      {/* View More Button */}
      <div className="text-center">
        <button onClick={()=>navigate('/tutorial')} className="px-6 py-2 bg-[#81c7f5]  font-semibold rounded-md hover:bg-[#7eaecc]">
          View More
        </button>
      </div>
    </div>
  );
};

export default StartLearing;
