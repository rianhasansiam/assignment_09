

import { useContext } from 'react'
import { contextData } from '../Contex'
import VoccabWord from './VoccabWord'
import { useNavigate } from 'react-router-dom'

const Leason = () => {
  const eachData = useContext(contextData)
const {lessonData,lessonNumber}=eachData

const navigate=useNavigate()





  return (
    <div>

      <div className='flex flex-wrap justify-between px-2 lg:justify-around items-center '>
      <h1 className=' font-extrabold text-xl md:text-3xl lg:text-5xl py-14 '>We are Learning Lesson {lessonNumber}</h1>
      <button onClick={()=>navigate(-1)} className='block btn px-10 font-bold text-lg bg-[#4a90e2] text-white'> Back</button>

      </div>


      <div className='grid max-sm:w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-5 max-sm:mt-5'>
      {
        lessonData.map((eachWord,index)=><VoccabWord key={index} eachWord={eachWord} ></VoccabWord>)
      }

      </div>



     


    </div>
  )
}



export default Leason