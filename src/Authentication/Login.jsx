import  { useContext, useState } from 'react'
import { contextData } from '../Contex'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const navigate=useNavigate()
    const {login,userData,logingoogleHandle,setForgotEmail}=useContext(contextData)

    const [showpass, setShowpass] = useState(false)
    
const showpassHandle=()=>{
  setShowpass(!showpass)
}

const loginformHandle=(e)=>{
  e.preventDefault()

  const userEmail=e.target.email.value
  const userPassword=e.target.password.value
    login(userEmail,userPassword)
    setForgotEmail(userEmail)

}


if(userData){
  navigate('/startlearning')
}

  return (
    <div className="card bg-base-100 py-10 w-[100%] md:w-[90%] lg:w-[60%]  xl:w-[38%] mx-auto shrink-0 shadow-2xl my-10">
    <h1 className='text-center font-bold text-4xl  pt-10'>Welcome! <br /> Lingo Bingo Service</h1>
   
    <form onSubmit={loginformHandle} className="card-body">

      


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

        <input type={showpass?"text":"password"}  name='password' placeholder="password" className="input input-bordered" required />
        {showpass?<i onClick={showpassHandle} className="fa-regular fa-eye absolute top-[47px] right-[22px] text-xl cursor-pointer"></i>:<i  onClick={showpassHandle} className="fa-regular fa-eye-slash absolute top-[47px] right-[22px] text-xl cursor-pointer"></i>}
        
        
        

        <label className="label">
          <p onClick={()=>navigate('/forgetpassword')} className="label-text-alt link link-hover">Forgot password?</p>
        </label>
      </div>






      <div className="form-control mt-6">
        <button className="btn btn-primary bg-[#4a90e2] border-[#4a90e2] text-black hover:bg-[#749fd1] hover:border-[#749fd1]">Login</button>
      </div>
    </form>
    <div className="divider w-[90%] mx-auto font-semibold">OR</div>
    <button onClick={logingoogleHandle} className="btn w-[90%]  mx-auto btn-primary bg-white border-black my-4 text-lg font-semibold text-black hover:bg-gray-200 hover:border-gray-200"><i className="fa-brands fa-google"></i> Google</button>

    <h1 className='px-10 font-semibold'>Dont’t Have An Account ? <span onClick={()=>navigate('/signup')} className='text-[#4a90e2] underline cursor-pointer'>Register</span></h1>
      
  </div>
  )
}



export default Login