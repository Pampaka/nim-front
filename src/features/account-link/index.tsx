import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import classNames from 'classnames'

import { userService } from 'entities/user'
import { Paths } from 'shared/consts'

import style from './index.module.scss'

export interface AccountLinkProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
	tools?: ReactNode
}

export const AccountLink = observer(({ className, tools, ...props }: AccountLinkProps) => {
	return (
		<div className={classNames(style.accountLink, className)} {...props}>
			<Link to={Paths.ACCOUNT}>{userService.login}</Link>
			<div className={style.tools}>{tools}</div>
		</div>
	)
})
