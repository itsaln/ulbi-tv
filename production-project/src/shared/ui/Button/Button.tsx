import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ className, theme, children, ...rest }) => {
	return (
		<button className={classNames(cls.Button, { [cls[theme]]: true }, [className])} {...rest}>
			{children}
		</button>
	)
}

export default Button
