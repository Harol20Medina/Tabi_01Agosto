import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pages = [
  {
    type: "image",
    src: "/img/img1.jpeg",
    phrase: "Quiero que sepas que pase lo que pase, siempre voy a estar para ti. No importa la hora ni el motivo.",
  },
  {
    type: "image",
    src: "/img/img2.jpeg",
    phrase: "Si algun dia sientes que el mundo te pesa, recuerda que aqui tienes a alguien que te va a ayudar a cargarlo.",
  },
  {
    type: "video",
    src: "/img/video1.mp4",
    phrase: "No tienes que fingir que estas bien conmigo. Si necesitas desahogarte, aqui estoy. Siempre.",
  },
  {
    type: "image",
    src: "/img/img3.jpeg",
    phrase: "Te voy a apoyar en cada decision que tomes, aunque a veces no este de acuerdo. Porque confio en ti.",
  },
  {
    type: "image",
    src: "/img/img4.jpeg",
    phrase: "Cuando todo se ponga dificil, acuerdate de esto: no estas sola. Me tienes a mi y eso no va a cambiar.",
  },
  {
    type: "video",
    src: "/img/video2.mp4",
    phrase: "Dumbledore dijo que el amor es la magia mas poderosa que existe. Y el de mejores amigos es prueba de eso.",
  },
  {
    type: "image",
    src: "/img/img5.jpeg",
    phrase: "Si necesitas ayuda con algo, solo dime. No me importa si es grande o pequeno, voy a estar ahi.",
  },
  {
    type: "video",
    src: "/img/video3.mp4",
    phrase: "Este video es prueba de que juntos siempre la pasamos bien. Y eso no se acaba nunca.",
  },
  {
    type: "image",
    src: "/img/img6.jpeg",
    phrase: "Te prometo que siempre voy a ser sincero contigo. Porque eso hacen los amigos de verdad.",
  },
  {
    type: "image",
    src: "/img/img7.jpeg",
    phrase: "Eres mas fuerte de lo que crees. Pero cuando no te sientas asi, aqui estoy para recordartelo.",
  },
  {
    type: "video",
    src: "/img/video4.mp4",
    phrase: "Miralo y acuerdate que mientras exista esta amistad, nada puede salir tan mal.",
  },
  {
    type: "image",
    src: "/img/img8.jpeg",
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
    enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  }

  const current = pages[currentPage]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 w-full"
    >
      <div className="w-full max-w-5xl">

        {/* Card */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-900/20">
          <div className="flex flex-col md:flex-row">

            {/* Media */}
            <div className="w-full md:w-1/2 p-2.5 md:p-4">
              <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[500px] rounded-xl overflow-hidden bg-slate-800">
                <AnimatePresence mode="wait" custom={dir}>
                  {current.type === "image" ? (
                    <motion.img
                      key={currentPage}
                      custom={dir}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={current.src}
                      alt={"Foto " + (currentPage + 1)}
                      className="w-full h-full object-cover absolute inset-0 rounded-xl"
                    />
                  ) : (
                    <motion.video
                      key={currentPage}
                      custom={dir}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={current.src}
                      autoPlay
                      loop
                      playsInline
                      controls
                      className="w-full h-full object-cover absolute inset-0 rounded-xl"
                    />
                  )}
                </AnimatePresence>

                {/* Counter */}
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs text-white/70 z-10 font-mono">
                  {currentPage + 1}/{pages.length}
                </div>

                {/* Video badge */}
                {current.type === "video" && (
                  <div className="absolute top-2 left-2 bg-blue-500/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs text-white font-medium z-10">
                    Video
                  </div>
                )}
              </div>
            </div>

            {/* Phrase */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center justify-center min-h-[200px] md:min-h-[500px]">

              <AnimatePresence mode="wait" custom={dir}>
                <motion.p
                  key={currentPage}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-cursive text-lg md:text-[1.4rem] lg:text-2xl text-white/85 text-center leading-relaxed px-2"
                >
                  {current.phrase}
                </motion.p>
              </AnimatePresence>

              {/* Progress */}
              <div className="mt-8 w-full max-w-[180px]">
                <div className="h-[3px] bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-400 rounded-full"
                    animate={{ width: ((currentPage + 1) / pages.length * 100) + "%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <p className="text-center text-white/30 text-xs mt-2 font-mono">
                  {currentPage + 1} de {pages.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={"flex items-center gap-1.5 px-5 md:px-6 py-3 rounded-full text-sm transition-all duration-200 " + (currentPage === 0 ? "bg-slate-900/50 text-white/20 cursor-not-allowed" : "bg-slate-800 text-white/80 hover:bg-slate-700 active:scale-95 border border-slate-700/50")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={"flex items-center gap-1.5 px-5 md:px-6 py-3 rounded-full text-sm transition-all duration-200 " + (currentPage === pages.length - 1 ? "bg-slate-900/50 text-white/20 cursor-not-allowed" : "bg-blue-500 text-white font-medium hover:bg-blue-600 active:scale-95 shadow-lg shadow-blue-500/20")}
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
