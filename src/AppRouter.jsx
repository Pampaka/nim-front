import { lazy } from 'react'
import { Route, Routes } from 'react-router'

import { MAIN_PATH, NOTES_PATH } from 'consts'

const MainPage = lazy(() => import('pages/MainPage/MainPage'))
const NotesPage = lazy(() => import('pages/NotesPage/NotesPage'))

const AppRouter = () => {
	return (
		<Routes>
			<Route path={MAIN_PATH} element={<MainPage />} />
			<Route path={NOTES_PATH} element={<NotesPage />} />
		</Routes>
	)
}

export default AppRouter
