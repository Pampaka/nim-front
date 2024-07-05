import { Navigate, Route, Routes } from 'react-router'
import { lazy } from 'react'
import { Paths } from 'shared/consts'
import { userService } from 'entities/user'

const MainPage = lazy(() => import('./main'))
const LoginPage = lazy(() => import('./login'))
const AccountPage = lazy(() => import('./account'))

export const Routing = () => {
	return (
		<Routes>
			<Route path={Paths.MAIN} element={<MainPage />} />
			{!userService.isAuth && <Route path={Paths.LOGIN} element={<LoginPage />} />}
			{userService.isAuth && <Route path={Paths.ACCOUNT} element={<AccountPage />} />}
			<Route path="*" element={<Navigate to={Paths.MAIN} />} />
		</Routes>
	)
}
