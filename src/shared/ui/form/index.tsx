import type { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'
import style from './index.module.scss'

export interface FormProps extends ComponentPropsWithRef<'form'> {}

export const Form = ({ className, children, ...props }: FormProps) => {
	return (
		<form className={classNames(style.form, className)} {...props}>
			{children}
		</form>
	)
}
