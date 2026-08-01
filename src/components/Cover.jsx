import { motion } from 'framer-motion'

function Cover({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen px-5"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 text-center w-full max-w-sm md:max-w-md border border-white/20 shadow-xl">

        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white heartbeat">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>

        <h1 className="font-cursive text-4xl md:text-5xl text-white mb-6 leading-tight">
          Feliz Dia Mejor Amiga
        </h1>

        <p className="font-serif text-white/70 text-base md:text-lg mb-1">
          No tendras novio...
        </p>
        <p className="font-serif text-white/90 text-base md:text-lg mb-6">
          pero hoy no seras espectadora
        </p>

        <p className="font-cursive text-white/60 text-lg mb-10">
          1 de Agosto
        </p>

        <button
          onClick={onOpen}
          className="w-full bg-white text-gray-800 font-serif text-base md:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:shadow-xl"
        >
          Abrir mi sorpresa
        </button>
      </div>
    </motion.div>
  )
}

export default Cover
