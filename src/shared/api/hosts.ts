import axios from 'axios'

import { AUTH_URL, BACKEND_URL } from 'shared/consts'

const createHost = (baseURL: string) => {
	const $host = axios.create({
		baseURL: baseURL,
		withCredentials: true
	})

	$host.interceptors.request.use(config => {
		const token = localStorage.getItem('token')
		if (token) {
			config.headers.Authorization = localStorage.getItem('token')
		}

		return config
	})

	$host.interceptors.response.use(null, error => {
		// TODO дописать логику refresh
		if (error?.response?.status !== 401) {
			throw error
		}
		throw error
	})

	return $host
}

export const $authHost = createHost(AUTH_URL)
export const $backendHost = createHost(BACKEND_URL)
