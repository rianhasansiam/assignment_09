import { useNavigate } from "react-router-dom";


const Tutorial = () => {
  // Array of video URLs
  const videos = [
    'https://www.youtube.com/embed/CzOmAG729Lw?si=0rVgQT6KJ5M8vXqi',
    'https://www.youtube.com/embed/-wPKpWoBxo4?si=zaEbp-hdu7fMX97H',
    'https://www.youtube.com/embed/Nx_fR0J0BLc?si=GB1Vert5tfqjN5Qc',
    'https://www.youtube.com/embed/PmaNudt11BU?si=Uwdvov3Xp4hGcFS5',
    'https://www.youtube.com/embed/_ugU3pU89pY?si=iY4D3SolZaCVUhx5',
    'https://www.youtube.com/embed/EQNlZAaaIcU?si=f9yOKGzjc-kkDpTE',
    'https://www.youtube.com/embed/rTt1riBLbyw?si=ssfVcYgIvrFads-U',
    'https://www.youtube.com/embed/2OOE6rVxIrA?si=mRAUwchyEsxSMI1O',
    'https://www.youtube.com/embed/iSUs7YiwNRU?si=fnJGjqHBN_QGN0iA',
    'https://www.youtube.com/embed/MXYIKBB55-k?si=46dKE9VGIyH_pj2w',

  ];


const navigate=useNavigate()

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 mt-14">Learning Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 h-[3600px] md:h-[1800px] lg:h-[1500px] ">
          {videos.map((videoUrl, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
  



     <button onClick={()=>{navigate('/startlearning')}} className="btn mx-auto mt-10 block bg-[#4a90e2]  text-white font-semibold">Learn Vocabularies</button>
    
 
      </div>


    </section>
  );
};

export default Tutorial;
