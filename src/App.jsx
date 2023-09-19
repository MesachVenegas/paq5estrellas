import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocialBar, Navbar} from './components/Index';
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
    </BrowserRouter>
  )
}

export default App
