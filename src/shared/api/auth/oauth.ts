import { $authHost } from '../hosts'

export type TokenResponse = {
	accessToken: string
}

export class AuthApi {
	static async signIn(login: string, password: string, rememberUser: boolean) {
		const { data } = await $authHost.post<TokenResponse>('api/oauth/sign-in', {
			login,
			password,
			rememberUser
		})

		return data
	}

	static async refresh() {
		const { data } = await $authHost.post<TokenResponse>('api/oauth/refresh')
		return data
	}
}
