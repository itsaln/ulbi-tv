import { FC } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'

import './styles/index.scss'

const App: FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>

			<AppRouter />
		</div>
	)
}

export default App
