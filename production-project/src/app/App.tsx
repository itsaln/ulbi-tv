import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'

import './styles/index.scss'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App
