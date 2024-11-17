import React from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Home from '../src/pages/Home'
import ContactForm from './pages/Contact'

const App = () => {
  return (
    <div>
<Navbar/>
<Home/>
<ContactForm />
<Footer />
    </div>
  )
}

export default App