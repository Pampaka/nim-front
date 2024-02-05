import type { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { ThemeToggle } from 'features/theme-toggle'
import { Header } from 'shared/ui/header'
import { Paths } from 'shared/consts/paths'
import { useAppSelector } from 'app/hooks'
import style from './index.module.scss'

export interface LayoutProps extends ComponentPropsWithoutRef<'main'> {}

export const Layout = ({ children, className, ...props }: LayoutProps) => {
	const { header } = useAppSelector(state => state.layotReducer)

	return (
		<div>
			<div className={style.headWrapper}>
				{header && (
					<Header
						start={
							<Link className={style.logo} to={Paths.MAIN}>
								NiM
							</Link>
						}
						end={<ThemeToggle />}
					/>
				)}
			</div>
			<main
				className={classNames(style.main, { [style.noHeader]: !header }, className)}
				{...props}
			>
				{children}
			</main>
		</div>
	)
}
