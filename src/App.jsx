import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

import AppRouter from './AppRouter'

import 'styles'

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={'Загрузка'}>
				<AppRouter />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
