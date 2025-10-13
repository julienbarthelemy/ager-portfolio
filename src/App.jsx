import './App.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './pages/Preloader'
import { Outlet, ScrollRestoration } from 'react-router'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0, 0);
    }, 1500)
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {
          isLoading && <Preloader />
        }
      </AnimatePresence>
      <AnimatePresence>
        {
          !isLoading && (
            <>
              <ScrollRestoration />
              <Header />
              <Outlet />
              <Footer />
            </>
          )
        }
      </AnimatePresence >
    </>
  )
}

export default App
