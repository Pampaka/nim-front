import { Navigate, Route, Routes } from 'react-router'
import { lazy } from 'react'
import { Paths } from './paths'

const MainPage = lazy(() => import('./main'))

export const Routing = () => {
	return (
		<Routes>
			<Route path={Paths.MAIN} element={<MainPage />} />
			<Route path="*" element={<Navigate to={Paths.MAIN} />} />
		</Routes>
	)
}
