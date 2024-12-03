import  { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import auth from './Authentication/Firebase'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
export const contextData=createContext()
import PropTypes from 'prop-types'






const Contex = ({children}) => {

  const [totalData,setTotalData]=useState([])
  const [lessonData,setlessonData]=useState([])
  const [alluser,setAllUser]=useState(1)
  const [userData,setUserData]=useState(null)
  const [displayName,setDisplayName]=useState(null)
  const [photoUrl,setPhotoUrl]=useState(null)
  const [lessonNumber,setLessonNumber]=useState(0)
  const [forgotemail,setForgotEmail]=useState(null)
 

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setTotalData(data));
  }, []);


  const eachDataSelect=(lesson)=>{
    const eachLessonData=totalData.filter((eachWord)=>eachWord.lesson_no===lesson)
    setlessonData(eachLessonData)
    setLessonNumber(lesson)

  }


const pronounceWord=(word)=>{
  const utterance = new SpeechSynthesisUtterance(word);
      speechSynthesis.speak(utterance);
}

const signupdata=(email,password,name,dp)=>{

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAllUser(alluser+1)
 
    toast.success("Register Successful", {
      position: "top-center"
    })
   
    const user = userCredential.user
        // Now update the profile with display name and photo URL
        updateProfile(user, {
          displayName: name, 
          photoURL: dp
        })
          .then(() => {
            console.log('Profile updated successfully')
            setDisplayName(user.displayName)
            setPhotoUrl(user.photoURL)
           
          })
          .catch((error) => {
            console.log('Error updating profile:', error)
          })
    
   
  })
  .catch((error) => {
    if(error=='FirebaseError: Firebase: Error (auth/missing-password).'){
     toast.error("Already Use This Email", {
        position: "top-center"
      })

    }else{

      toast.error("Register Failed", {
        position: "top-center"
      })
    }
  });
}

const stateupdateHandle=(photoUrl,displayName)=>{
  
  setDisplayName(displayName)
  setPhotoUrl(photoUrl)
}


const provider = new GoogleAuthProvider()
const signupgoogleHandle=()=>{
  signInWithPopup(auth, provider)
    .then((result) => {
      
      setUserData(result.user)
      setPhotoUrl(result.user.photoURL)
      toast.success("Register Successful", {
        position: "top-center"
      })
     
    }).catch((error) => {
      console.log(error)
      toast.error("Register Failed", {
        position: "top-center"
      })
    });
}


const logingoogleHandle=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    setUserData(result.user)
    setPhotoUrl(result.user.photoURL)
    toast.success("Login Successful", {
      position: "top-center"
    })
   
  }).catch((error) => {
    console.log(error)
    toast.error("Login Failed", {
      position: "top-center"
    })
  });
}





const login=(email,password)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    toast.success("Login Successful", {
      position: "top-center"
    })
   
  
  })
  .catch(() => {
    toast.error("Login Failed", {
      position: "top-center"
    })
  })
}




useEffect(()=>{
  const unsubcribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user)
      setDisplayName(user.displayName)
      setPhotoUrl(user.photoURL)
      
    } else {
      // 
      console.log("User is signed out")
      setUserData(null)
      // ...
    }
  });
 
  return()=>{
    unsubcribe()
  } 
},[])





const logOutHandle=()=>{
  signOut(auth).then(() => {
    toast.error("Logout Successful", {
      position: "top-center"
    })
   
  }).catch(() => {
    
  });
}



    const info={
      eachDataSelect,
      lessonNumber,
      lessonData,
      pronounceWord,
      signupdata,
      login,
      logOutHandle,
      userData,
      alluser,
      displayName,
      photoUrl,
      signupgoogleHandle,
      logingoogleHandle,
      stateupdateHandle,
      forgotemail,
      setForgotEmail
    }



    


  return (
    <contextData.Provider value={info}>
        {children}
    </contextData.Provider>
  )
}

Contex.propTypes = {
  children: PropTypes.node.isRequired
}

export default Contex