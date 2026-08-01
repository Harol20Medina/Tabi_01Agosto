import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pages = [
  {
    image: "/img/img1.jpeg",
    phrase: "Hoy es un buen dia para recordarte que eres la mejor amiga que alguien puede tener. Asi de simple.",
  },
  {
    image: "/img/img2.jpeg",
    phrase: "Contigo puedo ser yo mismo, decir estupideces y saber que no me vas a juzgar. Eso vale mucho.",
  },
  {
    image: "/img/img3.jpeg",
    phrase: "Siempre estas ahi cuando necesito hablar o simplemente cuando necesito que alguien me aguante. Gracias por eso.",
  },
  {
    image: "/img/img4.jpeg",
    phrase: "Podemos pasar dias sin hablar y cuando nos vemos es como si nada. Eso es amistad de verdad.",
  },
  {
    image: "/img/img5.jpeg",
    phrase: "Eres de esas personas que se cuentan con una mano. Y yo tengo suerte de tenerte en la mia.",
  },
  {
    image: "/img/img6.jpeg",
    phrase: "Ella es la mujer mas brillante de su edad que he conocido. - Ron Weasley hablando de Hermione, y yo hablando de ti.",
  },
  {
    image: "/img/img7.jpeg",
    phrase: "Feliz dia, loca. No tendras novio hoy, pero me tienes a mi y eso vale por mil. Te quiero infinito.",
  },
]

function Book() {
  const [currentPage, setCurrentPage] = useState(0)
  const [dir, setDir] = useState(1)

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDir(1)
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setDir(-1)
      setCurrentPage(currentPage - 1)
    }
  }

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 w-full"
    >
      <div className="w-full max-w-4xl">

        {/* Book container */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Image */}
            <div className="w-full md:w-1/2 p-3 md:p-4 bg-gray-50">
              <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[480px] rounded-xl overflow-hidden">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.img
                    key={currentPage}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    src={pages[currentPage].image}
                    alt={"Foto " + (currentPage + 1)}
                    className="w-full h-full object-cover absolute inset-0 rounded-xl"
                  />
                </AnimatePresence>
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-serif text-gray-600 shadow-sm z-10">
                  {currentPage + 1} / {pages.length}
                </div>
              </div>
            </div>

            {/* Phrase */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center justify-center min-h-[200px] md:min-h-[480px]">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-pink-400 mb-5 heartbeat shrink-0">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>

              <AnimatePresence mode="wait" custom={dir}>
                <motion.p
                  key={currentPage}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="font-cursive text-lg md:text-2xl text-gray-700 text-center leading-relaxed px-2"
                >
                  {pages[currentPage].phrase}
                </motion.p>
              </AnimatePresence>

              {/* Dots */}
              <div className="mt-6 md:mt-8 flex gap-1.5">
                {pages.map((_, idx) => (
                  <div
                    key={idx}
                    className={"h-2 rounded-full transition-all duration-300 " + (idx === currentPage ? "bg-pink-500 w-5" : "bg-gray-200 w-2")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={"flex items-center gap-1.5 px-5 md:px-6 py-3 rounded-full text-sm md:text-base transition-all duration-200 " + (currentPage === 0 ? "bg-white/20 text-white/30 cursor-not-allowed" : "bg-white text-gray-700 hover:shadow-lg hover:scale-[1.03] active:scale-95")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={"flex items-center gap-1.5 px-5 md:px-6 py-3 rounded-full text-sm md:text-base transition-all duration-200 " + (currentPage === pages.length - 1 ? "bg-white/20 text-white/30 cursor-not-allowed" : "bg-white text-gray-700 hover:shadow-lg hover:scale-[1.03] active:scale-95")}
          >
            <span className="hidden sm:inline">Siguiente</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Book
