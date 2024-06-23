import { $authHost } from '../hosts'

export class AuthApi {
	static async signIn(login: string, password: string) {
		const { data } = await $authHost.post('api/oauth/sign-in', {
			login,
			password
		})

		return data
	}
}
