import { Navigate, Route, Routes } from 'react-router'
import { lazy } from 'react'
import { Paths } from 'shared/consts'

const MainPage = lazy(() => import('./main'))
const LoginPage = lazy(() => import('./login'))

export const Routing = () => {
	return (
		<Routes>
			<Route path={Paths.MAIN} element={<MainPage />} />
			<Route path={Paths.LOGIN} element={<LoginPage />} />
			<Route path="*" element={<Navigate to={Paths.MAIN} />} />
		</Routes>
	)
}
