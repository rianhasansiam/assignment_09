import  { useContext, useState } from 'react'

import { contextData } from '../Contex'
import {  useNavigate } from 'react-router-dom'

const SignUp = () => {

    const {signupdata,userData,signupgoogleHandle}=useContext(contextData)

    const navigate=useNavigate()
    if(userData){
      navigate('/')
    }

const [verifypass,setverifypass]=useState(null)
const [alert,setAlert]=useState(null)
    const fromcontroll=(e)=>{
        e.preventDefault()
        const userName=e.target.namee.value
        const UserEmail=e.target.email.value
        const userPassword=e.target.password.value
        const userDp=e.target.dp.value


        const hasUppercase = /[A-Z]/.test(userPassword);
        const hasLowercase = /[a-z]/.test(userPassword);
        const isLengthValid = userPassword.length >= 6;

        if (!isLengthValid) {
          return setAlert('Password must be at least 6 characters long.')
        }
        if (!hasUppercase) {
          return setAlert('Password must contain at least one uppercase letter.')
        }
        if (!hasLowercase) {
          return setAlert('Password must contain at least one lowercase letter.')
        }

        if(hasUppercase && hasLowercase && isLengthValid){
          setverifypass(userPassword)
          setAlert('')
        }
      
         signupdata(UserEmail,verifypass,userName,userDp)
      

    }


   
    const [showpass, setShowpass] = useState(false)
    const showpassHandle=()=>{
      setShowpass(!showpass)
    }
      



  return (
 
   
      <div className="card bg-base-100  w-[100%] md:w-[90%] lg:w-[60%]  xl:w-[38%] my-10 mx-auto shrink-0 shadow-2xl">
        <h1 className='text-center font-bold text-4xl py-5 pt-10'>Welcome! <br /> Lingo Bingo Registration Page</h1>
       
        <form onSubmit={fromcontroll} className="card-body">

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input type="name" name='namee' placeholder="Your Name" className="input input-bordered" required />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Profile Picture</span>
            </label>
            <input type="text" name='dp' placeholder="Pictuer Link" className="input input-bordered" required />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>



          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input type={showpass?"text":"password"} name='password' placeholder="password" className="input input-bordered" required />
            {showpass?<i onClick={showpassHandle} className="fa-regular fa-eye absolute top-[47px] right-[22px] text-xl cursor-pointer"></i>:<i  onClick={showpassHandle} className="fa-regular fa-eye-slash absolute top-[47px] right-[22px] text-xl cursor-pointer"></i>}
            <label className="label">
              <p  className="label-text-alt link link-hover text-red-500 text-base">{alert}</p>
            </label>
          </div>






          <div className="form-control mt-6">
            <button className="btn btn-primary bg-[#4a90e2] border-[#4a90e2] text-black hover:bg-[#749fd1] font-semibold hover:border-[#749fd1]">Register Button</button>
           
          </div>
        </form>
        <div className="divider w-[90%] mx-auto font-semibold">OR</div>
        
        <button onClick={signupgoogleHandle} className="btn w-[90%]  mx-auto btn-primary bg-white border-black my-4 text-lg font-semibold text-black hover:bg-gray-200 hover:border-gray-200"><i className="fa-brands fa-google"></i> Google</button>
        <h1 className='px-10 text-center my-2 font-semibold'>Already Have An Account ? <span onClick={()=>navigate('/login')} className='text-[#4a90e2] underline cursor-pointer'>Login</span></h1>

          <h1 className='font-semibold text-center pb-10 underline'>Sign Up to Our Service</h1>
      </div>
    
  )
}



export default SignUp