import { motion } from 'framer-motion'

function Cover({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-5"
    >
      <div className="text-center w-full max-w-sm md:max-w-md">

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-10 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-blue-400 pulse-soft">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-cursive text-5xl md:text-7xl text-white mb-3"
        >
          Para Ti
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-cursive text-3xl md:text-4xl text-blue-300 mb-8"
        >
          Tabi
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-1 mb-10"
        >
          <p className="text-white/60 text-sm uppercase tracking-widest">
            Feliz dia mejor amiga
          </p>
          <p className="text-white/80 text-base md:text-lg font-serif mt-3">
            No tendras novio... pero hoy no seras espectadora
          </p>
          <p className="text-blue-400/60 text-sm font-mono mt-4">
            01.08.2026
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          onClick={onOpen}
          className="bg-blue-500 hover:bg-blue-600 text-white font-serif text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-blue-500/20"
        >
          Abrir sorpresa
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Cover
