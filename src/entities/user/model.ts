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

	constructor() {
		this.id = ''
		this.login = ''
		this.roleId = ''

		makeAutoObservable(this, {
			refresh: false
		})
	}

	async refresh() {
		const { accessToken } = await AuthApi.refresh()

		const user: UserType = jwtDecode(accessToken)
		if (!user) {
			return
		}

		this.setUser(user)
		localStorage.setItem('token', accessToken)
	}

	reset() {
		this.id = ''
		this.login = ''
		this.roleId = ''
	}

	setUser(user: UserType) {
		this.id = user.id
		this.login = user.login
		this.roleId = user.roleId
	}

	setLogin(login: string) {
		this.login = login
	}
}

export const userService = new UserService()
