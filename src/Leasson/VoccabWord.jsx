
import PropTypes from 'prop-types'

const VoccabWord = ({eachWord}) => {
  
  const {id,word,pronunciation,meaning,part_of_speech,difficulty,when_to_say,example}=eachWord

  const pronounceWord=(word)=> {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'es-ES'; 
    window.speechSynthesis.speak(utterance);
  }

  const dualFunHandle=()=>{
    
    document.getElementById(`modal${id}`).showModal()
  }

  return (
    <div className={`${difficulty=='easy'?"bg-[#86bada]":""} ${difficulty=='medium'?"bg-[#2a91d2]":""} rounded-xl p-10 text-center `}>
       
       <h1 className='font-extrabold text-2xl py-2'>{word}</h1>
       <h2><span className='font-semibold'>Word Meaning: </span>{meaning}</h2>
       <h2><span className='font-semibold py-1'>Defficulty: </span>{difficulty}</h2>
       <h2 className=''><span className='font-semibold'>Parts Of Speech: </span>{part_of_speech}</h2>

       <div className='flex gap-3 items-center'>
        
       <h2><span className='font-semibold py-1'>Pronuncication: </span>{pronunciation}</h2>
       <button className="btn my-4 " onClick={()=>pronounceWord(word)}><i className="fa-solid fa-volume-high"></i></button>
       </div>
       

       <button className="btn w-[80%]" onClick={dualFunHandle}>When to say</button>
       
       

        



        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id={`modal${id}`} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box text-left flex flex-col gap-3">

    <h1 className='bg-[#2a91d2] py-2 font-semibold rounded-xl my-4 text-center  '>Word Information</h1>
    
       <h2><span className='font-semibold text-lg'>Word: </span>{word}</h2>
       <h2><span className='font-semibold text-lg'>Word Meaning: </span>{meaning}</h2>
       <h2><span className='font-semibold text-lg'>Defficulty: </span>{difficulty}</h2>
       <h2><span className='font-semibold text-lg'>Parts Of Speech: </span>{part_of_speech}</h2>
       <h2><span className='font-semibold text-lg'>When we Say: </span>{when_to_say}</h2>
       <h2><span className='font-semibold text-lg'>Example: </span>{example}</h2>

       <div className='flex gap-3 items-center'>
        
       <h2><span className='font-semibold py-1'>Pronuncication: </span>{pronunciation}</h2>
       <button className="btn my-4 " onClick={()=>pronounceWord(word)}><i className="fa-solid fa-volume-high"></i></button>
       </div>
      
   
     

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>




    </div>
  )
}

VoccabWord.propTypes = {
  eachWord: PropTypes.node.isRequired
}

export default VoccabWord