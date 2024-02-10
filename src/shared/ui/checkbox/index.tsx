import type { ComponentPropsWithRef, ReactNode } from 'react'
import classNames from 'classnames'
import style from './index.module.scss'

export interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
	label?: ReactNode
}

export const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
	return (
		<label className={classNames(style.label, className)}>
			<input className={style.checkbox} type="checkbox" {...props} />
			{label}
		</label>
	)
}
