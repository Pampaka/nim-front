import type { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'
import style from './index.module.scss'

export interface InputProps extends ComponentPropsWithRef<'input'> {}

export const Input = ({ className, ...props }: InputProps) => {
	return <input className={classNames(style.input, className)} {...props} />
}
