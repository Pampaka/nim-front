import { Route, Routes } from 'react-router'
import { Paths } from './paths'
import { MainPage } from './main'

export const Routing = () => {
	return (
		<Routes>
			<Route path={Paths.MAIN} element={<MainPage />} />
		</Routes>
	)
}
