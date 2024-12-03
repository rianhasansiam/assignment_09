import  { useContext } from 'react'

import CountUp from 'react-countup'
import { contextData } from '../Contex'

const SuccessSection = () => {

const {alluser}=useContext(contextData)
  
  return (

    <section className="success-section  py-12 my-32">
    <div className="container mx-auto text-center">



      <h2 data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1500" className="lg:text-7xl text-4xl md:text-5xl font-bold mb-8 py-5 ">Our Success</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className=' py-10 shadow-xl rounded-2xl'>
          <h3 className="lg:text-6xl text-4xl md:text-5xl font-bold">
            <CountUp end={alluser} duration={3} />
          </h3>
          <p className="mt-2 font-bold text-2xl">Users</p>
        </div>

        <div className=' py-10 shadow-xl rounded-2xl'>
          <h3 className="lg:text-6xl text-4xl md:text-5xl font-bold">
            <CountUp end={10} duration={3} />
          </h3>
          <p className="mt-2 font-bold text-2xl">Lessons</p>
        </div>


        <div className=' py-10 shadow-xl rounded-2xl'>
          <h3 className="lg:text-6xl text-4xl md:text-5xl font-bold">
            <CountUp end={220} duration={3} />
          </h3>
          <p className="mt-2 font-bold text-2xl">Vocabulary Words</p>
        </div>


        <div className=' py-10 shadow-2xl rounded-2xl'>
          <h3 className="lg:text-6xl text-4xl md:text-5xl font-bold">
            <CountUp end={10} duration={3} />
          </h3>
          <p className="mt-2 font-bold text-2xl">Tutorials</p>
        </div>


      </div>
    </div>
  </section>
  )
}



export default SuccessSection