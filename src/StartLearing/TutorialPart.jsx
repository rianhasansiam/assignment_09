

const TutorialPart = () => {
  return (
    <div className="my-20 mx-auto w-[90%] md:w-80% lg:w-[50%]">
        <h2 className="text-2xl font-bold mb-6">Alphabet Tutorial</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/dlazjKbt40Q?si=BLBAjYi1gtdxEZBh"
            title="Alphabet Learning Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>


        </div>
      </div>
  )
}



export default TutorialPart