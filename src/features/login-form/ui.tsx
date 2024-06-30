import type { ComponentPropsWithoutRef } from 'react'

import { useLoginForm } from './model'
import { Input } from 'shared/ui/input'
import { Form } from 'shared/ui/form'
import { Checkbox } from 'shared/ui/checkbox'
import { Button } from 'shared/ui/button'
import { Loader } from 'shared/ui/loader'
import { ErrorMessage } from 'shared/ui/error-message'

import style from './index.module.scss'

export interface LoginFormProps extends ComponentPropsWithoutRef<'form'> {}

export const LoginForm = ({ ...props }: LoginFormProps) => {
	const {
		registers,
		submit,
		formState: { isSubmitting, errors }
	} = useLoginForm()

	return (
		<Form onSubmit={submit} {...props}>
			<Input
				placeholder="Логин"
				autoComplete="username"
				disabled={isSubmitting}
				error={errors.login?.message}
				{...registers.login}
			/>
			<Input
				placeholder="Пароль"
				type="password"
				autoComplete="password"
				disabled={isSubmitting}
				error={errors.password?.message}
				{...registers.password}
			/>
			<Checkbox label="Запомнить пароль" />
			<ErrorMessage error={errors.root?.serverError?.message || 'asdasdasd'} />
			<Button className={style.submit} disabled={isSubmitting}>
				{isSubmitting ? <Loader /> : 'Войти'}
			</Button>
		</Form>
	)
}
