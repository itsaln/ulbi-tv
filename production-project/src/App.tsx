import { FC, Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'

import './index.scss'

const App: FC = () => {
	return (
		<div className='app'>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPageAsync />} />
					<Route path={'/about'} element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
