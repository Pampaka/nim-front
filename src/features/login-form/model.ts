import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { AuthApi } from 'shared/api'
import { Paths } from 'shared/consts'

type LoginFormData = {
	login: string
	password: string
}

export const useLoginForm = () => {
	const navigate = useNavigate()

	const { handleSubmit, register, formState } = useForm<LoginFormData>({
		defaultValues: {
			login: '',
			password: ''
		}
	})

	const submit = async (data: LoginFormData) => {
		if (formState.isSubmitting) {
			return
		}

		try {
			await AuthApi.signIn(data.login, data.password)
			navigate(Paths.MAIN)
		} catch (e) {
			console.log(e)
		}
	}

	const login = register('login', {
		required: 'Обязательное поле'
	})

	const password = register('password', {
		required: 'Обязательное поле'
	})

	return {
		formState,
		submit: handleSubmit(submit),
		registers: {
			login,
			password
		}
	}
}
