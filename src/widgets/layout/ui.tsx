import type { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { useAppSelector } from 'app/hooks'
import { ThemeToggle } from 'features/theme-toggle'
import { LoginLink } from 'features/login-link'
import { Header } from 'shared/ui/header'
import { Paths } from 'shared/consts'

import style from './index.module.scss'

export interface LayoutProps extends ComponentPropsWithoutRef<'div'> {}

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
						end={
							<>
								<ThemeToggle />
								<LoginLink />
							</>
						}
					/>
				)}
			</div>
			<div
				className={classNames(style.main, { [style.noHeader]: !header }, className)}
				{...props}
			>
				{children}
			</div>
		</div>
	)
}
