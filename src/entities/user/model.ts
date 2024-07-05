import { jwtDecode } from 'jwt-decode'
import { makeAutoObservable } from 'mobx'

import { AuthApi } from 'shared/api'

export type UserType = {
	id: string
	login: string
	roleId: string
}

class UserService {
	id: string
	login: string
	roleId: string
	isAuth: boolean

	constructor() {
		this.id = ''
		this.login = ''
		this.roleId = ''
		this.isAuth = false

		makeAutoObservable(this, {
			signIn: false,
			refresh: false,
			setToken: false
		})
	}

	async signIn(login: string, password: string, rememberUser: boolean) {
		const { accessToken } = await AuthApi.signIn(login, password, rememberUser)
		this.setToken(accessToken)
	}

	async refresh() {
		const { accessToken } = await AuthApi.refresh()
		this.setToken(accessToken)
	}

	setToken(token: string) {
		const user: UserType = jwtDecode(token)
		if (!user) {
			return
		}

		this.setUser(user)
		localStorage.setItem('token', token)
	}

	resetUser() {
		this.isAuth = false
		this.id = ''
		this.login = ''
		this.roleId = ''
	}

	setUser(user: UserType) {
		this.isAuth = true
		this.id = user.id
		this.login = user.login
		this.roleId = user.roleId
	}

	setLogin(login: string) {
		this.login = login
	}
}

export const userService = new UserService()
