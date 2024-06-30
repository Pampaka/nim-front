import type { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { layoutService } from './model'
import { ThemeToggle } from 'shared/ui/theme-toggle'
import { LoginLink } from 'features/login-link'
import { Header } from 'shared/ui/header'
import { Paths } from 'shared/consts'

import style from './index.module.scss'

export interface LayoutProps extends ComponentPropsWithoutRef<'div'> {}

export const Layout = observer(({ children, className, ...props }: LayoutProps) => {
	return (
		<div>
			<div className={style.headWrapper}>
				{layoutService.header && (
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
				className={classNames(
					style.main,
					{ [style.noHeader]: !layoutService.header },
					className
				)}
				{...props}
			>
				{children}
			</div>
		</div>
	)
})
