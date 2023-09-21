import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocialBar, Navbar, Footer} from './components/Index';
import Home from './pages/Home/Home';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <SocialBar />
      <Navbar />
      <main>
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
