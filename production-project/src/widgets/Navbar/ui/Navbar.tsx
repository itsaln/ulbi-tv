import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
	return (
	    <div className={classNames(cls.Navbar, {}, [])}>
		    <div className={cls.links}>
			    <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
			    <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
		    </div>
	    </div>
	)
}
