import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import style from './index.module.scss'

export interface HeaderProps extends ComponentPropsWithoutRef<'div'> {
	start?: ReactNode
	end?: ReactNode
}

export const Header = ({ start, end, ...props }: HeaderProps) => {
	return (
		<div className={style.root} {...props}>
			<div className={style.head}>
				<div className={style.start}>{start}</div>
				<div className={style.end}>{end}</div>
			</div>
		</div>
	)
}
