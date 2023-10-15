import { HashRouter, Routes, Route } from 'react-router-dom';
import { SocialBar, Navbar, Footer } from './components/Index';
import { Suspense, lazy } from 'react';
import './App.css'

const Home = lazy(() => import('./pages/Home/Home'));
const Track = lazy(() => import('./pages/Track/Track'));
const Quotes = lazy(() => import('./pages/Quotes/Quotes'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Work = lazy(() => import('./pages/Working/Work'));
const Zips = lazy(() => import('./pages/Zips/Zips'));


function App() {

	return (
		<Suspense fallback={<span>Cargando...</span>}>
			<HashRouter>
				<SocialBar />
				<Navbar />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/zips' element={<Zips />} />
						<Route path='/tracking' element={<Track />} />
						<Route path='/quote' element={<Quotes />} />
						<Route path='/about' element={<Work />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</main>
				<Footer />
			</HashRouter>
		</Suspense>
	)
}

export default App
