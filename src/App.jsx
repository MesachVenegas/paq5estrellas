import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocialBar, Navbar, Footer } from './components/Index';
import Zips from './pages/Zips/Zips';
import Home from './pages/Home/Home';
import Track from './pages/Track/Track';
import Quotes from './pages/Quotes/Quotes';
import Contact from './pages/contact/Contact';
import './App.css'
import Work from './pages/Working/Work';

function App() {

  return (
    <BrowserRouter>
      <SocialBar />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/zips' element={<Zips />} />
          <Route path='/tracking' element={<Track />} />
          <Route path='/quote' element={<Quotes />} />
          <Route path='/about' element={<Work />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
