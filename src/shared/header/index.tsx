import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import style from './index.module.scss'

export interface HeaderProps extends ComponentPropsWithoutRef<'div'> {
	end: ReactNode
}

export const Header = ({ end, ...props }: HeaderProps) => {
	return (
		<div className={style.head} {...props}>
			<div className={style.start}>NIM</div>
			<div className={style.end}>{end}</div>
		</div>
	)
}
