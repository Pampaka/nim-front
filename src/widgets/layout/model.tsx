import { makeAutoObservable } from 'mobx'
import { ComponentType, useEffect } from 'react'

interface LayoutSettingOptions {
	header?: boolean
}

export function layoutSetting<TProps extends object>(
	Component: ComponentType<TProps>,
	options?: LayoutSettingOptions
) {
	return (props: TProps) => {
		useEffect(() => {
			layoutService.setHeader(options?.header ?? true)
		}, [])

		return <Component {...(props as TProps)} />
	}
}

class LayoutService {
	header: boolean = true

	constructor() {
		makeAutoObservable(this)
	}

	setHeader(isShow: boolean) {
		this.header = isShow
	}
}

export const layoutService = new LayoutService()
