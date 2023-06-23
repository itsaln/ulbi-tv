import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'

import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'

const App: FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>TOGGLE</button>
		</div>
	)
}

export default App
