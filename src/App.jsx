//import { useState } from 'react'
import Header from './components/Header';

import './App.css'
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Experties from './components/Experties';
import Footer from './components/Footer';

function App() {
  //const [count] = useState(0)

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <Experties></Experties>
    <Footer></Footer>
    </>
  )
}

export default App
