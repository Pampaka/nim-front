import { ReactNode, useEffect, useState } from 'react'

import { userService } from 'entities/user'

export interface RefreshUserProviderProps {
	children?: ReactNode
}

export const RefreshUserProvider = ({ children }: RefreshUserProviderProps) => {
	const [isLoadnig, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		userService
			.refresh()
			.catch(() => {})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	if (isLoadnig) {
		return null
	}

	return children
}
