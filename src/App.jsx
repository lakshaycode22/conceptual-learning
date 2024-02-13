import { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Statistics from './components/Statistics'
import Map from './components/Map'
import Contact from './components/Contact'
import Results from './components/Results'

function App() {

  return (
    <Fragment>
      <div className='bg-primary-900'>

      <Navbar/>
      <Hero/>
      <Statistics/>
      <Features/>
      <Results/>
      {/* <About/> */}
      <Testimonials/>
      <Map/>
      <Contact/>
      </div>
    </Fragment>
  )
}

export default App
