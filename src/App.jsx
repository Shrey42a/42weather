import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Page from './Page';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';

function App() {
  return (
    <>
      <div className="bg-[url(https://images.wallpaperscraft.com/image/single/sea_sun_clouds_82769_2048x1429.jpg)] bg-center flex flex-col justify-between bg-cover max-h-max min-h-screen bg-fixed w-full">
        <Navbar />
        <div className='p-4'>
          <Routes>
            <Route index element={<Page />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
