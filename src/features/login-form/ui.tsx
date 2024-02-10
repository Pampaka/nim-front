import type { ComponentPropsWithoutRef } from 'react'
import { Input } from 'shared/ui/input'
import { Form } from 'shared/ui/form'
import { Checkbox } from 'shared/ui/checkbox'

export interface LoginFormProps extends ComponentPropsWithoutRef<'form'> {}

export const LoginForm = ({ ...props }: LoginFormProps) => {
	return (
		<Form {...props}>
			<Input placeholder="Логин" autoComplete="email" />
			<Input placeholder="Пароль" type="password" autoComplete="password" />
			<Checkbox label="Запомнить пароль" />
		</Form>
	)
}
