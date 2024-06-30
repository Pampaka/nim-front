import { $authHost } from '../hosts'

export class AuthApi {
	static async signIn(login: string, password: string, rememberUser: boolean) {
		const { data } = await $authHost.post('api/oauth/sign-in', {
			login,
			password,
			rememberUser
		})

		return data
	}
}
