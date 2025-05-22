import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Ml from './components/Ml' 
import IoT from './components/IoT'
import Description from './components/Descriptio'
import Irrigation from './components/Irrigation'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      )
    },
    {
      path: '/herosection',
      element: (
        <>
          <Header />
          <HeroSection />
          <Footer />
        </>
      )
    },
    {
      path: '/ml',
      element: (
        <>
          <Header />
          <Ml />
          <Footer />
        </>
      )
    },{
      path:  '/iot',
      element: (
        <>
          <Header />
          <IoT/>
          <Footer />
        </>
      )
    },
    {
      path:'/description',
      element: (
        <>
          <Header />
          <Description/>
          <Footer />
        </>
      )
    },
    {
      path:'/irrigation',
      element: (
        <>
          <Header />
          <Irrigation/>
          <Footer />
        </>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default App
