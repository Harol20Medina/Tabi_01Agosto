import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Book from './components/Book'
import Cover from './components/Cover'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!started ? (
          <Cover key="cover" onOpen={() => setStarted(true)} />
        ) : (
          <Book key="book" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
