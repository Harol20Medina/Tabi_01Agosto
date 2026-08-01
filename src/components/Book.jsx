import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pages = [
  {
    type: "image",
    src: "/img/img1.jpeg",
    phrase: "Quiero que sepas que pase lo que pase, siempre voy a estar para ti. No importa la hora ni el motivo.",
    icon: "shield",
    color: "text-blue-400",
  },
  {
    type: "image",
    src: "/img/img2.jpeg",
    phrase: "Si algun dia sientes que el mundo te pesa, recuerda que aqui tienes a alguien que te va a ayudar a cargarlo.",
    icon: "hands",
    color: "text-cyan-400",
  },
  {
    type: "video",
    src: "/img/video1.mp4",
    phrase: "No tienes que fingir que estas bien conmigo. Si necesitas desahogarte, aqui estoy. Siempre.",
    icon: "ear",
    color: "text-teal-400",
  },
  {
    type: "image",
    src: "/img/img3.jpeg",
    phrase: "Te voy a apoyar en cada decision que tomes, aunque a veces no este de acuerdo. Porque confio en ti.",
    icon: "thumbup",
    color: "text-indigo-400",
  },
  {
    type: "image",
    src: "/img/img4.jpeg",
    phrase: "Cuando todo se ponga dificil, acuerdate de esto: no estas sola. Me tienes a mi y eso no va a cambiar.",
    icon: "link",
    color: "text-sky-400",
  },
  {
    type: "video",
    src: "/img/video2.mp4",
    phrase: "Dumbledore dijo que el amor es la magia mas poderosa que existe. Y el de mejores amigos es prueba de eso.",
    icon: "bolt",
    color: "text-purple-400",
  },
  {
    type: "image",
    src: "/img/img5.jpeg",
    phrase: "Si necesitas ayuda con algo, solo dime. No me importa si es grande o pequeno, voy a estar ahi.",
    icon: "wrench",
    color: "text-blue-300",
  },
  {
    type: "video",
    src: "/img/video3.mp4",
    phrase: "Este video es prueba de que juntos siempre la pasamos bien. Y eso no se acaba nunca.",
    icon: "play",
    color: "text-emerald-400",
  },
  {
    type: "image",
    src: "/img/img6.jpeg",
    phrase: "Te prometo que siempre voy a ser sincero contigo. Porque eso hacen los amigos de verdad.",
    icon: "lock",
    color: "text-violet-400",
  },
  {
    type: "image",
    src: "/img/img7.jpeg",
    phrase: "Eres mas fuerte de lo que crees. Pero cuando no te sientas asi, aqui estoy para recordartelo.",
    icon: "fire",
    color: "text-amber-400",
  },
  {
    type: "video",
    src: "/img/video4.mp4",
    phrase: "Miralo y acuerdate que mientras exista esta amistad, nada puede salir tan mal.",
    icon: "film",
    color: "text-teal-300",
  },
  {
    type: "image",
    src: "/img/img8.jpeg",
    phrase: "Feliz dia, loca. No tendras novio hoy, pero me tienes a mi y eso vale por mil. Te quiero infinito.",
    icon: "heart",
    color: "text-pink-400",
  },
]

function PageIcon({ name, className }) {
  const paths = {
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    hands: <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />,
    ear: <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />,
    thumbup: <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.228.22.442.396.632a2.25 2.25 0 002.794.555L10.5 19.5h.278M5.904 18.75H4.5A2.25 2.25 0 012.25 16.5v-7.5A2.25 2.25 0 014.5 6.75h1.404" />,
    link: <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.915 0a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757" />,
    bolt: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    wrench: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.32 5.32a2.25 2.25 0 01-3.182-3.182l5.32-5.32m2.182 2.182L15 12m-2.58 3.17l3.17-3.17a2.25 2.25 0 000-3.182l-3.17-3.17a2.25 2.25 0 00-3.182 0l-3.17 3.17a2.25 2.25 0 000 3.182l3.17 3.17a2.25 2.25 0 003.182 0z" />,
    play: <><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></>,
    lock: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
    fire: <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />,
    film: <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />,
    heart: <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />,
  }

  const isFilled = name === "heart"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isFilled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={isFilled ? 0 : 1.5}
      stroke={isFilled ? "none" : "currentColor"}
      className={className}
    >
      {paths[name]}
    </svg>
  )
}

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
                      muted
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

              {/* Icon that matches the phrase */}
              <PageIcon name={current.icon} className={"w-7 h-7 md:w-8 md:h-8 mb-5 shrink-0 " + current.color} />

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
